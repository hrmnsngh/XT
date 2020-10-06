import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  yearsSet = [false, false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  landInitial:string = '';
  launchInitial:string = '';
  successfulLand:string = '';
  successfulLaunch:string = '';

  trueFalse = ['True', 'False'];
  @Output() public year = new EventEmitter<any>();
  @Output() public successfulLandVal = new EventEmitter<any>();  
  @Output() public successfulLaunchVal = new EventEmitter<any>();
  @Output() public yearVal = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }

  setVal(val, type){
    if(type==='year'){
      this.yearsSet[val] = ! this.yearsSet[val];
      this.year.emit(this.years[val]);
      this.yearVal.emit(this.yearsSet[val]);
      for(let i=0; i<this.yearsSet.length; i++){
        console.log('inside loop');
        if(i != val){
          console.log(this.yearsSet);
          this.yearsSet[i]= false;
        }
      }
      console.log(this.yearsSet);

    }
    if(type==='land'){      
      this.successfulLand = val === 'True'? 'true': (val == 'False')? 'false': '';
      if(this.landInitial == this.successfulLand){
        this.successfulLand = '';
      }  
      this.landInitial = this.successfulLand;
      this.successfulLandVal.emit(this.successfulLand);
    }
    if(type==='launch'){      
      this.successfulLaunch = val === 'True'? 'true': (val == 'False')? 'false': '';
      if(this.launchInitial == this.successfulLaunch){
        this.successfulLaunch = '';
      }  
      this.launchInitial = this.successfulLaunch;
      this.successfulLaunchVal.emit(this.successfulLaunch);
    }
  }

}
