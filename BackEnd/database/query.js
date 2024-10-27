import { pool } from "./indexdb.js";

export const findAllRooms = async () => {
    const qry = "SELECT * FROM rooms";
    let client;
    try {
        client = await pool.getConnection();
        const [rows] = await client.query(qry); // Using destructuring to get rows from result
        return rows;
    } catch (error) {
        console.log("Getting Error While finding All Rooms!");
        throw error;
    } finally {
        if (client) client.release(); // Release the connection
    }
};

export const findRoomById = async (id) => {
    const qry = "SELECT * FROM rooms WHERE rid = ?";
    let client;
    try {
        client = await pool.getConnection();
        const [result] = await client.query(qry, [id]); // Using destructuring to get rows from result
        return result; // Return only the first result, assuming rid is unique
    } catch (error) {
        console.log("Getting Error While finding Room by ID!");
        throw error;
    } finally {
        if (client) client.release(); // Release the connection
    }
};


export const CreateRoom = async ({rname,sub,subcode,block,invName,time,invPhoto}) => {
    const qry = "INSERT INTO rooms (room_name,subject,subject_code,block,invigilator_name,timings,invigilatorPhoto)  values (?,?,?,?,?,?,?)";
    let client;
    try {
        const values = [rname,sub,subcode,block,invName,time,invPhoto];
        client = await pool.getConnection();
        const [result] = await client.query(qry,values); 
        return result;
    } catch (error) {
        console.log("Getting Error While Creating  Room ");
        throw error;
    } finally {
        if (client) client.release(); // Release the connection
    }
};

export const UpdateRoomById = async ({rname,sub,subcode,block,invName,time,invPhoto,id}) => {
    const qry = "UPDATE rooms SET room_name=?,subject = ?,subject_code= ?,block = ?,invigilator_name= ?,timings = ?,invigilatorPhoto= ?   WHERE rid = ?";
    let client;
    try {
        const values = [rname,sub,subcode,block,invName,time,invPhoto,id];
        client = await pool.getConnection();
        const [result] = await client.query(qry,values); 
        return result;
    } catch (error) {
        console.log("Getting Error While Creating  Room ");
        throw error;
    } finally {
        if (client) client.release(); // Release the connection
    }
};

export const deleteById = async (id) => {
    const qry = "DELETE FROM rooms WHERE rid = ? ";
    let client;
    try {
        client = await pool.getConnection();
        const [result] = await client.query(qry, [id]); // Using destructuring to get rows from result
        return result; // Return only the first result, assuming rid is unique
    } catch (error) {
        console.log("Getting Error While Deleting Room by ID!");
        throw error;
    } finally {
        if (client) client.release(); // Release the connection
    }
};
