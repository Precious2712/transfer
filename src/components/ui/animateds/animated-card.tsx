"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode } from "react"

interface AnimatedCardProps extends ComponentProps<typeof Card> {
  delay?: number
  children: ReactNode
}

export function AnimatedCard({ className, delay = 0, children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      }}
      className={cn(className)}
    >
      <Card className={cn("overflow-hidden", className)} {...props}>
        {children}
      </Card>
    </motion.div>
  )
}