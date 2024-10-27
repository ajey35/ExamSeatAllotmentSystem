
import {Pool} from 'pg';

import {config} from 'dotenv'

config();

export const pool = new Pool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})


export const connectToDatabase = async () =>{
    try {
        await pool.connect();
        console.log("Database Connected Successfully!");
        
    } catch (error) {
        console.log("Getting Error While Connecting to DataBase!");
        throw error;
    }
}