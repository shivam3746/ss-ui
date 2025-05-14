'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function DetailsFormTwo() {
    
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);

    const cmToFeet = (cm: number) => (cm / 30.48).toFixed(2);
    const kgToLbs = (kg: number) => (kg * 2.205).toFixed(0);

    const router = useRouter();

    const handleContinue = () => {
            router.push("/detailsFormFour");
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Enter key details to initiate your tailored fit.</h1>
            <p className="text-lg mt-2 text-center p-2">
                Height & Weight provide accurate referrence points for your body mapping.
            </p>

              {/* Input Fields in the Middle */}
            <div className="w-full max-w-md mt-10 space-y-4">
        
                {/* Height Slider */}
                <div>
                    <div className="flex justify-between text-sm font-semibold">
                        <span>Height</span>
                        <span>{height} cm / {cmToFeet(height)} ft</span>
                    </div>
                    <input
                        type="range"
                        min="100"
                        max="220"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full mt-2"
                    />
                </div>

                {/* Weight Slider */}
                <div>
                    <div className="flex justify-between text-sm font-semibold">
                        <span>Weight</span>
                        <span>{weight} kg / {kgToLbs(weight)} lbs</span>
                    </div>
                    <input
                        type="range"
                        min="30"
                        max="150"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full mt-2"
                    />
                </div>
            </div>

            {/* Spacer to push button to the bottom */}
            <div className="flex-grow"></div>

             {/* Progress Bar */}
             <div className="w-full max-w-xs mt-6 mb-5">
                <div className="w-full h-2 bg-gray-300 rounded-md relative">
                    <div className="bg-black h-2 rounded-md" style={{ width: "75%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Step 3 of 4</p>
            </div>

            {/* Continue Button */}
            <button
                onClick={handleContinue}
                className="w-full max-w-xs bg-black text-white py-3 text-lg font-semibold rounded-md mb-10">
                PROCEED TO MEASUREMENTS
            </button>
        </div>
    );
}