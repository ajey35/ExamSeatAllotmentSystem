
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Student_Form() {
   
    const [usn, setUsn] = useState('');
    const [subjectCode, setSubjectCode] = useState('');
    const [examDate, setExamDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(''); 
    
        // Prepare the data to send in the POST request
        const data = {
            usn: usn,
            subjectCode: subjectCode,
            date: '2024-11-06',  // Example date, replace it with the actual date from the form if needed
        };

        console.log(data);
        
    
        try {
            // Send the POST request to the backend
            const response = await fetch('http://localhost:5001/getSeat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Specify that we are sending JSON
                },
                body: JSON.stringify(data),  // Convert the data object to a JSON string
            });
    
            const text = await response.text(); 
            console.log("Raw response:", text); 
    
            if (response.ok) {
                try {
                    // Parse the JSON response from the server
                    const responseData = JSON.parse(text); 
                    if (responseData.length === 0) {
                        setError("No seat found for the provided details.");
                    } else {
                        // Navigate to the results page with the seat details
                        navigate('/results', { state: { seatDetails: responseData } });
                    }
                } catch (e) {
                    setError("Received invalid JSON from the server.");
                    console.error("JSON parse error:", e);
                }
            } else {
                setError("Error fetching seat details: " + text);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setError("An error occurred while fetching seat details.");
        }
    };    

    return (
        <>
            <div className="flex justify-center min-h-[50%] bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 m-4 w-full max-w-md">
                    <h2 className="text-xl font-bold mb-6 text-center">Exam Seat Allotment</h2>
                    <input
                        type="text"
                        placeholder="USN"
                        value={usn}
                        onChange={(e) => setUsn(e.target.value)}
                        required
                        className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Subject Code"
                        value={subjectCode}
                        onChange={(e) => setSubjectCode(e.target.value)}
                        required
                        className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        value={examDate}
                        onChange={(e) => setExamDate(e.target.value)}
                        required
                        className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition duration-200"
                    >
                        Get Seat
                    </button>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </form>
            </div>
        </>
    );
}
