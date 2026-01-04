import { EASY_API } from './../easy.api';
import { From } from './../../model/from.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FromService {

  constructor(private http: HttpClient) { }

  createOrUpdate(from:From){
    
    console.log('entrou em createOrUpdate(from:From)');
    if(from.id != null && from.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/from`);
      return this.http.put(`${EASY_API}/api/from`, from);
    } else{
      from.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/from`);
      return this.http.post(`${EASY_API}/api/from`, from);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/from/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/from/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/from/${id}`)
  }


}
