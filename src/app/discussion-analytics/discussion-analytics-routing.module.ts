
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtagComponent } from '.';

const routes: Routes = [{ path: '', component: HashtagComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionAnalyticsRoutingModule { }
