import { EASY_API } from './../easy.api';
import { Group } from './../../model/group.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {
  
  constructor(private http: HttpClient) { }

  createOrUpdate(group:Group){
    
    console.log('entrou em createOrUpdate(group:Group)');
    if(group.id != null && group.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/group`);
      return this.http.put(`${EASY_API}/api/group`, group);
    } else{
      group.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/group`);
      return this.http.post(`${EASY_API}/api/group`, group);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/group/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/group/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/group/${id}`)
  }

}
