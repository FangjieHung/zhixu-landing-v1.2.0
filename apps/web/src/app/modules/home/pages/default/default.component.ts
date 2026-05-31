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

  /**
   * Editorial chapter-based amenity story (Springs-inspired alternating layout).
   * layout: 'hero' = full-bleed; 'left' = image-left/text-right; 'right' = text-left/image-right.
   */
  readonly amenityChapters: Array<{
    no: string;
    en: string;
    zh: string;
    poetry: string;
    body: string;
    src: string;
    layout: 'hero' | 'left' | 'right';
    side?: string;
  }> = [
    {
      no: '01', en: 'THE LOBBY', zh: '迎賓大廳',
      poetry: '抵達——\n是一日生活的儀式。',
      body: '從車道到玄關，動線被細細編排。\n一條屬於生活，一條屬於招待。當門在身後闔上，城市的喧囂便留在了外面。',
      src: `${this.assetBase}/公設-內部/164.jpg`,
      layout: 'hero',
      side: 'ARRIVAL · 01',
    },
    {
      no: '02', en: 'PRIVATE DINING', zh: '私宴餐廳',
      poetry: '一張長桌的\n款待。',
      body: '把家宴從客廳挪到這裡，\n讓客廳保有屬於家的安靜時光。\n獨立廚具、酒櫃、侍者動線，皆為一場正式的款待而設。',
      src: `${this.assetBase}/公設-內部/176.jpg`,
      layout: 'left',
      side: 'HOSPITALITY · 02',
    },
    {
      no: '03', en: 'WELLNESS', zh: '健身房 · SPA',
      poetry: '身體的\n早課。',
      body: '不必出門，就能在日光裡開始一天。\n健身、瑜珈、烤箱、SPA——身體的每一處需要，\n都被理解成住家的一部分。',
      src: `${this.assetBase}/公設-內部/188.jpg`,
      layout: 'right',
      side: 'BODY · 03',
    },
    {
      no: '04', en: 'SWIMMING POOL', zh: '室內泳池',
      poetry: '在水裡，\n城市消音。',
      body: '挑高採光的室內泳池，水波折射出整面天光。\n下午三點，這裡只有水聲與呼吸。',
      src: `${this.assetBase}/公設-內部/254.jpg`,
      layout: 'hero',
      side: 'WATER · 04',
    },
    {
      no: '05', en: 'SKY GARDEN', zh: '空中花園',
      poetry: '把樓頂，\n留給黃昏。',
      body: '由景觀大師許富居操刀的四季庭園，\n2,000 坪空間裡，每一棵樹都被命名、被照顧。\n樓頂不再是設備層，而是家的延伸。',
      src: `${this.assetBase}/公設-內部/296.jpg`,
      layout: 'left',
      side: 'SKY · 05',
    },
    {
      no: '06', en: 'READING ROOM', zh: '閱讀室 · 兒童遊憩',
      poetry: '給小聲音的\n角落。',
      body: '為孩子保留一個可以放慢的房間。\n書、光線、木質地板，與一張不會被打擾的小桌。',
      src: `${this.assetBase}/公設-內部/266.jpg`,
      layout: 'right',
      side: 'QUIET · 06',
    },
  ];

  /**
   * Resident-grade equipment showcase — brand pedigree across kitchen, bath, climate, smart home.
   */
  readonly equipmentCategories: Array<{
    no: string;
    en: string;
    zh: string;
    lede: string;
    items: Array<{ brand: string; model: string; desc: string; src: string }>;
  }> = [
    {
      no: 'I',
      en: 'THE KITCHEN',
      zh: '廚具 · 德意系譜',
      lede: '一座廚房的尺度，量得出一個家對食物的敬意。',
      items: [
        {
          brand: 'Gaggenau',
          model: 'BO 470 蒸氣烤箱',
          desc: '德國頂級廚電血統，三星級廚房的標準配置。',
          src: `${this.assetBase}/公設-內部/167.jpg`,
        },
        {
          brand: 'Miele',
          model: 'KFN 嵌入式冷藏',
          desc: '百年家族企業，靜音壓縮機與恆溫保鮮系統。',
          src: `${this.assetBase}/公設-內部/173.jpg`,
        },
        {
          brand: 'BOSCH',
          model: 'Serie 8 洗碗機',
          desc: '40 dB 靜音、ZeoLite 沸石乾燥，餐後的安靜亦是奢侈。',
          src: `${this.assetBase}/公設-內部/179.jpg`,
        },
      ],
    },
    {
      no: 'II',
      en: 'THE BATHROOM',
      zh: '衛浴 · 日德並陳',
      lede: '一個人最私密的時刻，值得被最頂級的工藝對待。',
      items: [
        {
          brand: 'TOTO Neorest',
          model: 'AH 全自動智能馬桶',
          desc: 'EWATER+ 電解水自潔，溫感座圈與氣旋沖洗。',
          src: `${this.assetBase}/公設-內部/185.jpg`,
        },
        {
          brand: 'Duravit',
          model: 'Starck T 系列面盆',
          desc: 'Philippe Starck 設計，極薄陶瓷邊緣是當代衛浴的雕塑語言。',
          src: `${this.assetBase}/公設-內部/250.jpg`,
        },
        {
          brand: 'GROHE',
          model: 'Rainshower SmartActive',
          desc: '三段水流、恆溫安全鎖；德國原裝，五十年保固承諾。',
          src: `${this.assetBase}/公設-內部/256.jpg`,
        },
      ],
    },
    {
      no: 'III',
      en: 'CLIMATE',
      zh: '空調 · 全屋恆境',
      lede: '看不見的空氣，是住宅最高等級的款待。',
      items: [
        {
          brand: 'DAIKIN',
          model: 'VRV 全戶變頻',
          desc: '日本原裝多聯式空調，依空間個別控溫，零冷熱死角。',
          src: `${this.assetBase}/公設-內部/258.jpg`,
        },
        {
          brand: '全熱交換',
          model: 'ERV 24h 新風系統',
          desc: '不開窗也能換氣；PM2.5 過濾、回收冷暖能源達 75%。',
          src: `${this.assetBase}/公設-內部/262.jpg`,
        },
      ],
    },
    {
      no: 'IV',
      en: 'SMART HOME',
      zh: '智慧家居 · 安心系統',
      lede: '科技不喧嘩——它只在你需要時，靜靜地在那裡。',
      items: [
        {
          brand: 'Control4',
          model: '全戶整合中控',
          desc: '燈光、窗簾、影音、空調，一個面板掌握全家節奏。',
          src: `${this.assetBase}/公設-內部/264.jpg`,
        },
        {
          brand: 'Aiphone',
          model: '彩色影像對講',
          desc: '日本品牌，從大廳到玄關層層辨識，安全的第一道靜默。',
          src: `${this.assetBase}/公設-內部/268.jpg`,
        },
      ],
    },
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

  /**
   * Springs-style split-bay showcase (image-left / coloured-panel-right, pinned + parallax).
   */
  readonly springsBays: Array<{
    id: string;
    title: string;
    tag: string;
    src: string;
    lede: string;
    stats: string[];
    theme: 'cream' | 'forest' | 'umber';
  }> = [
    {
      id: 'bay-lobby',
      title: 'Lobby',
      tag: 'A RITUAL OF ARRIVAL',
      src: `${this.assetBase}/公設-內部/164.jpg`,
      lede:
        '迎賓大廳是日常的第一句問候。從車道到玄關，動線被細細編排——一條屬於生活，一條屬於招待。當門在身後闔上，城市的喧囂便留在了外面。',
      stats: [
        '挑高 9 米大廳',
        '雙動線分流 · 住戶 / 訪客',
        '24h 飯店式禮賓',
        '進口石材 · 義大利吊燈',
      ],
      theme: 'cream',
    },
    {
      id: 'bay-wellness',
      title: 'Wellness',
      tag: 'BODY AS A HOME',
      src: `${this.assetBase}/公設-內部/254.jpg`,
      lede:
        '不必出門，就能在日光裡開始一天。健身、瑜珈、烤箱、SPA——身體的每一處需要，都被理解成住家的一部分。挑高採光的室內泳池，水波折射出整面天光。',
      stats: [
        '25 米恆溫泳池',
        '私人健身房 · 瑜珈室',
        '蒸氣 · 烤箱 · SPA',
        '景觀露天按摩池',
      ],
      theme: 'forest',
    },
    {
      id: 'bay-equipment',
      title: 'Equipment',
      tag: 'STANDARD, UNSPOKEN',
      src: `${this.assetBase}/公設-內部/176.jpg`,
      lede:
        '德意原裝廚電、日德並陳衛浴、全屋恆境空調、智慧家居中控。四大系譜，皆為住家而設，不為展示而堆——真正的奢侈，是看不見的標準。',
      stats: [
        'Gaggenau · Miele 廚電',
        'TOTO Neorest · Duravit · GROHE',
        'DAIKIN VRV · ERV 新風系統',
        'Control4 全戶中控',
      ],
      theme: 'umber',
    },
  ];

  readonly navItems: Array<{ id: string; label: string }> = [
    { id: 'trust', label: '甲級精工' },
    { id: 'whynow', label: '水湳願景' },
    { id: 'spec', label: '精工格局' },
    { id: 'design', label: '大師巨作' },
    { id: 'contact', label: '預約鑑賞' },
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

      // ───── THE AMENITIES — chapter-based editorial story ─────
      gsap.utils.toArray<HTMLElement>('.amenities-section .am-head > *, .amenities-section .am-foot > *').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 1, ease,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
      gsap.utils.toArray<HTMLElement>('.amenities-section .am-chapter').forEach((chapter) => {
        const media = chapter.querySelector<HTMLElement>('.am-ch-media');
        const img = chapter.querySelector<HTMLImageElement>('.am-ch-media img');
        const textChildren = chapter.querySelectorAll<HTMLElement>('.am-ch-text > *');

        if (media) {
          gsap.from(media, {
            opacity: 0, y: 40, duration: 1.4, ease,
            scrollTrigger: { trigger: chapter, start: 'top 85%', toggleActions: 'play none none none' },
          });
        }
        if (img) {
          gsap.from(img, {
            scale: 1.12, duration: 1.8, ease: 'power2.out',
            scrollTrigger: { trigger: chapter, start: 'top 90%', toggleActions: 'play none none none' },
          });
          // gentle parallax during scroll
          gsap.to(img, {
            yPercent: -6, ease: 'none',
            scrollTrigger: { trigger: chapter, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        }
        if (textChildren.length) {
          gsap.from(textChildren, {
            opacity: 0, y: 24, duration: 1, stagger: 0.12, ease,
            scrollTrigger: { trigger: chapter, start: 'top 75%', toggleActions: 'play none none none' },
          });
        }
      });

      // ───── SPRINGS BAYS — pin container + vertical slide-up storytelling ─────
      // The whole .springs-bays container is pinned for 500vh of scroll.
      // Bays are absolutely positioned on top of each other; bays 2..n start
      // translated 100% below viewport, then slide up to translateY:0 during
      // their assigned scroll segment. Reveal staggers fire per-segment.
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const baysContainer = root.querySelector<HTMLElement>('.springs-bays');
      const bays = gsap.utils.toArray<HTMLElement>('.springs-bays .sb-bay');

      if (baysContainer && bays.length) {
        if (isMobile) {
          // Mobile: simple fade-in per bay, no pin/scrub.
          bays.forEach((bay) => {
            const panel = bay.querySelector<HTMLElement>('.sb-panel');
            const stats = bay.querySelectorAll<HTMLElement>('.sb-stats li');
            if (panel) gsap.from(panel, {
              opacity: 0, y: 24, duration: 1, ease,
              scrollTrigger: { trigger: bay, start: 'top 80%', toggleActions: 'play none none none' },
            });
            if (stats.length) gsap.from(stats, {
              opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease,
              scrollTrigger: { trigger: bay, start: 'top 75%', toggleActions: 'play none none none' },
            });
          });
        } else {
          // ── Initial state: bays 2..n parked below viewport ──
          bays.forEach((bay, i) => {
            if (i > 0) gsap.set(bay, { yPercent: 100 });
          });

          // ── Each bay's intro elements (title / lede / stats) start hidden ──
          bays.forEach((bay) => {
            const title = bay.querySelector<HTMLElement>('.sb-title');
            const lede = bay.querySelector<HTMLElement>('.sb-lede');
            const stats = bay.querySelectorAll<HTMLElement>('.sb-stats li');
            if (title) gsap.set(title, { y: 40, opacity: 0 });
            if (lede) gsap.set(lede, { opacity: 0, y: 24 });
            if (stats.length) gsap.set(stats, { opacity: 0, y: 28 });
          });

          // ── Master pinned timeline ──
          // Choreography per "slot" of 1 × viewport scroll:
          //   slot 0 (dwell)        : bay 1 reveal (title/lede/stats)
          //   slot 1 (transition)   : bay 2 slides up over bay 1
          //   slot 2 (dwell)        : bay 2 reveal
          //   slot 3 (transition)   : bay 3 slides up over bay 2
          //   slot 4 (dwell)        : bay 3 reveal
          const slots = Math.max(3, bays.length * 2 - 1); // 5 for 3 bays
          const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
              trigger: baysContainer,
              start: 'top top',
              end: () => `+=${window.innerHeight * slots}`,
              pin: true,
              pinSpacing: true,
              scrub: 0.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          bays.forEach((bay, i) => {
            const title = bay.querySelector<HTMLElement>('.sb-title');
            const lede = bay.querySelector<HTMLElement>('.sb-lede');
            const stats = bay.querySelectorAll<HTMLElement>('.sb-stats li');

            // For bay i:
            //   reveal slot = 2 * i
            //   slide-in slot (for bay i > 0) = 2 * i - 1
            const revealStart = 2 * i;

            if (i > 0) {
              const slideStart = 2 * i - 1;
              tl.to(bay, { yPercent: 0, duration: 1, ease: 'power3.out' }, slideStart);
            }

            // Reveal sequence within the dwell slot
            if (title) tl.to(title, { y: 0, opacity: 1, duration: 0.6 }, revealStart);
            if (lede) tl.to(lede, { opacity: 1, y: 0, duration: 0.5 }, revealStart + 0.15);
            if (stats.length) tl.to(stats, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, revealStart + 0.3);

            // Small "stay" tween so the slot consumes ~1 unit of scroll
            tl.to({}, { duration: 0.5 }, revealStart + 0.5);
          });
        }
      }

      // ───── THE EQUIPMENT — category reveals + card stagger ─────
      gsap.utils.toArray<HTMLElement>('.equipment-section .eq-head > *, .equipment-section .eq-foot > *').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 1, ease,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
      gsap.utils.toArray<HTMLElement>('.equipment-section .eq-cat').forEach((cat) => {
        const head = cat.querySelectorAll<HTMLElement>('.eq-cat-head > *');
        const cards = cat.querySelectorAll<HTMLElement>('.eq-card');
        if (head.length) {
          gsap.from(head, {
            opacity: 0, y: 24, duration: 0.9, stagger: 0.12, ease,
            scrollTrigger: { trigger: cat, start: 'top 82%', toggleActions: 'play none none none' },
          });
        }
        if (cards.length) {
          gsap.from(cards, {
            opacity: 0, y: 36, duration: 1.1, stagger: 0.12, ease,
            scrollTrigger: { trigger: cat, start: 'top 78%', toggleActions: 'play none none none' },
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
