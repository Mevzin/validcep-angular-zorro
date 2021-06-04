import { Component, OnInit } from '@angular/core';
import { ResultCep } from '../models/resultsceps.interface';
import { ConectionsService } from '../services/conections.service';

@Component({
  selector: 'app-card-ceps',
  templateUrl: './card-ceps.component.html',
  styleUrls: ['./card-ceps.component.css']
})
export class CardCepsComponent implements OnInit {

  public allCeps: ResultCep[];

  constructor(private conectionsService: ConectionsService) {
    this.allCeps = [];
  }

  public getAllCeps(){
    this.conectionsService.getJSON()
      .subscribe(post => {
        this.allCeps = post;
      })
  }

  ngOnInit() {
    this.getAllCeps();
  }

}
