'use client';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function FooterAndCtaSection() {
    return (
        <>
            <motion.section
                className="py-20 px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ready to{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Dominate
                        </span>{" "}
                        the Transfer Market?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Join the elite clubs already using PlayerVault to discover and acquire world-class talent.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-12 py-4 text-lg"
                        >
                            Get Started Today
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </motion.section>

            <motion.footer
                className="border-slate-800 py-12 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.div className="flex items-center space-x-2 mb-4 md:mb-0" whileHover={{ scale: 1.03 }}>
                        </motion.div>
                        <div className="flex space-x-6 text-slate-400">
                            {["Privacy", "Terms", "Support"].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    className="hover:text-white transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    viewport={{ once: true }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="mt-8 pt-8  border-slate-800 text-center text-slate-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p>&copy; 2024 PlayerVault. All rights reserved.</p>
                    </motion.div>
                </div>
            </motion.footer>
        </>
    )
}