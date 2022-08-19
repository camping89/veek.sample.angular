import { Constants } from './../../shared/helpers/constants';
import { GetFeedsInput } from '@app/models';
import { FeedService } from './../../shared/services/feed.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SourceType } from '@app/enums';
import feedDataJson from '../../shared/mocks/feed.json';
import { ToggleSidebarValue } from '@app/enums';
import { ToggleSidebarComponent } from '@app/layout';
declare var $: any;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, AfterViewInit {
  @ViewChild('toggleLeftSidebar', { static: true })
  toggleLeftSidebar!: ToggleSidebarComponent;
  @ViewChild('toggleRightSidebar', { static: true })
  toggleRightSidebar!: ToggleSidebarComponent;

  sourceType = SourceType;
  toggleSidebar = ToggleSidebarValue;
  searchTerm: string = '';
  dateNow: Date = new Date();
  hashtags: string[] = [
    'viral',
    'instagram',
    'explorepage',
    'instagood',
    'fashion',
    'follow',
    'tiktok',
  ];
  isLoaded: boolean = false;
  isMutedVideo: boolean = true;
  feedData: any = [];
  feedLimitText: number = 120;

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);

    this.getFeedList();
  }

  getFeedList() {
    const input: GetFeedsInput = {
      page: 1,
      maxResultCount: 10,
    } as GetFeedsInput;

    this.feedData = feedDataJson;
    // this.feedService.getList(input).subscribe((res: any) => {
    //   this.feedData = feedDataJson;
    // });
  }

  onFilterByHashtag(hashtag: string) {
    console.log(hashtag);
    this.searchTerm = hashtag;
  }

  togglePostContent(item: any) {
    item.isReadMore = !item.isReadMore;
  }

  updateTopContent(e: any) {
    console.log('update top content');
    this.feedData = [...feedDataJson, ...this.feedData];
    e.component.release(true);
    e.component.release(false);
  }

  updateBottomContent(e: any) {
    console.log('update bottom content');
    this.feedData = [...this.feedData, ...feedDataJson];
    e.component.release(true);
    e.component.release(false);
  }

  getGridRowEnd(grid: any, item: any) {
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
    );
    const rowSpan = Math.ceil(
      (item.querySelector('.post-content').getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  toggleSidebarEvent(eve: any, toggleSidebar: ToggleSidebarValue) {
    if (toggleSidebar === ToggleSidebarValue.Left) {
      this.toggleLeftSidebar.toggle();
    }

    if (toggleSidebar === ToggleSidebarValue.Right) {
      this.toggleRightSidebar.toggle();
    }
  }

  ngAfterViewInit(): void {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      this.toggleLeftSidebar.toggle();
      this.toggleRightSidebar.toggle();
    } else {
      const leftSidebarValue = localStorage.getItem(
        Constants.Left_Sidebar_Value
      );
      const rightSidebarValue = localStorage.getItem(
        Constants.Right_Sidebar_Value
      );

      if (leftSidebarValue == 'true') {
        this.toggleLeftSidebar.forceToggle(ToggleSidebarValue.Left);
      }

      if (rightSidebarValue == 'true') {
        this.toggleRightSidebar.forceToggle(ToggleSidebarValue.Right);
      }
    }
  }
}
