'use client'

import { useAppContext } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { LaligaModal } from "./LaligaModal";
import { useState } from "react";
import type { Player } from "@/data/country-club/topLeague"; 

export function ItalyComp() {
    const { italy, selectedClub } = useAppContext();
    const [modal, setModal] = useState(false);
    const [teamPlayer, setTeamPlayer] = useState<Player | null>(null);

    if (!selectedClub) {
        return (
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">Club Details</h2>
                <div className="bg-slate-700 p-6 rounded border-l-4 border-blue-500">
                    <p className="text-slate-300 text-lg">👈 Select a club from the sidebar to view players.</p>
                </div>
            </div>
        );
    }

    const selectedClubData = italy?.leagueName?.find(club => club.club === selectedClub);

    if (!selectedClubData) {
        return (
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">Club Details</h2>
                <div className="bg-red-900/20 border border-red-500 p-6 rounded">
                    <p className="text-red-400 text-lg">❌ Club &quot;{selectedClub}&quot; not found.</p>
                    <p className="text-slate-400 mt-2">
                        Available clubs: {italy?.leagueName?.map(club => club.club).join(", ")}
                    </p>
                </div>
            </div>
        );
    }

    const handleShowAll = (player: Player) => {
        setTeamPlayer(player);
        setModal(true);
    };

    return (
        <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">⚽</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-400">{selectedClubData.club}</h2>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-slate-300 flex items-center">
                <span className="mr-2">👥</span>
                Squad ({selectedClubData.players?.length || 0} players)
            </h3>

            <AnimatePresence>
                {selectedClubData.players.length > 0 ? (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {selectedClubData.players.map((player, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="bg-slate-700 rounded-lg p-4 border-l-4 border-blue-500 hover:scale-[1.02] transition-all duration-300 shadow-md"
                            >
                                <h1 className="text-white font-bold text-lg">{player.name}</h1>
                                <p className="text-blue-300">💰 ${player.price.toLocaleString()}</p>
                                <p className="text-slate-300">🌍 {player.nationality}</p>
                                <Button onClick={() => handleShowAll(player)} className="w-full mt-3 cursor-pointer">Buy</Button>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-yellow-900/20 border border-yellow-500 p-6 rounded">
                        <p className="text-yellow-400 italic text-lg">⚠️ No players found for this club.</p>
                    </div>
                )}
            </AnimatePresence>

            {teamPlayer && (
                <LaligaModal
                    isOpen={modal}
                    onClose={() => setModal(false)}
                    player={teamPlayer}
                />
            )}
        </div>
    );
}