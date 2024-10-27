import { Router } from "express";

import { getRooms,getRoom } from "../handlers/getHandler.js";

import { AddRoom } from "../handlers/postHandler.js";

import { UpdateRoom } from "../handlers/putHandler.js";

import { DeleteRoom } from "../handlers/deleteHandler.js";

const route = Router();

route.get("/",getRooms);

route.get("/:rid",getRoom);

route.post("/AddRoom",AddRoom);

route.put("/UpdateRoom/:rid",UpdateRoom);

route.delete("/DeleteRoom/:rid",DeleteRoom);

export default route;