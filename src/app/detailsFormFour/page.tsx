'use client';

import { useRouter } from 'next/navigation';

export default function DetailsFormFour() {

    const router = useRouter();
    
    const handleContinue = () => {
        router.push("/detailsFormFive");
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Capture a Front View Photo, Then a Side View Photo.</h1>
            <p className="text-lg mt-2 text-center p-2">
                Before you start, please dress in form-fitting clothing or underwear and remove your shoes.
            </p>

                {/* Features Section */}
                <div className="mt-8 space-y-4">
                {[
                    {
                        icon: "/lock.png",
                        title: "End-to-end encryption",
                        description:
                            "Your images are processed and encrypted on our servers with industry-leading security.",
                    },
                    {
                        icon: "/privacy.png",
                        title: "No human involved",
                        description:
                            "AI extracts your measurements, ensuring your photos are never seen by a human.",
                    },
                    {
                        icon: "/bin.png",
                        title: "Privacy by design",
                        description:
                            "No raw images or personal identifiers are stored, ensuring strict data compliance.",
                    },
                ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="bg-gray-800 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <img src={item.icon} alt={item.title} className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

          

            {/* Spacer to push button to the bottom */}
            <div className="flex-grow"></div>

             {/* Progress Bar */}
             <div className="w-full max-w-xs mt-6 mb-5">
                <div className="w-full h-2 bg-gray-300 rounded-md relative">
                    <div className="bg-black h-2 rounded-md" style={{ width: "100%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Step 4 of 4</p>
            </div>

            {/* Continue Button */}
            <button
                onClick={handleContinue}
                className="w-full max-w-xs bg-black text-white py-3 text-lg font-semibold rounded-md mb-10">
                CAPTURE PHOTOS
            </button>
        </div>
    );
}