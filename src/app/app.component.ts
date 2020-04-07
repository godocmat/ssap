import { Component, OnInit, HostListener, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'ssap';
  black = false;

  myImages: any = [
    {
      preview: '../assets/ke1p.jpg',
      full: '../assets/ke1.jpg',
      width: 4608,
      height: 3456,
      description: 'Košice',
    },
    {
      preview: '../assets/ke2p.jpg',
      full: '../assets/ke2.jpg',
      width: 4450,
      height: 2966,

      description: 'Košice',
    },
    {
      preview: '../assets/nr2p.jpg',
      full: '../assets/nr2.jpg',
      width: 640,
      height: 640,

      description: 'Nitra',
    },
    {
      preview: '../assets/nr4p.jpg',
      full: '../assets/nr4.jpg',
      width: 1000,
      height: 664,
      description: 'Nitra',
    },
    {
      preview: '../assets/po1p.jpg',
      full: '../assets/po1.jpg',
      width: 6000,
      height: 4000,
      description: 'Prešov',
    },
    {
      preview: '../assets/tt1p.jpg',
      full: '../assets/tt1.jpg',

      width: 960,
      height: 465,
      description: 'Trnava',
    },
    {
      preview: '../assets/tt3p.jpg',
      full: '../assets/tt3.jpg',
      width: 959,
      height: 640,

      description: 'Trnava',
    },
    {
      preview: '../assets/ke3p.jpg',
      full: '../assets/ke3.jpg',

      width: 1079,
      height: 1079,
      description: 'Košice',
    },
    {
      preview: '../assets/ke4p.jpg',
      full: '../assets/ke4.jpg',
      width: 720,
      height: 960,

      description: 'Košice',
    },
    {
      preview: '../assets/ke5p.jpg',
      full: '../assets/ke5.jpg',

      width: 960,
      height: 720,
      description: 'Košice',
    },
    {
      preview: '../assets/ke6p.jpg',
      full: '../assets/ke6.jpg',
      width: 4608,
      height: 3456,

      description: 'Košice',
    },
    {
      preview: '../assets/nr1p.jpg',
      full: '../assets/nr1.jpg',
      width: 640,
      height: 640,

      description: 'Nitra',
    },
    {
      preview: '../assets/nr3p.jpg',
      full: '../assets/nr3.jpg',
      width: 640,
      height: 640,

      description: 'Nitra',
    },
    {
      preview: '../assets/tt2p.jpg',
      full: '../assets/tt2.jpg',

      width: 960,
      height: 635,
      description: 'Trnava',
    },
    {
      preview: '../assets/tt4p.jpg',
      full: '../assets/tt4.jpg',

      width: 960,
      height: 546,
      description: 'Trnava',
    },
    {
      preview: '../assets/po2p.jpg',
      full: '../assets/po2.jpg',

      width: 6000,
      height: 4000,
      description: 'Prešov',
    },
    {
      preview: '../assets/po3p.jpg',
      full: '../assets/po3.jpg',
      width: 6000,
      height: 4000,

      description: 'Prešov',
    },
    {
      preview: '../assets/po4p.jpg',
      full: '../assets/po4.jpg',
      width: 3456,
      height: 5184,

      description: 'Prešov',
    },
    {
      preview: '../assets/po5p.jpg',
      full: '../assets/po5.jpg',
      width: 960,
      height: 1280,

      description: 'Prešov',
    },


  ];

  myConfig = {
    masonry: true,
    masonryMaxHeight: 200,
    masonryGutter: 6,
    loop: false,
    backgroundOpacity: 0.85,
    animationDuration: 100,
    counter: true,
    lightboxMaxHeight: '100vh - 86px',
    lightboxMaxWidth: '100%'

  };


  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    const header = this.el.nativeElement.querySelector('nav');
    const headerResponsive = this.el.nativeElement.querySelector('.responsive-bar');
    window.scrollY > 10 ? header.classList.add('black') : header.classList.remove('black');
    window.scrollY > 10 ? headerResponsive.classList.add('black') : headerResponsive.classList.remove('black');
  }


  @HostListener('window:scroll', ['$event'])
  onResize(event) {
    window.scrollY > 10 ? this.black = true : this.black = false;
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
