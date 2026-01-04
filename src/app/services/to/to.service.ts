import { To } from './../../model/to.model';
import { EASY_API } from './../easy.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ToService {

  constructor(private http: HttpClient) { }

  createOrUpdate(to:To){
    
    console.log('entrou em createOrUpdate(to:To)');
    if(to.id != null && to.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/to`);
      return this.http.put(`${EASY_API}/api/to`, to);
    } else{
      to.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/to`);
      return this.http.post(`${EASY_API}/api/to`, to);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/to/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/to/${id}`)
  }

  findByUserPreferredId(page: number, count: number, userId: number){
    return this.http.get(`${EASY_API}/api/to/${page}/${count}/${userId}/userId`)
  }

  findByToTypeId(page: number, count: number, toTypeId: number){
    return this.http.get(`${EASY_API}/api/to/${page}/${count}/${toTypeId}/toTypeId`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/to/${id}`)
  }

}
