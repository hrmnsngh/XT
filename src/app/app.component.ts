import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'client';
  developerName:string = 'Harman Singh';
  yearFilter='';
  yearFilterVal= false;
  launchFilter='';
  landFilter='';

  setYearFilter(val){
    this.yearFilter = val;
  }

  setYearValFilter(val){
    this.yearFilterVal = val;
  }
  
  setLandFilter(val){
    this.landFilter = val;
  }

  setLaunchFilter(val){
    this.launchFilter = val;
  }
}
