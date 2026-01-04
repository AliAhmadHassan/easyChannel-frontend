import { Situation } from './../../model/situation.model';
import { HttpClient } from '@angular/common/http';
import { EASY_API } from './../easy.api';
import { Injectable } from '@angular/core';

@Injectable()
export class SituationService {

  constructor(private http: HttpClient) { }

  createOrUpdate(situation:Situation){
    
    console.log('entrou em createOrUpdate(situation:Situation)');
    if(situation.id != null && situation.id != 0){
      console.log(`Chamando put: ${EASY_API}/api/situation`);
      return this.http.put(`${EASY_API}/api/situation`, situation);
    } else{
      situation.id = 0;
      console.log(`Chamando post: ${EASY_API}/api/situation`);
      return this.http.post(`${EASY_API}/api/situation`, situation);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${EASY_API}/api/situation/${page}/${count}`)
  }

  findById(id: number){
    return this.http.get(`${EASY_API}/api/situation/${id}`)
  }

  delete(id: number){
    return this.http.delete(`${EASY_API}/api/situation/${id}`)
  }
}
