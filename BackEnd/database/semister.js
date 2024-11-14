import pg from 'pg'

import { config } from 'dotenv';

config();

const {Pool} = pg;

export const poolSem = new Pool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});


export const connectToDatabaseSem = async () =>{
    try {
        await poolSem.connect();
        console.log("Database Semister Connected Successfully!");
        
    } catch (error) {
        console.log("Getting Error While Connecting to DataBase Semister!");
        throw error;
    }
}