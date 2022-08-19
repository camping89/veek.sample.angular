import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionAnalyticsRoutingModule } from './discussion-analytics-routing.module';
import { HashtagComponent } from './hashtag/hashtag.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HashtagComponent],
  imports: [CommonModule, SharedModule, DiscussionAnalyticsRoutingModule],
})
export class DiscussionAnalyticsModule {}
