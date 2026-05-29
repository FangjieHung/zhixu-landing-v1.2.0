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
  /** SVG-space x */
  x: number;
  /** SVG-space y */
  y: number;
  /** Minutes by car */
  min: number;
  /** Localised place name */
  name: string;
  /** Reveal at scroll progress [0, 1] */
  reveal: number;
  /** Label horizontal anchor relative to marker */
  anchor?: 'start' | 'end';
}

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

  /** SVG viewBox is 1000 × 600, centre is (500, 300) where the Springs pin sits. */
  readonly pois: Poi[] = [
    { x: 460, y: 188, min: 4, name: '中央公園 · 主入口', reveal: 0.45, anchor: 'end' },
    { x: 248, y: 268, min: 5, name: '綠美圖', reveal: 0.55, anchor: 'end' },
    { x: 760, y: 232, min: 8, name: '國際會展中心', reveal: 0.62, anchor: 'start' },
    { x: 728, y: 410, min: 10, name: '水湳轉運中心', reveal: 0.7, anchor: 'start' },
    { x: 232, y: 422, min: 12, name: '台中車站', reveal: 0.78, anchor: 'end' },
    { x: 838, y: 122, min: 15, name: '台中大巨蛋 · 規劃中', reveal: 0.86, anchor: 'start' },
  ];

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

      const ease = 'none';

      // Initial state: zoomed-in on Springs pin, POIs hidden, caption hidden.
      gsap.set(svg, { scale: 2.6, transformOrigin: '50% 50%' });
      gsap.set('.lm-poi', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });
      gsap.set('.lm-caption', { opacity: 0, y: 24 });
      gsap.set('.lm-pin .pin-pulse', { scale: 1, opacity: 0.55, transformOrigin: '50% 50%' });

      if (prefersReduced) {
        gsap.set(svg, { scale: 1 });
        gsap.set('.lm-poi', { opacity: 1, scale: 1 });
        gsap.set('.lm-caption', { opacity: 1, y: 0 });
        return;
      }

      // Master scroll timeline — pin the stage, scrub camera zoom + reveals.
      const tl = gsap.timeline({
        defaults: { ease },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=2200',
          scrub: 0.6,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(svg, { scale: 1, duration: 1 }, 0);

      // POIs reveal at staggered scroll progress.
      this.pois.forEach((_, i) => {
        const sel = `.lm-poi[data-i="${i}"]`;
        const reveal = this.pois[i].reveal;
        tl.to(
          sel,
          { opacity: 1, scale: 1, duration: 0.12, ease: 'power2.out' },
          reveal,
        );
      });

      // Caption fades in near the end.
      tl.to('.lm-caption', { opacity: 1, y: 0, duration: 0.18, ease: 'power2.out' }, 0.88);

      // Continuous pulse on the centre pin (independent of scroll).
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

  /** Helper for template label x offset based on anchor side. */
  poiLabelX(poi: Poi): number {
    return poi.anchor === 'end' ? poi.x - 28 : poi.x + 28;
  }

  poisTrack(_index: number, p: Poi): number {
    return p.min * 1000 + p.x;
  }
}
