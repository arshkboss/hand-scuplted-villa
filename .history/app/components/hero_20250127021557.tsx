'use client'

import { Button } from "@/app/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  // Animation variants for the text elements
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="relative min-h-screen w-full ">
      {/* Background Image with Gradient Overlay */}<div className="h-screen flex items-center justify-center " >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/villa-exterior.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end  text-left text-white pb-20 py-20">
        <motion.h1 
          className="font-fairytale text-5xl md:text-7xl mb-4"
          {...fadeIn}
        >
          Hand-Sculpted Fairytale Forest Villa
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Experience the magic of living in a handcrafted wonderland nestled in nature
        </motion.p>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 transform transition-all hover:scale-105"
          >
            Book Now
          </Button>
        </motion.div>
      </div></div>
    </section>
  )
} 