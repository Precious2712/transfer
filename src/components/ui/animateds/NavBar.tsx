'use client';
import { motion } from "framer-motion"
import { AlignJustify, Zap } from "lucide-react"
import { Button } from "../button"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export function NavBar() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    const displayNavBar = () => {
        setShow(!show);
    }

    function handleLogOut() {
        localStorage.removeItem('token');
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }

    return (
        <div>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center space-x-2 cursor-pointer"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <motion.div
                                className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center"
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Zap className="w-5 h-5 text-slate-900" />
                            </motion.div>
                            <Link href='/home'>
                                <span className="text-xl font-bold">Home</span>
                            </Link>
                        </motion.div>
                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                { label: "England", href: "/england" },
                                { label: "Spain", href: "/spain" },
                                { label: "Italy", href: "/italy" },
                                { label: "France", href: "/france" },
                                { label: "Germany", href: "/germany" },
                                { label: "Wallet", href: "/wallet" },
                                { label: "Player cart", href: "/player-cart" }
                            ].map((item, index) => (
                                <Link href={item.href} key={item.label}>
                                    <motion.div
                                        className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                                        whileHover={{ y: -2 }}
                                    >
                                        {item.label}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                        <motion.div
                            className="hidden md:flex items-center space-x-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Button onClick={handleLogOut} variant="ghost" className="text-slate-300 hover:text-white cursor-pointer">
                                Logout
                            </Button>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                                <Link href='/'>
                                    <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white cursor-pointer">
                                        sign up
                                    </Button>
                                </Link>
                            </motion.div>

                        </motion.div>
                        <Button onClick={displayNavBar} variant="ghost" className=" text-slate-300 cursor-pointer focus:outline-blue-500 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 md:hidden lg:hidden">
                            <AlignJustify />
                        </Button>
                    </div>
                </div>
            </motion.nav>

            {show && (
                <motion.nav className={`fixed z-50 top-16 left-0 w-[100%] h-[] py-6 bg-blue-700 px-4 text-white transition-all duration-500 ease-in-out md:hidden lg:hidden ${show ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex flex-col gap-6">
                        {[
                            { label: "England", href: "/england" },
                            { label: "Spain", href: "/spain" },
                            { label: "Italy", href: "/italy" },
                            { label: "France", href: "/france" },
                            { label: "Germany", href: "/germany" },
                            { label: "Wallet", href: "/wallet" },
                            { label: "Player cart", href: "/player-cart" }
                        ].map((item, index) => (
                            <Link href={item.href} key={item.label}>
                                <motion.div
                                    className="text-slate-300 hover:text-white transition-colors ml-4 cursor-pointer"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    whileHover={{ y: -2 }}
                                >
                                    {item.label}
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <motion.div
                        className="mt-5"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Button onClick={handleLogOut} variant="ghost" className="bg-red-600 hover:bg-red-400  text-slate-300 hover:text-white cursor-pointer w-full">
                            Logout
                        </Button>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                            <Link href='/'>
                                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white cursor-pointer w-full mt-6">
                                    sign up
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </motion.nav>
            )}
        </div>

    )
}