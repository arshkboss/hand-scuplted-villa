'use client'

import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from 'lucide-react'

const attractions = [
  { name: "Enchanted Forest Trail", distance: "5 min walk" },
  { name: "Crystal Lake", distance: "15 min walk" },
  { name: "Artisan Village", distance: "10 min drive" },
  { name: "Mountain Viewpoint", distance: "20 min drive" },
]

export default function Location() {
  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px] bg-muted"
          >
            {/* Replace with actual map integration */}
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">Map Integration</span>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Location</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Fairytale Road<br />
                    Enchanted Forest<br />
                    Wonderland, WL 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Check-in/Check-out</h3>
                  <p className="text-muted-foreground">
                    Check-in: 3:00 PM<br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: +1 (234) 567-8900<br />
                    Email: stay@fairytalevilla.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Nearby Attractions</h3>
              <ul className="space-y-3">
                {attractions.map((attraction, index) => (
                  <li key={index} className="flex justify-between text-muted-foreground">
                    <span>{attraction.name}</span>
                    <span>{attraction.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 