import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { SpacexService } from '../services/spacex.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnChanges {

  limit: number = 100;
  @Input() yearFilter;
  @Input() landFilter;  
  @Input() launchFilter;  
  @Input() yearFilterVal:boolean;
  spaceXData:any[];
  constructor(private spaceX: SpacexService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.getSpaceXFilterData();
  }

/*   getSpaceXData() {
    this.spaceX.getAllSpaceXDataInitial(this.limit).subscribe(
      (response)=>{
        this.spaceXData = response;
      },
      (error)=>{
        console.log('data fetch failure : ', JSON.stringify(error));
      }
    );
  }
 */
  getSpaceXFilterData() {
    if(!this.yearFilterVal){
      this.yearFilter = '';
    }
    this.spaceX.getAllSpaceXData(this.limit, this.launchFilter,this.landFilter, this.yearFilter).subscribe(
      (response)=>{
        this.spaceXData = response;
      },
      (error)=>{
        console.log('data fetch failure : ', JSON.stringify(error));
      }
    );
  }
}
