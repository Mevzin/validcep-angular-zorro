import { Component, OnInit } from '@angular/core';
import { ResultCep } from '../models/resultsceps.interface';
import { ConectionsService } from '../services/conections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed = false;

  constructor(private conectionsservice: ConectionsService) { }



  ngOnInit() {
  }

}
