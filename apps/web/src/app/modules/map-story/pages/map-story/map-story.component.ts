import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

// import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin
)

@Component({
  selector: 'app-map-story',
  templateUrl: './map-story.component.html',
  styleUrls: ['./map-story.component.scss']
})
export class MapStoryComponent implements AfterViewInit {

  @ViewChild('glowPath')
  glowPath!: ElementRef<SVGPathElement>

  @ViewChild('movingDot')
  movingDot!: ElementRef<SVGCircleElement>

  @ViewChild('mapContainer')
  mapContainer!: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {

    this.initSmoothScroll()

    this.initPathAnimation()

    this.initCameraMovement()
  }

  private initSmoothScroll(): void {
    // Lenis smooth scroll disabled - library not installed
    // const lenis = new Lenis({
    //   smoothWheel: true,
    //   duration: 1.2
    // })
    //
    // function raf(time: number) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    //
    // requestAnimationFrame(raf)
  }

  private initPathAnimation(): void {

    const path = this.glowPath.nativeElement

    const dot = this.movingDot.nativeElement

    const length = path.getTotalLength()

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.map-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.map-container'
      }
    })

    tl.to(path, {
      strokeDashoffset: 0,
      ease: 'none'
    }, 0)

    tl.to(dot, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5]
      },
      ease: 'none'
    }, 0)
  }

  private initCameraMovement(): void {

    gsap.to('.map-svg', {

      scale: 1.25,
      x: -180,
      y: -120,

      ease: 'none',

      scrollTrigger: {
        trigger: '.map-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })
  }
}