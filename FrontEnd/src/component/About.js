import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Our Project</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to our Exam Seating Allotment System! This project was developed by three dedicated students:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Student 1:  Ajeya Kumara K</li>
                    <li>Student 2:  Anurag Sigh</li>
                    <li>Student 3:  Adithya S Y</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                    Our system aims to streamline the process of assigning exam seats to students in a fair and efficient manner. By utilizing algorithms, we ensure that each student receives their seat allocation based on predefined criteria, minimizing confusion and ensuring smooth exam operations.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>React.js for building the user interface.</li>
                    <li>Tailwind CSS for responsive and modern styling.</li>
                    <li>Node.js and Express for the backend services.</li>
                    <li>MySQL for data storage and management.</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                    We aim to provide an efficient solution for educational institutions, enhancing the exam experience for students and staff alike. Our goal is to continuously improve and expand our system based on user feedback.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                    If you have any questions or feedback about our project, feel free to reach out to us at:
                    <br />
                    <a href="mailto:contact@examseating.com" className="text-blue-500 hover:underline">contact@examseating.com</a>
                </p>
            </div>
        </div>
    );
};

export default About;
