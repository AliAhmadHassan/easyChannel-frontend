import { From } from './from.model';
import { To } from './to.model';
import { User } from './user.model';
export class MessageReceived{
    constructor(
        public id: number,
        public to: To,
        public from: From,
        public receivedDate: Date,
        public readed: boolean,
        public readedDate: Date,
        public user: User
    ){}
}