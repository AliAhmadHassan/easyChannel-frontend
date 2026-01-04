import { Situation } from './situation.model';
import { ToType } from './to_type.model';
import { User } from './user.model';

export class To{
    constructor(
        public id: number,
        public toKey: string,
        public userPreferred: User,
        public name: string,
        public identity: string,
        public contractNumber: string,
        public toType: ToType,
        public situation: Situation
    ){}
}