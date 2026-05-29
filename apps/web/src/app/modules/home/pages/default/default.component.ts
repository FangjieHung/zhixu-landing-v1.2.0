import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Injector,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { BBDBaseComponent } from '@core/shared';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Milestone {
  name: string;
  when: string;
  status: 'done' | 'wip' | 'plan' | 'now';
  label: string;
}

interface Walk { p: string; m: string; n: string; }
interface SpecCell { k: string; v: string; sub: string; }

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements AfterViewInit, OnDestroy {
  scrolled = false;
  active = 'hero';

  layout: '47' | '52' | 'any' = 'any';
  purpose: 'self' | 'asset' | 'tbd' = 'self';
  submitted = false;

  readonly assetBase = 'assets/image/refers';

  readonly img = {
    hero: `${this.assetBase}/外觀/62.jpg`,
    work1: `${this.assetBase}/外觀/102.jpg`,
    work2: `${this.assetBase}/外觀/104.jpg`,
    work3: `${this.assetBase}/外觀/105.jpg`,
    circle: `${this.assetBase}/公設-內部/164.jpg`,
    tower: `${this.assetBase}/外觀/108.jpg`,
    map: `${this.assetBase}/機能地圖/500.svg`,
    craftHero: `${this.assetBase}/外觀/158.jpg`,
  };

  /** Editorial mosaic of indoor amenity photos. */
  readonly amenities: Array<{ src: string; label: string; sub?: string; size: 'lg' | 'md' | 'sm' | 'tall' }> = [
    { src: `${this.assetBase}/公設-內部/164.jpg`, label: '迎賓大廳', sub: 'LOBBY · 入門儀式', size: 'lg' },
    { src: `${this.assetBase}/公設-內部/170.jpg`, label: '雙廳交誼', sub: 'SOCIAL LOUNGE', size: 'md' },
    { src: `${this.assetBase}/公設-內部/176.jpg`, label: '私宴餐廳', sub: 'PRIVATE DINING', size: 'md' },
    { src: `${this.assetBase}/公設-內部/182.jpg`, label: '酒窖品鑑', sub: 'WINE CELLAR', size: 'tall' },
    { src: `${this.assetBase}/公設-內部/188.jpg`, label: '私人健身房', sub: 'FITNESS', size: 'md' },
    { src: `${this.assetBase}/公設-內部/254.jpg`, label: '室內泳池', sub: 'SWIMMING POOL', size: 'lg' },
    { src: `${this.assetBase}/公設-內部/260.jpg`, label: '蒸氣三溫暖', sub: 'SAUNA', size: 'sm' },
    { src: `${this.assetBase}/公設-內部/266.jpg`, label: '兒童閱讀室', sub: 'READING ROOM', size: 'md' },
    { src: `${this.assetBase}/公設-內部/273.jpg`, label: '會議廳', sub: 'EXECUTIVE LOUNGE', size: 'md' },
    { src: `${this.assetBase}/公設-內部/281.jpg`, label: '影視廳', sub: 'CINEMA', size: 'lg' },
    { src: `${this.assetBase}/公設-內部/287.jpg`, label: 'SPA 美容室', sub: 'SPA', size: 'sm' },
    { src: `${this.assetBase}/公設-內部/296.jpg`, label: '空中花園', sub: 'SKY GARDEN', size: 'tall' },
  ];

  /** Full-bleed nearby major-development slides. */
  readonly district: Array<{ src: string; eyebrow: string; title: string; body: string }> = [
    {
      src: `${this.assetBase}/周邊機能/128.jpg`,
      eyebrow: '01 · 2025 · 開幕',
      title: '台中綠美圖',
      body: '由日本 SANAA 設計、67,000 平方米的圖書館與美術館合體建築，把一座城市的閱讀史與當代藝術，安置在你的步行半徑內。',
    },
    {
      src: `${this.assetBase}/周邊機能/131.jpg`,
      eyebrow: '02 · 2025.10 · 試營運',
      title: '台中國際會展中心',
      body: '亞洲新指標級會展空間，全年承載產業旗艦展、跨國品牌發表。鄰居的訪客，就是這個時代的決策者。',
    },
    {
      src: `${this.assetBase}/周邊機能/134.jpg`,
      eyebrow: '03 · 2024 · 已啟用',
      title: '水湳轉運中心',
      body: '高鐵、城際巴士、市公車三軌共構，10 分鐘車程銜接整個中部生活圈。出門，已不再是時間的計算題。',
    },
    {
      src: `${this.assetBase}/周邊機能/150.jpg`,
      eyebrow: '04 · 2026 · 啟用',
      title: '流行音樂與影音中心',
      body: '台中對標小巨蛋的旗艦音樂場域。從你客廳的窗，就能聽見一座城市的脈搏。',
    },
    {
      src: `${this.assetBase}/周邊機能/364.jpg`,
      eyebrow: '05 · 規劃中',
      title: '台中大巨蛋 · 中央公園',
      body: '67 公頃中央公園已成形，大巨蛋規劃進駐——之序四面臨路，每一面都是這座城市的展示櫥窗。',
    },
  ];

  readonly navItems: Array<{ id: string; label: string }> = [
    { id: 'trust', label: '建商 / 營造' },
    { id: 'whynow', label: '建設 / 生活' },
    { id: 'spec', label: '建案規格' },
    { id: 'design', label: '設計者' },
    { id: 'circle', label: '圈層' },
  ];

  readonly milestones: Milestone[] = [
    { name: '台中綠美圖', when: '2025 末', status: 'done', label: '已開幕' },
    { name: '國際會展中心', when: '2025.10', status: 'done', label: '試營運' },
    { name: '水湳轉運中心', when: '2024', status: 'done', label: '已啟用' },
    { name: '流行影音中心', when: '2026', status: 'wip', label: '啟用中' },
    { name: '台中大巨蛋', when: '規劃中', status: 'plan', label: '規劃進駐' },
    { name: '之序 · 完工交屋', when: '2027', status: 'now', label: '你的時間點' },
  ];

  readonly walks: Walk[] = [
    { p: '中央公園 · 主入口', m: '步行', n: '03' },
    { p: '全聯福利中心', m: '步行', n: '06' },
    { p: '水湳國小（規劃中）', m: '步行', n: '08' },
    { p: '家樂福 · 西屯店', m: '車行', n: '07' },
    { p: '聯合醫院水湳院區', m: '步行', n: '10' },
    { p: '台中捷運水湳站（綠線延伸）', m: '步行', n: '12' },
  ];

  readonly specCells: SpecCell[] = [
    { k: 'GROUND FLOORS · 地上層數', v: '29', sub: '層' },
    { k: 'BELOW GROUND · 地下層數', v: '03', sub: '地下三層 · 車位 248' },
    { k: 'TOTAL UNITS · 總戶數', v: '186', sub: '戶 · 不多不少' },
    { k: 'AREA RANGE · 坪數範圍', v: '47 / 52', sub: '坪 · 建坪計' },
    { k: 'LAYOUT · 格局', v: '三房', sub: '兩款；雙衛皆開窗' },
    { k: 'HANDOVER · 預計交屋', v: '2027', sub: '預計交屋年' },
  ];

  readonly layoutOptions: Array<{ v: '47' | '52' | 'any'; l: string }> = [
    { v: '47', l: '47 坪 · 精準' },
    { v: '52', l: '52 坪 · 餘裕' },
    { v: 'any', l: '都看看' },
  ];

  readonly purposeOptions: Array<{ v: 'self' | 'asset' | 'tbd'; l: string }> = [
    { v: 'self', l: '自住' },
    { v: 'asset', l: '資產配置' },
    { v: 'tbd', l: '尚未確定' },
  ];

  private gsapCtx?: gsap.Context;

  constructor(
    injector: Injector,
    private cdr: ChangeDetectorRef,
    private host: ElementRef<HTMLElement>,
  ) {
    super(injector);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    setTimeout(() => this.onScroll(), 0);
    this.initAnimations();
  }

  ngOnDestroy(): void {
    this.gsapCtx?.revert();
  }

  private initAnimations(): void {
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const root = this.host.nativeElement;
    const ease = 'power3.out';

    this.gsapCtx = gsap.context(() => {
      // ───── Hero entrance ─────
      const heroTl = gsap.timeline({ defaults: { ease, duration: 1.1 } });
      heroTl
        .from('.hero .eyebrow', { y: 18, opacity: 0, duration: 0.7 })
        .from('.hero h1.zh', { y: 36, opacity: 0, duration: 1.2 }, '-=0.3')
        .from('.hero .lede', { y: 24, opacity: 0, duration: 0.9 }, '-=0.7')
        .from('.hero .stack .tl', { y: 16, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.5')
        .from('.hero-img .ph-img', { scale: 1.08, opacity: 0, duration: 1.6, ease: 'power2.out' }, 0)
        .from('.hero-img .overlay-en, .hero-img .overlay-tag', { opacity: 0, y: 12, stagger: 0.15, duration: 0.8 }, '-=0.6')
        .from('.hero-footer > *', { opacity: 0, y: 12, stagger: 0.12, duration: 0.6 }, '-=0.4');

      // ───── Hero image parallax ─────
      gsap.to('.hero-img .ph-img', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      // ───── THE CRAFT (甲級營造) reveals ─────
      gsap.utils.toArray<HTMLElement>('.craft .craft-anchor, .craft .craft-card').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 36, duration: 1.2, ease,
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });
      gsap.from('.craft .craft-hero img', {
        scale: 1.12, opacity: 0.4, duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: '.craft .craft-hero', start: 'top 85%', toggleActions: 'play none none none' },
      });

      // ───── THE AMENITIES mosaic ─────
      gsap.utils.toArray<HTMLElement>('.amenities-section .am-head > *, .amenities-section .am-foot > *').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 1, ease,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
      gsap.utils.toArray<HTMLElement>('.amenities-section .am-tile').forEach((tile, i) => {
        gsap.from(tile, {
          opacity: 0, y: 40, duration: 1.1, ease,
          scrollTrigger: { trigger: tile, start: 'top 90%', toggleActions: 'play none none none' },
        });
        const img = tile.querySelector<HTMLImageElement>('img');
        if (img) {
          gsap.from(img, {
            scale: 1.15, duration: 1.6, ease: 'power2.out',
            scrollTrigger: { trigger: tile, start: 'top 92%', toggleActions: 'play none none none' },
          });
        }
      });

      // ───── THE DISTRICT (附近重大建設) — fullscreen slides ─────
      gsap.utils.toArray<HTMLElement>('.district .dt-slide').forEach((slide) => {
        const img = slide.querySelector<HTMLImageElement>('img');
        const overlay = slide.querySelector<HTMLElement>('.dt-overlay');
        if (img) {
          gsap.to(img, {
            yPercent: -12, ease: 'none',
            scrollTrigger: { trigger: slide, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        }
        if (overlay) {
          gsap.from(overlay.children, {
            opacity: 0, y: 28, duration: 1, stagger: 0.15, ease,
            scrollTrigger: { trigger: slide, start: 'top 70%', toggleActions: 'play none none none' },
          });
        }
      });

      // ───── Generic section reveal ─────
      const revealSelectors = [
        '.trust .trust-head',
        '.trust .trust-grid > .cell',
        '.trust .lineage',
        '.builder-deep .anchor-q',
        '.builder-deep .builder-body .bd-essay',
        '.builder-deep .bd-right .bd-stat',
        '.builder-deep .bd-works-head',
        '.builder-deep .bd-work',
        '.builder-deep .bd-final',
        '#whynow .col-narrow > *',
        '#whynow h2.pull-zh',
        '#whynow > .inner > .col-wide > p.body',
        '.timeline .ti',
        '.walk .left > *',
        '.walk .list .row',
        '.spec .head > *',
        '.spec .grid .cell',
        '.spec .pull-wrap > *',
        '.spec .layouts .lt',
        '.circle .col-narrow > *',
        '.circle h2.pull-zh',
        '.circle .quote-zh',
        '.circle .stat-row',
        '.circle .group-img',
        '.circle .press > *',
        '.design .col-narrow > *',
        '.design .building-shot',
        '.design .arc-essay > *',
        '.design .design-credits .dc-row',
        '.design .clubhouse-anchor > *',
        '.contact .pre > *',
        '.contact .form .field',
        '.contact .form .submit',
        '.contact .info .blk',
        '.contact .info .map',
        '.contact .footer-bar',
      ];

      revealSelectors.forEach((sel) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 1,
            ease,
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          });
        });
      });

      // ───── Image zoom-out on scroll-in ─────
      gsap.utils.toArray<HTMLElement>('.bd-img .ph-img, .group-img .ph-img, .building-shot .ph-img').forEach((img) => {
        gsap.from(img, {
          scale: 1.12,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: img, start: 'top 92%', toggleActions: 'play none none none' },
        });
      });

      // ───── Spec value emphasise ─────
      gsap.utils.toArray<HTMLElement>('.spec .grid .cell .v').forEach((v) => {
        gsap.from(v, {
          opacity: 0,
          y: 32,
          letterSpacing: '0.18em',
          duration: 1.2,
          ease,
          scrollTrigger: { trigger: v, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });

      // ───── Timeline marker pulse on enter ─────
      gsap.utils.toArray<HTMLElement>('.timeline .ti.now .marker').forEach((m) => {
        gsap.fromTo(
          m,
          { boxShadow: '0 0 0 0 rgba(139, 94, 60, 0.6)' },
          {
            boxShadow: '0 0 0 18px rgba(139, 94, 60, 0)',
            duration: 1.6,
            ease: 'power2.out',
            repeat: -1,
            repeatDelay: 0.6,
          },
        );
      });

      // ───── Building-shot quote subtle rise ─────
      gsap.from('.design .building-shot .quote-overlay .q', {
        y: 40, opacity: 0, duration: 1.4, ease,
        scrollTrigger: {
          trigger: '.design .building-shot', start: 'top 70%', toggleActions: 'play none none none',
        },
      });

      // Refresh after fonts/layout settle
      setTimeout(() => ScrollTrigger.refresh(), 250);
    }, root);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') return;
    const y = window.scrollY;
    this.scrolled = y > window.innerHeight * 0.6;

    const ids = ['hero', 'trust', 'whynow', 'spec', 'circle', 'design', 'contact'];
    let cur = 'hero';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) cur = id;
    }
    this.active = cur;
    this.cdr.markForCheck();
  }

  scrollToId(id: string, offset = 20): void {
    if (typeof window === 'undefined') return;
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
  }

  trackByIndex(index: number): number { return index; }

  splitSpecValue(v: string): string[] { return v.split(' / '); }

  submit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
  }
}
