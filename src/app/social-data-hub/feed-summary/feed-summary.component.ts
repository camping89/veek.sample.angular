import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feed-summary',
  templateUrl: './feed-summary.component.html',
  styleUrls: ['./feed-summary.component.scss'],
})
export class FeedSummaryComponent implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  
  hashtags = [
    {
      name: '#viral',
      mention: '1.2M',
    },
    {
      name: '#instagram',
      mention: '1.2M',
    },
    {
      name: '#explorepage',
      mention: '1.2M',
    },
    {
      name: '#viral',
      mention: '1.2M',
    },
    {
      name: '#instagram',
      mention: '1.2M',
    },
    {
      name: '#explorepage',
      mention: '1.2M',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidebar() {
    this.toggleSidebarEvent.emit(true);
  }
}
