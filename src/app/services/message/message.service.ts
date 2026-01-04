import { HttpClient } from '@angular/common/http';
import { Message } from './../../model/message.model';
import { EASY_API } from './../easy.api';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  createOrUpdate(message:Message){
    
    console.log('entrou em createOrUpdate(message:Message)');
    if(message.id != null && message.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/message`);
      return this.http.put(`${EASY_API}/api/message`, message);
    } else{
      message.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/message`);
      return this.http.post(`${EASY_API}/api/message`, message);
    }
  }

  findByToId(page: number, count: number, toId: number){
    return this.http.get(`${EASY_API}/api/message/${page}/${count}/${toId}/toId`)
  }

  findByFromId(page: number, count: number, fromId: number){
    return this.http.get(`${EASY_API}/api/message/${page}/${count}/${fromId}/fromId`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/message/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/message/${id}`)
  }
}
