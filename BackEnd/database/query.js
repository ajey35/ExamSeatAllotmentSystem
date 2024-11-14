import { poolEx } from "./indexdb.js";

import { poolSem } from "./semister.js";

export const findAllRooms = async () => {
  const qry = "SELECT * FROM rooms";
  let client;
  try {
    client = await poolEx.connect();
    const result = await client.query(qry);
    return result.rows;
  } catch (error) {
    console.log("Getting Error While finding All Rooms!");
    throw error;
  } finally {
    if (client) client.release(); // Release the connection
  }
};

export const findRoomById = async (id) => {
  const qry = "SELECT * FROM rooms WHERE rid = $1";
  let client;
  try {
    client = await poolEx.connect();
    const result = await client.query(qry, [id]);
    return result.rows[0];
  } catch (error) {
    console.log("Getting Error While finding Room by ID!");
    throw error;
  } finally {
    if (client) client.release(); // Release the connection
  }
};

export const CreateRoom = async ({
  ustart,
  uend,
  rname,
  sub,
  subcode,
  block,
  invName,
  time,
  invPhoto,
}) => {
  const qry =
    "INSERT INTO rooms (usn_start,usn_end,room_name,subject,subject_code,block,invigilator_name,timings,invigilatorPhoto)  values ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
  let client;
  try {
    const values = [
      ustart,
      uend,
      rname,
      sub,
      subcode,
      block,
      invName,
      time,
      invPhoto,
    ];
    client = await poolEx.connect();
    const result = await client.query(qry, values);
    return result.command;
  } catch (error) {
    console.log("Getting Error While Creating  Room ");
    throw error;
  } finally {
    if (client) client.release(); // Release the connection
  }
};

export const UpdateRoomById = async ({
  ustart,
  uend,
  rname,
  sub,
  subcode,
  block,
  invName,
  time,
  invPhoto,
  id,
}) => {
  const qry =
    "UPDATE rooms SET usn_start = $1,usn_end =$2 ,room_name=$3,subject = $4,subject_code= $5,block = $6,invigilator_name= $7,timings = $8,invigilatorPhoto= $9   WHERE rid = $10";
  let client;
  try {
    const values = [
      ustart,
      uend,
      rname,
      sub,
      subcode,
      block,
      invName,
      time,
      invPhoto,
      id,
    ];
    client = await poolEx.connect();
    const result = await client.query(qry, values);
    return result.command;
  } catch (error) {
    console.log("Getting Error While Creating  Room ");
    throw error;
  } finally {
    if (client) client.release(); // Release the connection
  }
};

export const deleteById = async (id) => {
  const qry = "DELETE FROM rooms WHERE rid = $1 ";
  let client;
  try {
    client = await poolEx.connect();
    const result = await client.query(qry, [id]);
    return result.rows;
  } catch (error) {
    console.log("Getting Error While Deleting Room by ID!");
    throw error;
  } finally {
    if (client) client.release(); // Release the connection
  }
};

export const getSeatByUsn = async (usn, subcode, date) => {
  let client;
  try {
    const qry = `SELECT 
        r.room_number,
        r.block,
        r.floor,
        r.capacity,
        r.start_time,
        r.end_time,
        i.name AS invigilator_name,
        encode(i.photo, 'base64') AS invigilator_photo,  -- Convert BYTEA to base64
        s.subject_name,
        s.subject_code,
        ea.exam_date
    FROM 
       rooms r
    JOIN 
      subjects s ON r.subject_id = s.subject_id
    JOIN 
      invigilators i ON r.invigilator_id = i.invigilator_id
    JOIN 
      exam_allotment ea ON ea.subject_id = r.subject_id AND ea.exam_date = r.exam_date
    WHERE 
       s.subject_code ILIKE $2
    AND CAST(SUBSTRING($1, 10 - 2, 3) AS INTEGER)
        BETWEEN CAST(SUBSTRING(r.usn_start, 10 - 2, 3) AS INTEGER)
        AND CAST(SUBSTRING(r.usn_end, 10 - 2, 3) AS INTEGER)
    AND ea.exam_date = $3`;
    console.log("With parameters:", [usn, subcode, date]);
    client = await poolSem.connect();
    const result = await client.query(qry, [usn, subcode, date]);
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.error("Error while getting room details by the USN:", err);
    throw err;
  } finally {
    if (client) client.release();
  }
};
