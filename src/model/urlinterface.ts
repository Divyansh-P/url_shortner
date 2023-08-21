import {Document,Model} from 'mongoose'
export interface IURL{
    urliD:string,
    origurl:string,
    shorturl:string,
    clicks:number,
    date:Date
}
export interface IURLDocument extends IURL,Document{}
/* export interface IURLModel extends Model<IURLDocument>{
buildUrl(args:IURL):IURLDocument;
} */