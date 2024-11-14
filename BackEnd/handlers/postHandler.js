
import { CreateRoom } from "../database/query.js";


export const AddRoom = async (req,res)=>{
    try {
        // const{room_name,subject,subject_code,block,invigilator_name,timings,invigilatorPhoto}= req.body;
        const roomDetails = {
            ustart:req.body.usn_start,
            uend:req.body.usn_end,
            rname:req.body.room_name,
            sub:req.body.subject,
            subcode:req.body.subject_code,
            block:req.body.block,
            invName:req.body.invigilator_name,
            time:req.body.timings,
            invPhoto:req.body.invigilator_photo
        }
        const CreatedRoomId = await CreateRoom(roomDetails);
        res.status(201).json("We Added Room Details SuccessFully");
    } catch (error) {
        throw error;
    }
}