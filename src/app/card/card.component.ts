import { Component, Input, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  launch_Year;
 @Input() eachLaunch;
  
  constructor(private spaceX: SpacexService) { }

  ngOnInit() {
  }
  


}
