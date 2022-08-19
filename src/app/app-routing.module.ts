import { AuthComponent } from '@app/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/layout';
import { AuthGuard } from '@app/guards';
import { PageNotFoundComponent } from '@app/shared-components';

const routes: Routes = [
  { path: '', redirectTo: 'feeds', pathMatch: 'full' },
  
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'feeds',
        loadChildren: () =>
          import('./social-data-hub/social-data-hub.module').then(
            (m) => m.SocialDataHubModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'hashtags',
        loadChildren: () =>
          import('./discussion-analytics/discussion-analytics.module').then(
            (m) => m.DiscussionAnalyticsModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./account/account.module').then(
            (m) => m.AccountModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
