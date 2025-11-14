"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { leagues } from "@/data/country-club/leagues"
import { ArrowRight, Star, Play, ChevronLeft, ChevronRight, Badge } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FooterAndCtaSection } from "@/components/ui/animateds/FooterAndCtaSection"
import { NavBar } from "@/components/ui/animateds/NavBar"

export default function Component() {
    const [currentLeagueIndex, setCurrentLeagueIndex] = useState(0);
    const [currentClubIndex, setCurrentClubIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClubIndex((prev) => {
                const nextIndex = (prev + 1) % leagues[currentLeagueIndex].clubs.length
                return nextIndex
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [currentLeagueIndex]);

    // Reset club index when league changes
    useEffect(() => {
        setCurrentClubIndex(0)
    }, [currentLeagueIndex])

    const currentLeague = leagues[currentLeagueIndex]
    const currentClub = currentLeague.clubs[currentClubIndex]

    const nextLeague = () => {
        setCurrentLeagueIndex((prev) => (prev + 1) % leagues.length)
    }

    const prevLeague = () => {
        setCurrentLeagueIndex((prev) => (prev - 1 + leagues.length) % leagues.length)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const clubTransitionVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    }

    const imageVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3,
            },
        },
    }

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <NavBar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center space-y-8 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2">
                                <Star className="w-4 h-4 mr-2" />
                                Elite Transfer Marketplace
                            </Badge>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight"
                            variants={itemVariants}
                        >
                            Trade Elite Players
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Like Never Before
                            </span>
                        </motion.h1>

                        <motion.p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
                            The most advanced platform for football transfers. Connect with top clubs across {`Europe's Big 5 leagues`}
                            and discover world-class talent with AI-powered insights.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 text-lg"
                                >
                                    Start Trading
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
                                >
                                    <Play className="w-5 h-5 mr-2" />
                                    Watch Demo
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8" variants={containerVariants}>
                            {[
                                { value: "500+", label: "Elite Clubs", color: "text-emerald-400" },
                                { value: "12K+", label: "Pro Players", color: "text-cyan-400" },
                                { value: "€28B", label: "Market Value", color: "text-purple-400" },
                            ].map((stat, index) => (
                                <motion.div key={index} className="text-center" variants={statsVariants}>
                                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-sm text-slate-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section id="leagues" className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    {/* League Navigation */}
                    <motion.div
                        className="flex items-center justify-between mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {`Europe's `}
                                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                    Big 5
                                </span>{" "}
                                Leagues
                            </h2>

                            <p className="text-xl text-slate-400">Discover elite clubs and their world-class talent</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-4 bg-slate-800/50 rounded-full p-2">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={prevLeague}
                                    className="rounded-full w-10 h-10 p-0 hover:bg-slate-700"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                            </motion.div>

                            <div className="flex space-x-2 ">
                                {leagues.map((league, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentLeagueIndex(index)}
                                        className={`px-4 py-2 rounded-full text-[10px] font-medium transition-all ${index === currentLeagueIndex
                                            ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                                            : "text-slate-400 hover:text-white hover:bg-slate-700"
                                            }`}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        layout
                                    >
                                        {league.name}
                                    </motion.button>
                                ))}
                            </div>

                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={nextLeague}
                                    className="rounded-full w-10 h-10 p-0 hover:bg-slate-700"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="space-y-8"
                            key={`league-${currentLeagueIndex}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <motion.div
                                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${currentLeague.color} text-white text-sm font-medium mb-4`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                >
                                    {currentLeague.country}
                                </motion.div>
                                <motion.h3
                                    className="text-3xl font-bold text-white mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {currentLeague.name}
                                </motion.h3>
                                <motion.p
                                    className="text-slate-400 text-lg leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {currentLeague.description}
                                </motion.p>
                            </div>

                            {/* Current Club Info */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`club-${currentLeagueIndex}-${currentClubIndex}`}
                                    variants={clubTransitionVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                >
                                    <Card className="bg-slate-800/50 border-slate-700">
                                        <CardContent className="p-6">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                >
                                                    <Image
                                                        src={currentClub.logo || "/placeholder.svg?height=80&width=80"}
                                                        width="60"
                                                        height="60"
                                                        alt={`${currentClub.name} logo`}
                                                        className="rounded-full bg-white p-2"
                                                    />
                                                </motion.div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white">{currentClub.name}</h4>
                                                    <p className="text-slate-400">
                                                        Founded {currentClub.founded} • {currentClub.stadium}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-slate-300 leading-relaxed">{currentClub.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex justify-center space-x-2">
                                {currentLeague.clubs.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentClubIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentClubIndex
                                            ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                                            : "bg-slate-600 hover:bg-slate-500"
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        animate={{
                                            scale: index === currentClubIndex ? 1.2 : 1,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Club Image */}
                        <div className="relative">
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${currentLeague.color} opacity-20 rounded-2xl blur-3xl`}
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.2, 0.25, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`image-${currentLeagueIndex}-${currentClubIndex}`}
                                    variants={imageVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="relative"
                                >
                                    <Image
                                        src={currentClub.image || "/placeholder.svg"}
                                        width="600"
                                        height="400"
                                        alt={`${currentClub.name} stadium`}
                                        className="relative rounded-2xl border border-slate-700 w-full h-auto"
                                    />
                                    <motion.div
                                        className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { value: "500+", label: "Elite Clubs", color: "text-emerald-400" },
                            { value: "12K+", label: "Pro Players", color: "text-cyan-400" },
                            { value: "€28B", label: "Market Value", color: "text-purple-400" },
                            { value: "98%", label: "Success Rate", color: "text-orange-400" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={statsVariants}
                                whileHover={{ scale: 1.03, y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className={`text-4xl font-bold ${stat.color} mb-2`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <FooterAndCtaSection />
        </div>
    )
}