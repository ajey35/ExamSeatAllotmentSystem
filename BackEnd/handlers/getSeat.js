
import { getSeatByUsn } from "../database/query.js";

export const getSeat = async (req,res) =>{
     // res.status(200).json("Getting data successfully!");
     try {
        const {usn,subjectCode,date} = req.body;
        console.log(usn,subjectCode,date);
        const fetchedSeat  = await getSeatByUsn(usn,subjectCode,date);
      //   console.log(fetchedSeat);
        
        res.status(200).json(fetchedSeat);
     } catch (error) {
        console.log("Getting error get seat fucntion");
        throw error;
     }
}