
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-item',
  templateUrl: './appareil-item.component.html',
  styleUrls: ['./appareil-item.component.css']
})
export class AppareilItemComponent implements OnInit {
  @Input() AppareilNom !: string ;
  @Input() AppareilStatus !:string;
  @Input() index !:number;
  lastModified = new Date();
  constructor() {

  }

  ngOnInit(): void {

  }
  onSwitch() {
    {
      if (this.AppareilStatus=== 'éteind') {
        this.AppareilStatus = 'allumée'
      } else {
        this.AppareilStatus= 'éteind';
      }
    }
}
  }



