import { Indice } from './indice.model';
import { User } from './user.model';

export class RelUserIndice{
    constructor(
        public id: number,
        public date: Date,
        public user: User,
        public indice: Indice,
        public value: number
    ){}
}