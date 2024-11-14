import express from 'express'

import {config} from 'dotenv'

import route from './routes/indexroute.js';

// import { connectToDatabaseEx } from './database/indexdb.js';
import cors from 'cors'


import { connectToDatabaseSem } from './database/semister.js';


config();

const app = express();

app.use(express.json());

app.use(cors());


app.use('/',route);

const port = process.env.PORT;


// connectToDatabaseEx().then(()=>{
//     app.listen(port,(err)=>{
//         if(err) console.log("Getting Error While Connecting Server!");
//         else{
//             console.log("Server Is Successfully Running !");
//         }
//     })
// }).catch((error)=>{
//     console.log("Getting Error while Connecting to Database in the catch block!");
//     throw error;
// })


connectToDatabaseSem().then(()=>{
    app.listen(5001,(err)=>{
        if(err) console.log("Getting Error While Connecting Server!");
        else{
            console.log("Server Is Successfully Running !");
        }
    })
}).catch((error)=>{
    console.log("Getting Error while Connecting to Database in the catch block!");
    throw error;
})


