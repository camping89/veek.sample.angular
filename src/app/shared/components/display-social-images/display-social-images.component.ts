import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-social-images',
  templateUrl: './display-social-images.component.html',
  styleUrls: ['./display-social-images.component.scss'],
})
export class DisplaySocialImagesComponent implements OnInit {
  popupVisible: boolean = false;
  selectedIndex: number = -1;
  urls: string[] = [
    'https://www.w3schools.com/w3images/falls2.jpg',
    'https://www.w3schools.com/w3images/underwater.jpg',
    'https://www.w3schools.com/w3images/ocean.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  onViewImage(index: number) {
    this.selectedIndex = index;
    this.popupVisible = true;
  }

  onHiddenPopup() {
    this.selectedIndex = -1;
    this.popupVisible = false;
  }
}
