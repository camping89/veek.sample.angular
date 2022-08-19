import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings, Settings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Veek.DataHub.Social';

  public settings: Settings;
  constructor(public appSettings:AppSettings, 
              public router:Router){
    this.settings = this.appSettings.settings;
  }

  ngAfterViewInit(){ 
  
  }
}
