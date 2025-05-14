export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-start h-screen p-6">
            {/* Content at the top */}
            <h1 className="text-4xl font-bold mt-6">Login or Take new measurements</h1>
            <p className="text-lg mt-2 text-center">
                Options
            </p>

            {/* Spacer to push button to the bottom */}
            <div className="flex-grow"></div>

            {/* Continue Button */}
            <button className="w-full max-w-xs bg-black text-white py-3 text-lg font-semibold rounded-md mb-10">
                CONTINUE
            </button>
        </div>
    );
}
