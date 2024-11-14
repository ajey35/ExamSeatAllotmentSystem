
import { UpdateRoomById } from "../database/query.js";

export const UpdateRoom = async (req,res)=>{
    try {
        // const{room_name,subject,subject_code,block,invigilator_name,timings,invigilatorPhoto}= req.body;
        const roomDetails = {
            id:req.params.rid,
            ustart:req.body.usn_start,
            uend:req.body.usn_end,
            rname:req.body.room_name,
            sub:req.body.subject,
            subcode:req.body.subject_code,
            block:req.body.block,
            invName:req.body.invigilator_name,
            time:req.body.timings,
            invPhoto:req.body.invigilatorPhoto
        }
        console.log(req.params.rid);
        const UpdatedRoomId = await UpdateRoomById(roomDetails);
        
        res.status(201).json("Updated  Room Details SuccessFully");
    } catch (error) {
        throw error;
    }
}