import { From } from './from.model';
import { To } from './to.model';
export class MessageToSend{
    constructor(
        public id: number,
        public from: From,
        public to: To,
        public shippingForecast: Date,
        public sended: Boolean,
        public text: string
    ){}
}