import express from 'express'

import {config} from 'dotenv'

import route from './routes/indexroute.js';

import { connectToDatabase } from './database/indexdb.js';


config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/room',route);

const port = process.env.PORT;

connectToDatabase().then(()=>{
    app.listen(port,(err)=>{
        if(err) console.log("Getting Error While Connecting Server!");
        else{
            console.log("Server Is Successfully Running !");
        }
    })
}).catch((error)=>{
    console.log("Getting Error while Connecting to Database in the catch block!");
    throw error;
})


