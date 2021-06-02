import { Component, OnInit } from '@angular/core';
import { ConectionsService } from '../services/conections.service';
import { Searches } from 'src/app/models';
interface ResultCep {
  id: string,
  cep: string,
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string,
  erro: Boolean
};

@Component({
  selector: 'app-table-valid',
  templateUrl: './table-valid.component.html',
  styleUrls: ['./table-valid.component.css']
})
export class TableValidComponent implements OnInit {

  public searchToDelete!: Searches;

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

    public removeCep(id :string){
      console.log(id);
      this.conectionsService.deleteCep(id)
      .subscribe(post => {})

    }

  ngOnInit(): void{
    this.getAllCeps();
  }




}
