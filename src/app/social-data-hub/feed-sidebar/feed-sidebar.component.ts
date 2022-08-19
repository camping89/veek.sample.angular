import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feed-sidebar',
  templateUrl: './feed-sidebar.component.html',
  styleUrls: ['./feed-sidebar.component.scss']
})
export class FeedSidebarComponent implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidebar() {
    this.toggleSidebarEvent.emit(true);
  }
}
