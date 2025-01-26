'use client'

import { motion } from "framer-motion"
import { Trophy, MapPin, Calendar } from 'lucide-react'

export default function Highlights() {
  return (
    <section className="py-12 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Guest Favorite */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card p-6 rounded-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Guest favourite</h3>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-sm text-muted-foreground">★ 44 Reviews</span>
            </div>
            <p className="text-sm text-muted-foreground">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card p-6 rounded-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Prime Location</h3>
            </div>
            <div className="mb-2 font-medium">40-min drive to Rajaji National Park</div>
            <p className="text-sm text-muted-foreground">
              This home is near the national park
            </p>
          </motion.div>

          {/* Cancellation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card p-6 rounded-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Free cancellation</h3>
            </div>
            <div className="mb-2 font-medium">Before 6 Mar</div>
            <p className="text-sm text-muted-foreground">
              Get a full refund if you change your mind
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 