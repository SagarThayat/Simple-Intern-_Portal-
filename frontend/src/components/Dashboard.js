import React from "react";

const Dashboard = () => {
    const intern = {
        name: "Sagar Thayat",
        referralCode: "sagar2025",
        donations: 1500,
        rewards: ["T-Shirt", "Certificate", "Shoutout"],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white flex items-center justify-center px-4 py-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-lg p-8 space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-center">🎉 Welcome, {intern.name}</h2>

                <div className="space-y-2">
                    <p className="text-lg">
                        <span className="font-medium text-indigo-300">Referral Code:</span>{" "}
                        <span className="font-bold text-white">{intern.referralCode}</span>
                    </p>
                    <p className="text-lg">
                        <span className="font-medium text-indigo-300">Total Donations Raised:</span>{" "}
                        <span className="font-bold text-green-400">₹{intern.donations}</span>
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-indigo-200 mb-2">🏆 Rewards</h3>
                    <ul className="list-disc list-inside space-y-1 text-white">
                        {intern.rewards.map((reward, index) => (
                            <li key={index} className="pl-2">{reward}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
