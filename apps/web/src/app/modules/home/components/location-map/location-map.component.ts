import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Poi {
  x: number;
  y: number;
  min: number;
  name: string;
  reveal: number;
  anchor?: 'start' | 'end';
  /** label vertical position relative to marker; default above */
  vAnchor?: 'above' | 'below';
}

interface Route {
  id: string;
  d: string;
  stroke: string;
  width: number;
  label: string;
  labelX: number;
  labelY: number;
  labelAnchor: 'start' | 'middle' | 'end';
  reveal: number;
  duration: number;
}

interface BgMark {
  x: number;
  y: number;
  name: string;
  reveal: number;
}

// 之序（水湳智慧城）真實經緯度，請至 Google Maps 確認後更新
const MAP_CENTER = { lat: 24.1714, lng: 120.6352 };

// 經緯度 → SVG 像素的縮放係數，與 viewBox 搭配
// x 較大讓水平方向 POI 分散；y 保留 5500 才能把機場（lat 24.265）容納在 viewBox 上緣
const MAP_SCALE = { x: 10000, y: 5500 };

// SVG viewBox 對齊底圖 (assets/image/map/map-bg.svg) 的 1831×1013
// SVG_CENTER 預設放在底圖幾何中心，若之序在底圖中的實際位置不在中央，請改成那個座標
const SVG_CENTER = { x: 915, y: 506 };

function latLngToSvg(lat: number, lng: number): { x: number; y: number } {
  return {
    x: Math.round(SVG_CENTER.x + (lng - MAP_CENTER.lng) * MAP_SCALE.x),
    y: Math.round(SVG_CENTER.y - (lat - MAP_CENTER.lat) * MAP_SCALE.y),
  };
}

// 鏡頭縮放關鍵節點
const ZOOM_PHASE1_START = 4.68; // = 2.6 * 1.8，緊鎖之序
const ZOOM_PHASE1_END = 1.8;    // 顯示原本 1000×600 範圍（近端 POI 都在）
const ZOOM_PHASE2_END = 1.0;    // 顯示完整 1800×1080 範圍（含遠端 POI / 路線）

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
})
export class LocationMapComponent
  extends BBDBaseComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('section', { static: true }) sectionRef!: ElementRef<HTMLElement>;
  @ViewChild('stage', { static: true }) stageRef!: ElementRef<HTMLElement>;
  @ViewChild('map', { static: true }) mapRef!: ElementRef<SVGSVGElement>;

  private gsapCtx?: gsap.Context;

  /**
   * Phase 1 近端 POI（步行/短車程）。
   * 座標由 latLngToSvg() 從真實經緯度算出；min 為非尖峰時段車程估算。
   * 更新方式：Google Maps 右鍵複製座標 → 填入 latLngToSvg(lat, lng)。
   */
  readonly pois: Poi[] = [
    { ...latLngToSvg(24.178, 120.629), min: 3,  name: '中央公園 · 主入口',   reveal: 0.30, anchor: 'end',   vAnchor: 'above' },
    { ...latLngToSvg(24.176, 120.622), min: 5,  name: '綠美圖',             reveal: 0.36, anchor: 'end',   vAnchor: 'below' },
    { ...latLngToSvg(24.169, 120.643), min: 7,  name: '國際會展中心',        reveal: 0.40, anchor: 'start', vAnchor: 'above' },
    { ...latLngToSvg(24.162, 120.638), min: 8,  name: '水湳轉運中心',        reveal: 0.44, anchor: 'end',   vAnchor: 'below' },
    { ...latLngToSvg(24.138, 120.685), min: 15, name: '台中車站',            reveal: 0.48, anchor: 'end',   vAnchor: 'above' },
    { ...latLngToSvg(24.183, 120.648), min: 12, name: '台中大巨蛋 · 規劃中', reveal: 0.52, anchor: 'start', vAnchor: 'above' },
  ];

  /**
   * Phase 2 遠端 POI（區域級地標）。
   * 機場真實緯度會落在 viewBox 上緣（y≈25）被 navbar 覆蓋，
   * 改用方向指示位置 y=140，作為「往北 18 分鐘」的方向標。
   */
  readonly farPois: Poi[] = [
    { ...latLngToSvg(24.161, 120.643), min: 10, name: '七期 · 市政中心', reveal: 0.78, anchor: 'end'   },
    { ...latLngToSvg(24.180, 120.610), min: 8,  name: '中部科學園區',    reveal: 0.82, anchor: 'end'   },
    { x: 760, y: 160,                  min: 18, name: '台中國際機場',    reveal: 0.86, anchor: 'start', vAnchor: 'below' },
  ];

  /** Phase 2 背景剪影記號（無分鐘數，僅作為城市座標感）。 */
  readonly bgMarks: BgMark[] = [
    { ...latLngToSvg(24.184, 120.668), name: '文華高中',     reveal: 0.84 },
    { ...latLngToSvg(24.116, 120.616), name: '高鐵 · 台中站', reveal: 0.86 },
  ];

  /**
   * Phase 2 線路 — d 為手繪示意 path，並非精準 GIS 對位。
   * 顏色採台灣官方規範：國道綠、快速道路紅、捷運色票。
   */
  readonly routes: Route[] = [
    {
      id: 'freeway-1',
      d: 'M 366 -38 Q 407 207 417 506 Q 427 807 458 1050',
      stroke: '#4a6b3c',
      width: 4,
      label: '國道 1 號',
      labelX: 448,
      labelY: 920,
      labelAnchor: 'start',
      reveal: 0.62,
      duration: 0.05,
    },
    {
      id: 'freeway-74',
      d: 'M -41 225 Q 610 188 1119 244 Q 1525 281 1871 244',
      stroke: '#b04a3a',
      width: 4.5,
      label: '國道 74 快速道路',
      labelX: 1670,
      labelY: 225,
      labelAnchor: 'end',
      reveal: 0.66,
      duration: 0.05,
    },
    {
      id: 'mrt-orange',
      d: 'M -41 656 Q 508 638 915 675 Q 1322 713 1871 694',
      stroke: '#d97a3a',
      width: 4,
      label: '捷運橘線',
      labelX: 1670,
      labelY: 713,
      labelAnchor: 'end',
      reveal: 0.70,
      duration: 0.05,
    },
    {
      id: 'mrt-green',
      d: 'M 1037 -38 Q 1027 375 1017 657 Q 1017 891 1057 1050',
      stroke: '#5a8f4c',
      width: 4,
      label: '捷運綠線',
      labelX: 1078,
      labelY: 938,
      labelAnchor: 'start',
      reveal: 0.74,
      duration: 0.05,
    },
  ];

  readonly captionNear = {
    eyebrow: '07 · THE LOCATION · 位置之必然',
    line1: '水湳，',
    line2: '在你的步行距離裡成形。',
  };
  readonly captionFar = {
    eyebrow: '07 · THE REACH · 城市的中心',
    line1: '以之序為原點，',
    line2: '抵達台中所有要地。',
  };

  constructor(injector: Injector, private host: ElementRef<HTMLElement>) {
    super(injector);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initScrollAnimation();
  }

  ngOnDestroy(): void {
    this.gsapCtx?.revert();
  }

  private initScrollAnimation(): void {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.registerPlugin(ScrollTrigger);

    this.gsapCtx = gsap.context(() => {
      const section = this.sectionRef.nativeElement;
      const stage = this.stageRef.nativeElement;
      const svg = this.mapRef.nativeElement;

      // 預備：量測每條 route path 的長度，設定 dash 起始狀態
      const routePaths = Array.from(
        svg.querySelectorAll<SVGPathElement>('.lm-route-path'),
      );
      routePaths.forEach((path) => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
      });

      // 初始狀態
      gsap.set(svg, { scale: ZOOM_PHASE1_START, transformOrigin: '50% 50%' });
      gsap.set('.lm-poi', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });
      gsap.set('.lm-far-poi', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });
      gsap.set('.lm-bg-mark', { opacity: 0 });
      gsap.set('.lm-route-label', { opacity: 0 });
      gsap.set('.lm-caption-near', { opacity: 0, y: 24 });
      gsap.set('.lm-caption-far', { opacity: 0, y: 24 });
      gsap.set('.lm-pin .pin-pulse', { scale: 1, opacity: 0.55, transformOrigin: '50% 50%' });

      if (prefersReduced) {
        gsap.set(svg, { scale: ZOOM_PHASE2_END });
        gsap.set('.lm-poi', { opacity: 0, scale: 1 });
        gsap.set('.lm-far-poi', { opacity: 1, scale: 1 });
        gsap.set('.lm-bg-mark', { opacity: 0.7 });
        gsap.set('.lm-route-label', { opacity: 1 });
        gsap.set('.lm-caption-far', { opacity: 1, y: 0 });
        routePaths.forEach((path) => { path.style.strokeDashoffset = '0'; });
        return;
      }

      // 主時間軸 — pin 住整個 stage、scrub 進度條
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=3700',
          scrub: 0.6,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── Phase 1（0 ~ 0.59）─────────────────────────────────────
      tl.to(svg, { scale: ZOOM_PHASE1_END, duration: 0.59 }, 0);

      this.pois.forEach((poi, i) => {
        tl.to(
          `.lm-poi[data-i="${i}"]`,
          { opacity: 1, scale: 1, duration: 0.04, ease: 'power2.out' },
          poi.reveal,
        );
      });

      tl.to('.lm-caption-near', { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.54);

      // ── Phase 2（0.59 ~ 1.0）───────────────────────────────────
      // 近端 POI 與 caption 淡出
      tl.to('.lm-poi', { opacity: 0, duration: 0.05, ease: 'power1.in' }, 0.59);
      tl.to('.lm-caption-near', { opacity: 0, duration: 0.05, ease: 'power1.in' }, 0.59);

      // 鏡頭再拉遠
      tl.to(svg, { scale: ZOOM_PHASE2_END, duration: 0.25 }, 0.60);

      // 線路 stroke draw-on
      this.routes.forEach((route) => {
        tl.to(
          `.lm-route-path[data-id="${route.id}"]`,
          { strokeDashoffset: 0, duration: route.duration, ease: 'power1.out' },
          route.reveal,
        );
        tl.to(
          `.lm-route-label[data-id="${route.id}"]`,
          { opacity: 0.92, duration: 0.04, ease: 'power2.out' },
          route.reveal + route.duration,
        );
      });

      // 遠端 POI reveal
      this.farPois.forEach((poi, i) => {
        tl.to(
          `.lm-far-poi[data-i="${i}"]`,
          { opacity: 1, scale: 1, duration: 0.04, ease: 'power2.out' },
          poi.reveal,
        );
      });

      // 背景剪影標記
      this.bgMarks.forEach((mark, i) => {
        tl.to(
          `.lm-bg-mark[data-i="${i}"]`,
          { opacity: 0.7, duration: 0.04, ease: 'power2.out' },
          mark.reveal,
        );
      });

      // 遠景 caption 進場
      tl.to('.lm-caption-far', { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.90);

      // 中心 pin 持續呼吸（與 scroll 無關）
      gsap.fromTo(
        '.lm-pin .pin-pulse',
        { scale: 1, opacity: 0.55 },
        {
          scale: 2.2,
          opacity: 0,
          duration: 2.2,
          ease: 'power1.out',
          repeat: -1,
          repeatDelay: 0.2,
        },
      );

      setTimeout(() => ScrollTrigger.refresh(), 250);
    }, this.host.nativeElement);
  }

  /** label 水平偏移：anchor=end 在標記左側、start 在右側 */
  poiLabelX(poi: Poi): number {
    return poi.anchor === 'end' ? poi.x - 28 : poi.x + 28;
  }

  /** label 垂直偏移：vAnchor=below 時放在標記下方 */
  poiLabelTopY(poi: Poi): number {
    return poi.vAnchor === 'below' ? poi.y + 36 : poi.y - 14;
  }
  poiLabelBottomY(poi: Poi): number {
    return poi.vAnchor === 'below' ? poi.y + 54 : poi.y + 4;
  }

  poisTrack(_index: number, p: Poi): number {
    return p.min * 1000 + p.x;
  }

  bgMarksTrack(_index: number, m: BgMark): number {
    return m.x * 1000 + m.y;
  }

  routesTrack(_index: number, r: Route): string {
    return r.id;
  }
}
