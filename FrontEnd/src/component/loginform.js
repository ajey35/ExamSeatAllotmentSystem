import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role as student
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        
        setErrorMessage('');
        try {
            const response = await fetch('http://localhost:5001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, role }),
            });
    
            const contentType = response.headers.get('content-type');
            const data = await response.json(); // Parse JSON response once
    
            console.log("Server Response:", data);
    
            if (response.ok) {
                console.log('Login successful', data);
                localStorage.setItem('token', data.token);
                navigate(data.role === 'student' ? '/home':'/');
            } else {
                setErrorMessage(data.message || 'Unknown error occurred');
            }
        } catch (error) {
           
            setErrorMessage('An error occurred while logging in.');
        }
    };   
    
    return (
        <div className="flex justify-center bg-gray-100">
            <form onSubmit={handleSubmitForm} className="bg-white shadow-md rounded px-8 py-6 m-4 w-full max-w-md">
                <h2 className="text-xl font-bold mb-6 text-center">Login Form</h2>

                <div className="mb-4">
                    <div className="flex gap-4 mt-2 justify-center">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="student"
                                checked={role === 'student'}
                                onChange={(e) => setRole(e.target.value)}
                                className="mr-2"
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={(e) => setRole(e.target.value)}
                                className="mr-2"
                            />
                            Admin
                        </label>
                    </div>
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>

                {errorMessage && (
                    <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
