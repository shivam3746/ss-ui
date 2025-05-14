'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function DetailsFormOne() {
    
    const [gender, setGender] = useState("");

    const router = useRouter();

    const handleContinue = () => {
        router.push("/detailsFormTwo");
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Enter key details to initiate your tailored fit.</h1>
            <p className="text-lg mt-2 text-center p-2">
                This information helps with identification and provides a biological fram of reference.
            </p>

              {/* Input Fields in the Middle */}
            <div className="w-full max-w-md mt-10 space-y-4">
                {/* Full Name Input */}
                <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-black"
                />

                <div 
                    className={`w-full border p-3 rounded-md flex items-center cursor-pointer ${gender === "Female" ? "border-black" : "border-gray-300"}`}
                    onClick={() => setGender("Female")}
                >
                    <input type="radio" name="gender" checked={gender === "Female"} readOnly className="mr-3"/>
                    <span>Female</span>
                </div>

                <div 
                    className={`w-full border p-3 rounded-md flex items-center cursor-pointer ${gender === "Male" ? "border-black" : "border-gray-300"}`}
                    onClick={() => setGender("Male")}
                >
                    <input type="radio" name="gender" checked={gender === "Male"} readOnly className="mr-3"/>
                    <span>Male</span>
                </div>
            </div>

            {/* Spacer to push button to the bottom */}
            <div className="flex-grow"></div>

             {/* Progress Bar */}
             <div className="w-full max-w-xs mt-6 mb-5">
                <div className="w-full h-2 bg-gray-300 rounded-md relative">
                    <div className="bg-black h-2 rounded-md" style={{ width: "25%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Step 1 of 4</p>
            </div>

            {/* Continue Button */}
            <button
                onClick={handleContinue}
                className="w-full max-w-xs bg-black text-white py-3 text-lg font-semibold rounded-md mb-10">
                CONTINUE
            </button>
        </div>
    );
}