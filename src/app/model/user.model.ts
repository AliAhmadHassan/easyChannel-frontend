import { Group } from './group.model';
export class User{
    constructor(
        public id: number,
        public username: string,
        public name: string,
        public password: string,
        public profile: string,
        public group: Group
    ){}
}