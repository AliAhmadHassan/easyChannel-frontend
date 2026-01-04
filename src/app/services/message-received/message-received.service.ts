import { EASY_API } from './../easy.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageReceived } from '../../model/message_received.model';

@Injectable()
export class MessageReceivedService {

  constructor(private http: HttpClient) { }

  createOrUpdate(messageReceived:MessageReceived){
    
    console.log('entrou em createOrUpdate(messageReceived:MessageReceived)');
    if(messageReceived.id != null && messageReceived.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/messageReceived`);
      return this.http.put(`${EASY_API}/api/messageReceived`, messageReceived);
    } else{
      messageReceived.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/messageReceived`);
      return this.http.post(`${EASY_API}/api/messageReceived`, messageReceived);
    }
  }

  updateToReaded(id: number){
    return this.http.put(`${EASY_API}/api/messageReceived/${id}/setReaded`, "");
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/messageReceived/${page}/${count}`);
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/messageReceived/${id}`);
  }

  findByUnreaded(page: number, count: number){
    return this.http.get(`${EASY_API}/api/messageReceived/${page}/${count}/unreaded`);
  }

  findByFromId(page: number, count: number, fromId: number){
    return this.http.get(`${EASY_API}/api/messageReceived/${page}/${count}/${fromId}/fromId`);
  }

  findByToId(page: number, count: number, toId: number){
    return this.http.get(`${EASY_API}/api/messageReceived/${page}/${count}/${toId}/toId`);
  }

  findByUserId(page: number, count: number, userId: number){
    return this.http.get(`${EASY_API}/api/messageReceived/${page}/${count}/${userId}/userId`);
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/messageReceived/${id}`);
  }

}
