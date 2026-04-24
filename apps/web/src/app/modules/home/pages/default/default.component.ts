/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forkJoin } from 'rxjs';
import { LogoStateService } from '../../../../shared/services/logo-state.service';

// Third party packages
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import type { SwiperOptions } from 'swiper';
SwiperCore.use([Autoplay, Navigation]);

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import {
  AppNewsMsgView, BannerAdView
} from '@core/models';
import { AppMsgApiServ } from '@core/services';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements OnInit {
  private _appMsgApiServ = inject(AppMsgApiServ);
  ads: BannerAdView[] = [];
  newsMsgs: AppNewsMsgView[] = [];

  products = [
    {
      name: '尊享滋養體驗包',
      subtitle: '單包',
      desc: '為講究即時滋補者而設，一包即飲，呈現黑金萃取最純粹的濃郁與溫潤口感。',
      image: 'assets/image/product/product-01.jpg',
      price: 180,
    },
    {
      name: '心意入門禮盒',
      subtitle: '8 入',
      desc: '獻給重要之人的貼心心意，份量精緻不張揚，是初次送禮或日常關懷的理想選擇。',
      image: 'assets/image/product/product-01.jpg',
      price: 1440,
      memberPrice: 1150,
    },
    {
      name: '日常尊養禮盒',
      subtitle: '12 入',
      desc: '專為細水長流的滋養所設，體面份量，適合送給長輩或重視日常調養的對象。',
      image: 'assets/image/product/product-01.jpg',
      price: 2160,
      memberPrice: 1510,
    },
    {
      name: '深度滋補雅藏禮盒',
      subtitle: '30 入',
      desc: '為重視長期調養者準備的誠意之選，適合重要節慶、家族贈禮或企業團贈。',
      image: 'assets/image/product/product-01.jpg',
      price: 5400,
      memberPrice: 4580,
    },
    {
      name: '極致尊榮典藏禮盒',
      subtitle: '60 入',
      desc: '品牌最高規格禮盒，象徵最深厚的心意與關懷，適合頂級送禮、企業貴賓與長期滋養。',
      image: 'assets/image/product/product-08.jpg',
      price: 10800,
      memberPrice: 8888,
    },
  ];
  formatPrice = (v: number) => new Intl.NumberFormat('en-US').format(v);

  constructor(
    public logoStateService: LogoStateService,
    protected override injector: Injector) {
    super(injector);
    if (this.isBrowser)
      gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.getCaches();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  getCaches(): void {
    this.spinnerServ.show();
    forkJoin([
      this._appMsgApiServ.getAppNewsMsgViews(),
      this._appMsgApiServ.getBannerAdViews()
    ]).subscribe(([news, ads]) => {
      this.newsMsgs = news;
      this.ads = ads;
    }).add(() => this.spinnerServ.hide());
  }
}
