'use client'

import { motion } from "framer-motion"
import { Star, Award, Calendar } from 'lucide-react'

export default function Host() {
  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Host Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Meet your host</h2>
            
            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src="/img/host.jpg"
                  alt="Host"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full">
                  <Star className="w-4 h-4" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-1">Raghav</h3>
                <p className="text-muted-foreground">Host</p>
                
                <div className="flex gap-4 mt-4">
                  <div>
                    <div className="font-semibold">45</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                  <div>
                    <div className="font-semibold">5.0★</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div>
                    <div className="font-semibold">3</div>
                    <div className="text-sm text-muted-foreground">Years hosting</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span>Born in the 90s</span>
              </div>
              <p className="text-muted-foreground">
                I believe nature doesn&#39;t need saving but - we do. When I am not building a mud house, recording a podcast, or working on my tiny farm lab, I am usually found reading or writing about ecology, natural building, and regenerative living.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Guest favorite</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold mb-2">5.0</div>
                <p className="text-muted-foreground">
                  This home is in the top 10% of eligible listings based on ratings, reviews and reliability
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold mb-1">Cleanliness</div>
                  <div className="text-2xl font-bold">5.0</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Accuracy</div>
                  <div className="text-2xl font-bold">5.0</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Check-in</div>
                  <div className="text-2xl font-bold">4.9</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Communication</div>
                  <div className="text-2xl font-bold">5.0</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="text-2xl font-bold">4.9</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Value</div>
                  <div className="text-2xl font-bold">4.9</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 