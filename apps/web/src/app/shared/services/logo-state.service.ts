// logo-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import type { SwiperOptions } from 'swiper';

export interface PartnerLogo {
  src: string;
  alt: string;
}

@Injectable({
  providedIn: 'root',
})
export class LogoStateService {
  private isLargeLogoSubject = new BehaviorSubject<boolean>(false);
  isLargeLogo$: Observable<boolean> = this.isLargeLogoSubject.asObservable();

  setLogoScale(isLarge: boolean): void {
    // 新增setTimeout防止 錯誤：ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.isLargeLogoSubject.next(isLarge);
    });
  }

  // Partner logos centralized here so multiple components can reuse the same data
  partnerLogos: PartnerLogo[] = [
    { src: 'assets/image/partner/春生LOGO-03.png', alt: '春生' },
    { src: 'assets/image/partner/alic-logo.png', alt: 'alic' },
    { src: 'assets/image/partner/city-parking.png', alt: 'city-parking' },
    { src: 'assets/image/partner/環景logo.png', alt: '環景' },
  ];

  // Default Swiper options for partner carousels
  partnersSwiperConfig: SwiperOptions = {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    spaceBetween: 24,
    breakpoints: {
      320: { slidesPerView: 1.5 },
      640: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
    },
  };
}