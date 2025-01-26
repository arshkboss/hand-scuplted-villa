'use client'

import { motion } from "framer-motion"
import { Wifi, Utensils, Car, Trees, Coffee, Bath, Tv, Wind } from 'lucide-react'

const amenities = [
  { icon: Wifi, label: "Free High-Speed WiFi" },
  { icon: Utensils, label: "Fully Equipped Kitchen" },
  { icon: Car, label: "Free Parking" },
  { icon: Trees, label: "Private Garden" },
  { icon: Coffee, label: "Coffee Maker" },
  { icon: Bath, label: "Luxury Bathroom" },
  { icon: Tv, label: "Smart TV" },
  { icon: Wind, label: "Air Conditioning" },
]

export default function Amenities() {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <amenity.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium">{amenity.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 