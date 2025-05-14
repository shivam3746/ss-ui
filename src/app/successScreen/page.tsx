'use client';
import Image from "next/image";

export default function SuccessScreen() {
    

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Success!</h1>
            <p className="text-lg mt-2 text-center p-2">
                Your fit has been tailored with precision, customised exclusively for you.
            </p>

            <div className="inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 mt-30">
               <Image src="/success.png" alt="success" width={86} height={86} />
            </div>

            <div className="flex-grow"></div>

            <button className="w-full max-w-xs bg-black text-white py-3 text-lg font-semibold rounded-md mb-10">
                BACK TO SHOP
            </button>
        </div>
    );
}