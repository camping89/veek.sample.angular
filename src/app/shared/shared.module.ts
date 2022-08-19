import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HeaderComponent,
  LayoutComponent,
  FooterComponent,
  SidebarComponent,
  ToggleSidebarComponent,
} from '@app/layout';
import {
  DxGalleryModule,
  DxPopupModule,
  DxScrollViewModule,
  DxTextBoxModule,
  DxListModule,
  DxValidationGroupModule,
  DxValidatorModule,
  DxButtonModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import {
  DisplaySocialImagesComponent,
  AddressFormComponent,
  GetInTouchComponent,
} from '@app/shared-components';
import { TimeAgoPipe, SafePipe } from '@app/shared-pipes';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesGridPipe } from './pipes/images-grid.pipe';
import {
  VideoAttributesDirective,
  SocialIconDirective,
} from '@app/shared-directives';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from './components/test-angular-material/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './components/test-angular-material/table/table.component';
import { DashboardComponent } from './components/test-angular-material/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './components/test-angular-material/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './components/test-angular-material/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

var Components = [
  HeaderComponent,
  LayoutComponent,
  FooterComponent,
  SidebarComponent,
  DisplaySocialImagesComponent,
  PageNotFoundComponent,
  ToggleSidebarComponent,
  AddressFormComponent,
  NavigationComponent,
  TableComponent,
  DashboardComponent,
  TreeComponent,
  DragDropComponent,
  GetInTouchComponent,
];

var OtherModules = [];
var Pipes = [TimeAgoPipe, SafePipe, ImagesGridPipe];
var Directives = [VideoAttributesDirective];

var DevextremeModules = [
  DxScrollViewModule,
  DxPopupModule,
  DxGalleryModule,
  DxTextBoxModule,
  DxListModule,
  DxValidationGroupModule,
  DxValidatorModule,
  DxButtonModule,
  DxCheckBoxModule,
];

var MaterialModules = [
  MatSliderModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  ReactiveFormsModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTreeModule,
  DragDropModule,
  MatChipsModule,
  MatCardModule,
  MatSnackBarModule,
  MatTabsModule,
  MatExpansionModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ...DevextremeModules,
    ...MaterialModules,
  ],
  declarations: [...Components, ...Pipes, ...Directives],
  exports: [
    FormsModule,
    FlexLayoutModule,
    ...Components,
    ...DevextremeModules,
    ...MaterialModules,
    ...Pipes,
    ...Directives,
  ],
})
export class SharedModule {}
