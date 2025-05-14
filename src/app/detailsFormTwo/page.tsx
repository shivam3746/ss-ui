'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function DetailsFormTwo() {
    
    const [bodyType, setBodyType] = useState("");
    const [age, setAge] = useState(25);

    const router = useRouter();
    
    const handleContinue = () => {
            router.push("/detailsFormThree");
    };
    

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Enter key details to initiate your tailored fit.</h1>
            <p className="text-lg mt-2 text-center p-2">
                These details align your profile with a representative AI body type.
            </p>

              {/* Input Fields in the Middle */}
            <div className="w-full max-w-md mt-10 space-y-4">
        
                {/* Body Type Selection Selection */}
                <div 
                    className={`w-full border p-3 rounded-md flex items-center cursor-pointer ${bodyType === "Slim" ? "border-black" : "border-gray-300"}`}
                    onClick={() => setBodyType("Slim")}
                >
                    <input type="radio" name="bodyType" checked={bodyType === "Slim"} readOnly className="mr-3"/>
                    <span>Slim</span>
                </div>

                <div 
                    className={`w-full border p-3 rounded-md flex items-center cursor-pointer ${bodyType === "Average" ? "border-black" : "border-gray-300"}`}
                    onClick={() => setBodyType("Average")}
                >
                    <input type="radio" name="bodyType" checked={bodyType === "Average"} readOnly className="mr-3"/>
                    <span>Average</span>
                </div>

                <div 
                    className={`w-full border p-3 rounded-md flex items-center cursor-pointer ${bodyType === "Muscular" ? "border-black" : "border-gray-300"}`}
                    onClick={() => setBodyType("Muscular")}
                >
                    <input type="radio" name="bodyType" checked={bodyType === "Muscular"} readOnly className="mr-3"/>
                    <span>Muscular</span>
                </div>

                <div 
                    className={`w-full border p-3 rounded-md flex items-center cursor-pointer ${bodyType === "Curvy" ? "border-black" : "border-gray-300"}`}
                    onClick={() => setBodyType("Curvy")}
                >
                    <input type="radio" name="bodyType" checked={bodyType === "Curvy"} readOnly className="mr-3"/>
                    <span>Curvy</span>
                </div>

                <div>
                    <div className="flex justify-between text-sm font-semibold">
                        <span>Age</span>
                        <span>{age}</span>
                    </div>
                    <input
                        type="range"
                        min="20"
                        max="90"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full mt-2"
                    />
                </div>


            </div>

            {/* Spacer to push button to the bottom */}
            <div className="flex-grow"></div>

             {/* Progress Bar */}
             <div className="w-full max-w-xs mt-6 mb-5">
                <div className="w-full h-2 bg-gray-300 rounded-md relative">
                    <div className="bg-black h-2 rounded-md" style={{ width: "50%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Step 2 of 4</p>
            </div>

            {/* Continue Button */}
            <button
                onClick={handleContinue} 
                className="w-full max-w-xs bg-black text-white py-3 text-lg font-semibold rounded-md mb-10">
                NEXT
            </button>
        </div>
    );
}