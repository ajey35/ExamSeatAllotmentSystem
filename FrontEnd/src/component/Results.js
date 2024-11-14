
import React from 'react';
import { useLocation } from 'react-router-dom';

import pic from '../component/wow.jpg'

export default function Results() {
    const location = useLocation();
    const { seatDetails } = location.state || {}; 

    if (!seatDetails || seatDetails.length === 0) return <p>No seat details available.</p>;

    return (
        <div className="flex justify-center min-h-[50%] bg-gray-100 p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-gray-800">Seat Details:</h2>
        <ul className="space-y-6">
            {seatDetails.map((seat, index) => (
                <li key={index} className="border border-gray-300 p-4 sm:p-6 rounded-lg hover:shadow-xl transition duration-200 bg-gray-50">
                    <div className="flex flex-col sm:flex-row items-center">
                        <img 
                            src={pic} 
                            alt="No Photo Found!" 
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 sm:mb-0 border-2 border-gray-300 shadow-lg object-cover"  
                        />
                        <div className="sm:ml-4 text-center sm:text-left">
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                                Room Number: <span className="font-normal text-gray-500">{seat.room_number}</span>
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                                Block: <span className="font-normal text-gray-500">{seat.block}</span>
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                                Floor: <span className="font-normal text-gray-500">{seat.floor}</span>
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                                Invigilator: <span className="font-normal text-gray-500">{seat.invigilator_name}</span>
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                                Subject: <span className="font-normal text-gray-500">{seat.subject_name}</span>
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                                Exam Date: <span className="font-normal text-gray-500">{seat.exam_date}</span>
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
</div>

    );
}
