import express,{Express,Request,Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const dotenv=require('dotenv')
dotenv.config()
import short from './routes/Url'
import inrouter from './routes/index'
import rootr from './routes/root'
//import  corsoptions  from './conifg/corsoption'
const app:Express=express()
const port=5000||process.env.port
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',rootr)
app.use('/api',short)
app.use('/',inrouter)


app.listen(port,()=>{
    console.log(`server is up running on port ${port}`)
})
//--------------------------db setup----------------------
const MongoURL="mongodb+srv://EcellNith:pokemon@ecellnithweb.vklgf.mongodb.net/test2"
mongoose.connect(MongoURL,{}).catch((err: Error) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
    process.exit();
  })
mongoose.connection.on("connected", () => {
    console.log("connected to database");
  });