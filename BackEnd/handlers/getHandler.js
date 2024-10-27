
import { findAllRooms,findRoomById } from "../database/query.js";



export const getRooms = async (req,res)=>{
    try {
        const allRooms = await findAllRooms();
        res.status(200).json(allRooms);
    } catch (error) {
        throw error;
    }
}
export const getRoom = async (req,res)=>{
    try {
        const id = req.params.rid;
        const room = await findRoomById(id);
        res.status(200).json(room);
    } catch (error) {
        throw error;
    }
}