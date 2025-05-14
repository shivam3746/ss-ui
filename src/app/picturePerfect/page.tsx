'use client';
import Image from "next/image";

export default function ThumbsUp() {
    

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Picture Perfect!</h1>
       

            <div className="inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 mt-30">
               <Image src="/thumbsUp.png" alt="done" width={86} height={86} />
            </div>

        </div>
    );
}