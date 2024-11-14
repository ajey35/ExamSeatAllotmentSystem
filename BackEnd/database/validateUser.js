// validateUser.js
import { poolSem } from "./semister.js";

export const validateUser = async (email, password , role) => {
    try {
        const qry = 'SELECT password FROM users WHERE email= $1';
        const client = await poolSem.connect();
        const result = await client.query(qry, [email]);

        if (result.rows.length === 0) throw new Error('Email not found');

        const user = result.rows[0];
        if (user.password === password) {
            return { success: true, message: "Successfully logged in", role:role };
        } else {
            return { success: false, message: "Invalid password" };
        }
    } catch (error) {
        throw error;
    }
};
