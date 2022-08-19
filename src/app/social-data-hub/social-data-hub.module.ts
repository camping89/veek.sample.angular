import {
  FeedComponent,
  FeedSummaryComponent,
  FeedSidebarComponent,
  FeedLoadingComponent,
} from '@app/social-data-hub';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialDataHubRoutingModule } from './social-data-hub-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScrollingModule,
    SocialDataHubRoutingModule,
  ],
  declarations: [
    FeedComponent,
    FeedSidebarComponent,
    FeedSummaryComponent,
    FeedLoadingComponent,
  ],
})
export class SocialDataHubModule {}
