import { EASY_API } from './../easy.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToType } from '../../model/to_type.model';

@Injectable()
export class ToTypeService {

  constructor(private http: HttpClient) { }

  createOrUpdate(toType:ToType){
    
    console.log('entrou em createOrUpdate(toType:ToType)');
    if(toType.id != null && toType.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/toType`);
      return this.http.put(`${EASY_API}/api/toType`, toType);
    } else{
      toType.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/toType`);
      return this.http.post(`${EASY_API}/api/toType`, toType);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/toType/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/toType/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/toType/${id}`)
  }

}
