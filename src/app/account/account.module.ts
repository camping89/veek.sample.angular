import { MonthlyComponent } from './pricing/monthly/monthly.component';
import { YearlyComponent } from './pricing/yearly/yearly.component';
import { AccountRoutingModule } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    AccountComponent,
    PricingComponent, 
    YearlyComponent, 
    MonthlyComponent,
    FaqComponent,
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
