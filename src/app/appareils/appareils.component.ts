import { Component, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.css']
})
export class AppareilsComponent implements OnInit {

  appareil =[
    new Appareil('Machine à laver', 'éteint'),
    new Appareil('TV', 'allumé'),
    new Appareil('Ordinateur', 'allumé'),
    new Appareil('Micro Onde', 'éteint'),
    new Appareil('Four', 'allumé'),
    new Appareil('XBOX', 'éteint'),
    new Appareil('Hot', 'allumé'),
  ];






  ngOnInit(): void {

  }
  onAllumerTout() {
    this.appareil.forEach(app => {
      app.status = 'allumée';
    });
  }
  onFermerTout(){
  this.appareil.forEach(app => {
    app.status = 'éteind';
  });}



}
