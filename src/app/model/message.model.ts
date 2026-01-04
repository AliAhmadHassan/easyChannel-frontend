import { User } from './user.model';
import { To } from "./to.model";
import { From } from "./from.model";

export class Message{
    constructor(
        public id: number,
        public to: To,
        public from: From,
        public date: Date,
        public text: string,
        public incoming: boolean,
        public user: User
    ){}
}