'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { 
  Wifi, Utensils, Car, Trees, Coffee, Bath, Tv, Wind,
  WavesLadder, Dumbbell, Waves, Sun, Wine, Lock, BriefcaseMedical,
  Shirt, Music, Gamepad, Bike, Mountain, Flame, Snowflake
} from 'lucide-react'
import { Button } from "@/app/ui/button"

const allAmenities = [
  { icon: Wifi, label: "Free High-Speed WiFi" },
  { icon: WavesLadder, label: "Infinity Pool" },
  { icon: Utensils, label: "Fully Equipped Kitchen" },
  { icon: Car, label: "Free Parking" },
  { icon: Trees, label: "Private Garden" },
  { icon: Coffee, label: "Premium Coffee Maker" },
  { icon: Bath, label: "Luxury Bathroom" },
  { icon: Tv, label: "Smart TV" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Dumbbell, label: "Home Gym" },
  { icon: Waves, label: "Hot Tub" },
  { icon: Sun, label: "Sun Deck" },
  { icon: Wine, label: "Wine Cellar" },
  { icon: Lock, label: "Smart Security" },
  { icon: BriefcaseMedical, label: "First Aid Kit" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: Music, label: "Sound System" },
  { icon: Gamepad, label: "Game Room" },
  { icon: Bike, label: "Bike Rental" },
  { icon: Mountain, label: "Mountain View" },
  { icon: Flame, label: "Fireplace" },
  { icon: Snowflake, label: "Climate Control" },
]

export default function Amenities() {
  const [showAll, setShowAll] = useState(false)
  const displayedAmenities = showAll ? allAmenities : allAmenities.slice(0, 8)

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Villa Amenities</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for a comfortable and magical stay
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          layout
        >
          <AnimatePresence>
            {displayedAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <amenity.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-medium">{amenity.label}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="group"
          >
            <span>{showAll ? 'Show Less' : 'View All Amenities'}</span>
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              className="ml-2"
            >
              ↓
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 