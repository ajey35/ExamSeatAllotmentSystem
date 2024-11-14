
import pg from 'pg';

import {config} from 'dotenv'

config();

const {Pool } = pg;

export const poolEx = new Pool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})


export const connectToDatabaseEx = async () =>{
    try {
        await poolEx.connect();
        console.log("Database exam schdule Connected Successfully!");
        
    } catch (error) {
        console.log("Getting Error While Connecting to DataBase exam schedule!");
        throw error;
    }
}