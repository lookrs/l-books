import { Component } from '@angular/core';

@Component({
  selector: 'app-app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrl: './app-carousel.component.css',
})
export class AppCarouselComponent {
  slides = [
    { image: 'https://via.placeholder.com/130', caption: 'Slide 1' },
    { image: 'https://via.placeholder.com/150', caption: 'Slide 2' },
    { image: 'https://via.placeholder.com/140', caption: 'Slide 3' },
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
