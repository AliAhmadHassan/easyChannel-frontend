import { EASY_API } from './../easy.api';
import { User } from './../../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post(`${EASY_API}/api/auth`, user);
  }

  createOrUpdate(user:User){
    
    console.log('entrou em createOrUpdate(user:User)');
    if(user.id != null && user.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/user`);
      return this.http.put(`${EASY_API}/api/user`, user);
    } else{
      user.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/user`);
      return this.http.post(`${EASY_API}/api/user`, user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/user/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/user/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/user/${id}`)
  }

}
