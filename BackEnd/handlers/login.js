import jwt from 'jsonwebtoken';
import { validateUser } from "../database/validateUser.js";

const loginHandle = async (req, res) => {
    const { email, password, role } = req.body;
    console.log(email);
    console.log(password)
    console.log(role);
    try {
        console.log("Login attempt:", email, role); // Log email and role
        const result = await validateUser(email, password, role);

        if (result.success) {
            const token = jwt.sign(
                { email, password ,role }, // Exclude password from JWT
                'cmrit@sttudent',
                { expiresIn: '1h' }
            );
            res.status(200).json({ message: result.message, token, role: result.role });
        } else {
            res.status(401).json({ message: result.message });
        }
    } catch (error) {
        console.error("Error during login:", error); // Log full error
        res.status(500).json({ message: 'An internal error occurred' });
    }
};
export default loginHandle;