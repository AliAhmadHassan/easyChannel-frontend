import { EASY_API } from './../easy.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Indice } from '../../model/indice.model';

@Injectable()
export class IndiceService {

  constructor(private http: HttpClient) { }

  createOrUpdate(indice:Indice){
    
    console.log('entrou em createOrUpdate(indice:Indice)');
    if(indice.id != null && indice.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/indice`);
      return this.http.put(`${EASY_API}/api/indice`, indice);
    } else{
      indice.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/indice`);
      return this.http.post(`${EASY_API}/api/indice`, indice);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/indice/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/indice/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/indice/${id}`)
  }

}
