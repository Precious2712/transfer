'use client';

import { useAppContext } from "@/context/AppContext";
import { NavBar } from "../ui/animateds/NavBar";
import { ItalyComp } from "./ItalyComp";


export function ItalianLeague() {
    const { italy, handleSelectClub } = useAppContext();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
            <NavBar />
            <div>
                <aside
                    className={`hidden md:block fixed top-16 left-0 h-full w-[17%] lg:w-[15%] bg-slate-950/80 backdrop-blur-md border-r border-slate-800 px-4 py-6 overflow-y-auto`}
                >
                    <h1 className="text-base  lg:text-lg font-bold text-white border-b border-slate-800 pb-2 mb-4">
                        {italy?.name}
                    </h1>

                    <div className="space-y-6">
                        {italy?.leagueName?.map((league, i) => (
                            <div key={i}>
                                <h2
                                    onClick={() => handleSelectClub(league.club)}
                                    className="text-sm font-semibold mb-2 text-slate-300 cursor-pointer"
                                >
                                    {league.club}
                                </h2>
                            </div>
                        ))}
                    </div>
                </aside>

                <aside className="block bg-black py-2 md:hidden fixed top-0 left-0 right-0 z-10 max-h-screen overflow-y-auto">
                    <h1 className="text-base font-bold text-white border-b border-slate-800 pb-2 mb-4 px-4">
                        {italy?.name}
                    </h1>

                    <div className="overflow-x-auto px-4 no-scrollbar mt-10">
                        <div className="flex gap-4 min-w-max">
                            {italy?.leagueName?.map((league, i) => (
                                <div key={i}>
                                    <h2
                                        onClick={() => handleSelectClub(league.club)}
                                        className="text-sm font-semibold mb-2 text-slate-300 cursor-pointer"
                                    >
                                        {league.club}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className={`hidden lg:block ml-[18%] mt-16 px-8 py-8`}>
                    <p className="text-white text-sm">
                        Select a club from the sidebar to view details here.
                    </p>
                    <div className="mt-3.5">
                        <ItalyComp />
                    </div>
                </main>

                <main className={`block mt-16 sm:hidden md:hidden lg:hidden`}>
                    <p className="text-white text-sm text-center">
                        Select a club from the sidebar to view details here.
                    </p>
                    <ItalyComp />
                </main>
            </div>

        </div>
    );
}