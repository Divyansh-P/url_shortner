import {Schema,model} from "mongoose";
import {IURLDocument } from "./urlinterface";

const URLschema:Schema<IURLDocument>= new Schema({
    urliD:{
        type:String,
        required:true
    },
    origurl:{
        type:String,
        required:true
    },
    shorturl:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now()
    }
}) 


const Url=model<IURLDocument>("url",URLschema)
export default Url