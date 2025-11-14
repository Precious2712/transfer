"use client";
import toast from "react-hot-toast";
import { FooterAndCtaSection } from "@/components/ui/animateds/FooterAndCtaSection";
import { NavBar } from "@/components/ui/animateds/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { MapPin, Target, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface PlayerProp {
    name: string;
    price: number;
    position: string;
    assist: number;
    dribble: number;
    goals: number;
    club: string;
    user: string;
    _id: string;
}

const positionColors = {
    Striker: "bg-red-100 text-red-800",
    Forward: "bg-orange-100 text-orange-800",
    Midfielder: "bg-blue-100 text-blue-800",
    Goalkeeper: "bg-green-100 text-green-800",
} as const;

export default function PlayerCards() {
    const [players, setPlayers] = useState<PlayerProp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPlayers = async () => {
        try {
            const id = localStorage.getItem('_id');
            if (!id) throw new Error("User ID not found");

            const response = await axios.get<PlayerProp[]>(`https://nest-js-knb6.onrender.com/wallet/user/${id}`);
            console.log(response);

            setPlayers(response.data);
        } catch (err) {
            console.error("Error fetching players:", err);
            setError("Failed to load players");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const remove = await axios.delete(`https://nest-js-knb6.onrender.com/wallet/delete/${id}`);
            console.log(remove, 'remove');
            toast.success('item successfully deleted!!');
            await fetchPlayers();
        } catch (error) {
            console.log(error);
            if (error) {
                toast.error(`An error has occur`);
            }
        }
    }

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
    if (players.length === 0) return <div className="min-h-screen flex items-center justify-center">No players found</div>;


    return (
        <div className="min-h-screen  bg-slate-950">
            <NavBar />
            <div className="mt-16 py-6">
                <div className="">
                    <div className="text-center mb-8">
                        <p className="text-gray-600  ">Your current squad</p>
                    </div>

                    <div className="mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {players.map((player) => {
                            const positionColor = positionColors[player.position as keyof typeof positionColors] || "bg-gray-100 text-gray-800";

                            return (
                                <Card key={player._id} className="w-[100%] hover:shadow-md transition-shadow bg-blue-900">
                                    <CardContent className="py-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                                                <span className="font-medium text-gray-700">
                                                    {player.name.split(" ").map(n => n[0]).join("")}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{player.name}</h3>
                                                <div className={`text-xs px-2 py-1 rounded-full ${positionColor}`}>
                                                    {player.position}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <MapPin className="h-4 w-4" />
                                            <span>{player.club}</span>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="text-center">
                                                <Target className="h-4 w-4 mx-auto text-gray-500" />
                                                <p className="font-medium">{player.goals}</p>
                                                <p className="text-xs text-gray-500">Goals</p>
                                            </div>
                                            <div className="text-center">
                                                <TrendingUp className="h-4 w-4 mx-auto text-gray-500" />
                                                <p className="font-medium">{player.assist}</p>
                                                <p className="text-xs text-gray-500">Assists</p>
                                            </div>
                                            <div className="text-center">
                                                <Zap className="h-4 w-4 mx-auto text-gray-500" />
                                                <p className="font-medium">{player.dribble}</p>
                                                <p className="text-xs text-gray-500">Dribble</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-3">
                                            <div className="text-sm text-gray-500">Value</div>
                                            <div className="font-medium">
                                                €{(player.price).toLocaleString()}K
                                            </div>
                                        </div>
                                        <Button onClick={() => handleDelete(player._id)} className="w-full mt-6 cursor-pointer">remove</Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
            <FooterAndCtaSection />
        </div>
    );
}