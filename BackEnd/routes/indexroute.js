import { Router } from "express";

import { getSeat } from "../handlers/getSeat.js";

import loginHandle from "../handlers/login.js";

const route = Router();

route.post('/login',loginHandle);

route.get('/',(req,res)=>{
    res.status(200).json({msg:"Hello From BackEnd"})
})

route.post('/getSeat', getSeat);

export default route;