'use client';

import { useState } from "react";

export default function ProgressScreen() {
    

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Please wait...</h1>
            <p className="text-lg mt-2 text-center p-2">
                We are analyzing your measurements to create a tailored fit. This will only take a few seconds.
            </p>

            <div className="inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 mt-30">
            <p className="text-6xl">15%</p>
            <p className="text-lg">Identifying landmarks...</p>
        </div>
        </div>
    );
}