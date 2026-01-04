import { EASY_API } from './../easy.api';
import { RelUserIndice } from './../../model/rel_user_indice.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RelUserIndiceService {

  constructor(private http: HttpClient) { }

  createOrUpdate(relUserIndice:RelUserIndice){
    
    console.log('entrou em createOrUpdate(relUserIndice:RelUserIndice)');
    if(relUserIndice.id != null && relUserIndice.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/relUserIndice`);
      return this.http.put(`${EASY_API}/api/relUserIndice`, relUserIndice);
    } else{
      relUserIndice.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/relUserIndice`);
      return this.http.post(`${EASY_API}/api/relUserIndice`, relUserIndice);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/relUserIndice/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/relUserIndice/${id}`)
  }

  findByUserId(page: number, count: number, userId: number){
    return this.http.get(`${EASY_API}/api/relUserIndice/${page}/${count}/${userId}/userId`)
  }

  findByIndiceId(page: number, count: number, indiceId: number){
    return this.http.get(`${EASY_API}/api/relUserIndice/${page}/${count}/${indiceId}/indiceId`)
  }
  
  delete(id: number){
    return this.http.delete(`${EASY_API}/api/relUserIndice/${id}`)
  }

}
