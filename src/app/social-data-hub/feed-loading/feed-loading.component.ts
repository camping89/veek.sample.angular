import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-loading',
  templateUrl: './feed-loading.component.html',
  styleUrls: ['./feed-loading.component.scss']
})
export class FeedLoadingComponent implements OnInit {
  loadingNumber = Array(5).fill(4); // [4,4,4,4,4]
  constructor() { }

  ngOnInit(): void {
  }

}
