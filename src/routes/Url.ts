import express,{Express,Request,Response} from 'express'
const nanoid = require('nanoid');
import Url from '../model/Url'
import { validateUrl } from '../utils/utils'
const router =express.Router()
require('dotenv').config()

router.post('/short',async(req:Request,res:Response)=>{
    const {origurl}=req.body
    const UrlId=nanoid(8)
    const base=process.env.BASE
    if(validateUrl(origurl)){
        try {
            let url=await Url.findOne({origurl})
            if(url){
                res.json(url);
            }
            else{
                const shorturl=`${base}/${UrlId}`
                url=new Url({origurl,shorturl,urliD:UrlId,date:new Date()})
                await url.save()
                res.json(url)
            }

        } catch (err) {
            console.log(err);
      res.status(500).json('Server Error');
        }
    }
    else{
        res.status(400).json('Invalid Original Url');
    }

})


export default router


