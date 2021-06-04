import { Component, OnInit } from '@angular/core';
import { ResultCep } from '../models/resultsceps.interface';
import { ConectionsService } from '../services/conections.service';


@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.css']
})
export class SearchCepComponent implements OnInit {
  public allCeps!: ResultCep;
  public valido = false;
  public padrao = false;

  constructor(private conectionsservice: ConectionsService) { }

  validaCep(cepin: string){
    cepin = cepin.replace(/\D/g, '');
    if(cepin != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cepin)){
        this.getCep(cepin);
      }
    }
    if(cepin.length < 9 || cepin.length > 9){
      this.padrao = false;
    }else if(cepin.length == 9){
      this.padrao = true;
    }
  }
  getCep(cepin: string){

    this.conectionsservice.getCEP(cepin)
      .subscribe(post => {
        if(post){
          console.log(post);
          this.allCeps = post
          if(this.allCeps.erro == true){
            this.valido = false;
            this.padrao = false
            console.log("erro")
          }else{
            this.valido = true;
            this.padrao = true;
            console.log("found")
          }
        }

      });
  }

  sendCep(event: Event ){
    event.preventDefault()
    console.log(event);

  this.conectionsservice.saveCep(this.allCeps)
    .subscribe(resposta => {
      console.log("saved");
      this.conectionsservice.getJSON();
      this.allCeps.bairro = "";

    })
  }

  ngOnInit() {
  }

}
