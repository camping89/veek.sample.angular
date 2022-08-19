import { Component, Input, OnInit } from '@angular/core';
import { ToggleSidebarValue } from '@app/enums';
import { Constants } from '@app/helpers';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss'],
})
export class ToggleSidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  sidebarType = ToggleSidebarValue;

  @Input() toggleSidebar?: ToggleSidebarValue;
  @Input() sidebar?: any;
  @Input() container?: any;
  @Input() text?: string;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    let className = '';
    if (this.toggleSidebar === ToggleSidebarValue.Left) {
      className = 'left-collapsed';
      localStorage.setItem(
        Constants.Left_Sidebar_Value,
        Boolean(!this.isCollapsed).toString()
      );
    } else if (this.toggleSidebar === ToggleSidebarValue.Right) {
      className = 'right-collapsed';
      localStorage.setItem(
        Constants.Right_Sidebar_Value,
        Boolean(!this.isCollapsed).toString()
      );
    }

    if (className) {
      if (this.sidebar) {
        this.sidebar.classList.toggle(className);
      }
      if (this.container) {
        this.container.classList.toggle(className);
      }

      this.isCollapsed = !this.isCollapsed;
    }
  }

  forceToggle(toggleSidebarType: ToggleSidebarValue) {
    let className = '';
    if (toggleSidebarType === ToggleSidebarValue.Left) {
      className = 'left-collapsed';
    } else if (toggleSidebarType === ToggleSidebarValue.Right) {
      className = 'right-collapsed';
    }

    this.sidebar.classList.add(className);
    this.container.classList.add(className);
    this.isCollapsed = true;
  }
}
