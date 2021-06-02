import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionsService {

  private baseURL = "http://viacep.com.br/ws";
  private jsonUrl = "http://localhost:3000/ceps";


  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    console.log("Lista carregada")
    return this.http.get("http://localhost:3000/ceps")
  }

  public getCEP(cepin: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${cepin}/json/`);
  }

  public saveCep(allCeps: any){
    return this.http.post(`${this.jsonUrl}`, allCeps);
  }

  public deleteCep(id: string){
    return this.http.delete(`${this.jsonUrl}/${id}`)
  }
}


