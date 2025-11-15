'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "../ui/animateds/NavBar";
import { FooterAndCtaSection } from "../ui/animateds/FooterAndCtaSection";
import { User } from "@/data/country-club/user-wallet";
import toast from "react-hot-toast";

export function FundWallet() {
    const [amount, setAmount] = useState<number | string>('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const handleFundWallet = async () => {
        if (!amount || Number(amount) <= 0) {
            setMessage("Please enter a valid amount");
            return;
        }

        const id = localStorage.getItem("_id");
        if (!id) {
            setMessage("User not authenticated");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.put<User>(
                `https://nest-js-knb6.onrender.com/users/${id}/wallet`,
                { amount: Number(amount) }
            );

            const updatedUser = response.data;
            console.log("Updated User:", updatedUser);

            localStorage.setItem("user", JSON.stringify(updatedUser));

            setUser(updatedUser);

            setMessage("Wallet funded successfully!");
            toast.success(
                `You have recharged ₦${amount}. Your new balance is ₦${updatedUser.wallet}.`
            );
        } catch (error) {
            console.error("Error funding wallet:", error);
            setMessage("Failed to fund wallet. Please try again.");
            toast.error("Failed to fund wallet. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser) as User);
        }
    }, []);


    return (
        <div className="min-h-screen flex flex-col bg-black mt-16">
            <NavBar />

            <h1 className="text-blue-500 text-center mt-4 text-2xl">
                Wallet Balance: ₦{(user?.wallet ?? 0).toLocaleString()}
            </h1>

            <div className="flex-1 flex items-center justify-center p-4 mt-12">
                <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="p-8 space-y-6">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white">{user ? `${user}` : 'Fund Your Wallet'}</h2>
                            <p className="text-gray-500 mt-1">Enter the amount you want to add</p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full px-4 py-3 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    min="0"
                                    step="0.01"
                                />
                                <span className="absolute right-4 top-3.5 text-gray-400">$</span>
                            </div>

                            <button
                                onClick={handleFundWallet}
                                disabled={isLoading || !amount || Number(amount) <= 0}
                                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 cursor-pointer ${isLoading || !amount || Number(amount) <= 0
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md'
                                    }`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    'Add Funds'
                                )}
                            </button>
                        </div>

                        {message && (
                            <div className={`text-center text-sm p-3 rounded-lg ${message.includes('successfully')
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                                }`}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <FooterAndCtaSection />
        </div>
    );
}