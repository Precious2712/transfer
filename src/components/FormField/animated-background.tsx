"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "circle" | "star" | "square"
  color: string
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<AnimatedElement[]>([])

  useEffect(() => {
    
    const colors = [
      "rgba(59, 130, 246, 0.5)",
      "rgba(99, 102, 241, 0.4)", 
      "rgba(139, 92, 246, 0.3)", 
      "rgba(236, 72, 153, 0.3)", 
      "rgba(248, 113, 113, 0.4)",
      "rgba(52, 211, 153, 0.4)", 
    ]

    const types: ("circle" | "star" | "square")[] = ["circle", "star", "square"]

    const newElements: AnimatedElement[] = []

    for (let i = 0; i < 30; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10, 
        duration: Math.random() * 20 + 10, 
        delay: Math.random() * -20,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-50 to-purple-50">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 360, Math.random() * -360, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {element.type === "circle" && (
            <div
              className="rounded-full"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: element.color,
              }}
            />
          )}
          {element.type === "square" && (
            <div
              className="rounded-md"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: element.color,
                transform: "rotate(45deg)",
              }}
            />
          )}
          {element.type === "star" && <StarShape color={element.color} />}
        </motion.div>
      ))}
    </div>
  )
}

function StarShape({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={color}
      />
    </svg>
  )
}