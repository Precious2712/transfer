"use client"

import { motion } from "framer-motion"
import { LoginField } from "@/components/signup/LoginField"

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">

      <motion.div
        className="absolute z-0"
        animate={{
          rotate: 360,
          y: [0, -30, 0],
          x: [0, 20, 0, -20, 0],
        }}
        transition={{
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
          x: { duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
        }}
      >
        <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center opacity-20">
          <div className="w-56 h-56 bg-gray-800 rounded-full flex items-center justify-center">
            <div
              className="w-48 h-48 bg-white rounded-full"
              style={{
                backgroundImage: "radial-gradient(black 15%, transparent 15%)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="absolute top-20 right-20 z-0"
        animate={{
          rotate: -360,
          y: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
        }}
      >
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-15">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
            <div
              className="w-16 h-16 bg-white rounded-full"
              style={{
                backgroundImage: "radial-gradient(black 15%, transparent 15%)",
                backgroundSize: "8px 8px",
              }}
            ></div>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="absolute bottom-20 left-20 z-0"
        animate={{
          rotate: 360,
          x: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
        }}
      >
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center opacity-15">
          <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center">
            <div
              className="w-24 h-24 bg-white rounded-full"
              style={{
                backgroundImage: "radial-gradient(black 15%, transparent 15%)",
                backgroundSize: "10px 10px",
              }}
            ></div>
          </div>
        </div>
      </motion.div>

     
      <motion.h1
        className="text-4xl font-bold text-white mb-8 text-center relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      >
        Welcome back
      </motion.h1>

     
      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4,
        }}
      >
        <LoginField />
      </motion.div>
    </div>
  )
}