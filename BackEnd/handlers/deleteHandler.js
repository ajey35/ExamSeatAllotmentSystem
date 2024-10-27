
import { deleteById } from "../database/query.js";

export const DeleteRoom = async (req,res)=>{
    try {
        const id = req.params.rid;
        const result = await deleteById(id);
        res.status(204).json("We Deleted the Room Detail's SuccessFully!");
    } catch (error) {
        throw error;
    }
}
