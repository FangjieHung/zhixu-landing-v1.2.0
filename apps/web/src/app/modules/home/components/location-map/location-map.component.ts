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

interface EdgeMarker {
  /** 圓心 x（通常 = 0，圓心在 viewBox 左邊外側，視覺上只看到 1/4 ~ 1/2 圓） */
  x: number;
  y: number;
  /** 半圓半徑 */
  r: number;
  min: number;
  name: string;
  reveal: number;
}

// SVG viewBox 對齊底圖 (assets/image/map/map-bg.svg) 的 1831×1013
// SVG_CENTER = 之序在底圖上的實際 SVG 座標（使用者用 debug 浮層校正過）
const SVG_CENTER = { x: 895, y: 596 };

// transform-origin in CSS % — 鏡頭 zoom 以「之序」為中心
// 895 / 1831 ≈ 48.88 %, 596 / 1013 ≈ 58.83 %
const ZOOM_ORIGIN = '48.9% 58.8%';

// 鏡頭縮放關鍵節點
const ZOOM_PHASE1_START = 3.4;  // 緊鎖之序
const ZOOM_PHASE1_END = 1.3;    // 顯示 8 個近端 POI 涵蓋範圍
const ZOOM_PHASE2_END = 1.0;    // 顯示完整 viewBox（含左側 1/4 圓示意）

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

  /** 之序在底圖上的 SVG viewBox 座標 — 中心 pin 的位置 */
  readonly centerPin = SVG_CENTER;

  /**
   * Phase 1 近端 POI — 座標由使用者用 debug 浮層在 map-bg.svg 上點過，直接寫死。
   * min 為非尖峰時段車程估算，待使用者用 Google Maps 路線確認。
   */
  readonly pois: Poi[] = [
    { x: 755, y: 592, min: 3, name: '中央公園 · 主入口',   reveal: 0.28, anchor: 'end',   vAnchor: 'above' },
    { x: 776, y: 363, min: 5, name: '台中綠美圖',         reveal: 0.32, anchor: 'end',   vAnchor: 'above' },
    { x: 710, y: 248, min: 8, name: '水湳轉運中心',       reveal: 0.36, anchor: 'end',   vAnchor: 'above' },
    { x: 268, y: 290, min: 7, name: '台中國際會展中心',   reveal: 0.40, anchor: 'start', vAnchor: 'above' },
    { x: 598, y: 835, min: 2, name: '台中超巨蛋',         reveal: 0.44, anchor: 'end',   vAnchor: 'below' },
    { x: 845, y: 693, min: 2, name: '台中流行影音中心',   reveal: 0.48, anchor: 'start', vAnchor: 'below' },
    { x: 855, y: 697, min: 2, name: '水湳經貿園區站',     reveal: 0.52, anchor: 'start', vAnchor: 'above' },
    { x: 861, y: 935, min: 5, name: '捷運文華高中站',     reveal: 0.56, anchor: 'end',   vAnchor: 'below' },
  ];

  /**
   * Phase 2 邊界示意（中科、七期）— 圓心擺在 viewBox 左邊界 x=0，
   * 視覺上只露出右側 1/4 ~ 1/2 的弧，作為「往該方向 X 分鐘」的方向標。
   */
  readonly edgeMarkers: EdgeMarker[] = [
    { x: 0, y: 122, r: 90, min: 8,  name: '中部科學園區', reveal: 0.78 },
    { x: 0, y: 952, r: 90, min: 10, name: '台中七期',     reveal: 0.84 },
  ];

  /**
   * Phase 2 線路 — d 為手繪示意 path，使用者尚未提供精準描線。
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

  /** TEMP: 路徑收集 debug 浮層，收集完所有座標後刪除 */
  debugHover = '移動滑鼠到地圖上 · 點擊累積座標 · 「清空」重置';
  debugPoints: Array<{ x: number; y: number }> = [];

  constructor(injector: Injector, private host: ElementRef<HTMLElement>) {
    super(injector);
  }

  onMapHover(event: MouseEvent): void {
    const local = this.svgPoint(event);
    if (!local) return;
    this.debugHover = `Hover · x=${Math.round(local.x)}  y=${Math.round(local.y)}`;
  }

  onMapClick(event: MouseEvent): void {
    const local = this.svgPoint(event);
    if (!local) return;
    const p = { x: Math.round(local.x), y: Math.round(local.y) };
    this.debugPoints = [...this.debugPoints, p];
    console.log(`[location-map] +P${this.debugPoints.length} = { x: ${p.x}, y: ${p.y} }`);
  }

  clearDebugPoints(): void {
    this.debugPoints = [];
    console.log('[location-map] debug points cleared');
  }

  /** 把 viewport mouse 座標轉成 SVG viewBox 座標 */
  private svgPoint(event: MouseEvent): { x: number; y: number } | null {
    const svg = this.mapRef.nativeElement;
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    return pt.matrixTransform(ctm.inverse());
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

      // 初始狀態 — 鏡頭緊鎖在之序、其他元素隱藏
      gsap.set(svg, { scale: ZOOM_PHASE1_START, transformOrigin: ZOOM_ORIGIN });
      gsap.set('.lm-poi', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });
      gsap.set('.lm-edge-marker', { opacity: 0 });
      gsap.set('.lm-route-label', { opacity: 0 });
      gsap.set('.lm-caption-near', { opacity: 0, y: 24 });
      gsap.set('.lm-caption-far', { opacity: 0, y: 24 });
      gsap.set('.lm-pin .pin-pulse', { scale: 1, opacity: 0.55, transformOrigin: '50% 50%' });

      if (prefersReduced) {
        gsap.set(svg, { scale: ZOOM_PHASE2_END });
        gsap.set('.lm-poi', { opacity: 0, scale: 1 });
        gsap.set('.lm-edge-marker', { opacity: 1 });
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

      tl.to('.lm-caption-near', { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.56);

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

      // Edge markers (中科、七期) reveal
      this.edgeMarkers.forEach((m, i) => {
        tl.to(
          `.lm-edge-marker[data-i="${i}"]`,
          { opacity: 1, duration: 0.05, ease: 'power2.out' },
          m.reveal,
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

  /** Edge marker 半圓 path d — 圓心 (0, 0)、半徑 r、開口朝右 */
  edgeMarkerPath(r: number): string {
    return `M 0 ${-r} A ${r} ${r} 0 0 1 0 ${r} Z`;
  }

  poisTrack(_index: number, p: Poi): number {
    return p.min * 1000 + p.x;
  }

  edgeMarkersTrack(_index: number, m: EdgeMarker): number {
    return m.y;
  }

  routesTrack(_index: number, r: Route): string {
    return r.id;
  }
}
