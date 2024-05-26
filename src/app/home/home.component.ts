import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: string[] = [
                      "../../assets/img/slide7.jpg",
                      "../../assets/img/slide8.jpg",
                      "../../assets/img/slide9.jpg",
                      "../../assets/img/slide10.jpg",
                      "../../assets/img/slide11.jpg",
                      "../../assets/img/slide12.jpg",
                      "../../assets/img/slide13.jpg",
                    ];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
