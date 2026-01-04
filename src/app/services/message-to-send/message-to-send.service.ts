import { EASY_API } from './../easy.api';
import { MessageToSend } from './../../model/message_to_send.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageToSendService {

  constructor(private http: HttpClient) { }

  createOrUpdate(messageToSend:MessageToSend){
    
    console.log('entrou em createOrUpdate(messageToSend:MessageToSend)');
    if(messageToSend.id != null && messageToSend.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/messageToSend`);
      return this.http.put(`${EASY_API}/api/messageToSend`, messageToSend);
    } else{
      messageToSend.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/messageToSend`);
      return this.http.post(`${EASY_API}/api/messageToSend`, messageToSend);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/messageToSend/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/messageToSend/${id}`)
  }

  findByFromId(page: number, count: number, fromId: number){
    return this.http.get(`${EASY_API}/api/messageToSend/${page}/${count}/${fromId}/fromId`)
  }

  findByToId(page: number, count: number, toId: number){
    return this.http.get(`${EASY_API}/api/messageToSend/${page}/${count}/${toId}/toId`)
  }

  findByToShippingForecast(page: number, count: number, shippingForecast: Date){
    return this.http.get(`${EASY_API}/api/messageToSend/${page}/${count}/${shippingForecast}/shippingForecast`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/messageToSend/${id}`)
  }

}
