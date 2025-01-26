'use client'

import { motion } from "framer-motion"
import { Trophy, MapPin, Calendar, Star, Shield, Clock, Users, Sparkles } from 'lucide-react'
import { Button } from "@/app/ui/button"

const highlights = [
  {
    icon: Trophy,
    title: "Guest Favourite",
    rating: "5.0",
    subtext: "★ 44 Reviews",
    description: "One of the most loved homes on Airbnb",
    stats: [
      { label: "Cleanliness", value: "5.0" },
      { label: "Communication", value: "5.0" },
      { label: "Check-in", value: "4.9" },
    ]
  },
  {
    icon: MapPin,
    title: "Prime Location",
    mainText: "40-min drive to Rajaji National Park",
    subtext: "Near the national park",
    description: "Perfect base for nature exploration",
    features: [
      "Close to hiking trails",
      "Mountain views",
      "Peaceful surroundings"
    ]
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    mainText: "Free cancellation",
    subtext: "Before 6 Mar",
    description: "Worry-free booking experience",
    policies: [
      "Full refund available",
      "Easy rescheduling",
      "24/7 support"
    ]
  }
]

const additionalFeatures = [
  {
    icon: Star,
    title: "Superhost",
    description: "Experienced host with top ratings"
  },
  {
    icon: Shield,
    title: "Enhanced Clean",
    description: "Committed to enhanced cleaning protocol"
  },
  {
    icon: Clock,
    title: "Self Check-in",
    description: "Check yourself in with smart lock"
  },
  {
    icon: Users,
    title: "Great for Groups",
    description: "Spacious accommodation for families"
  },
  {
    icon: Sparkles,
    title: "Unique Stay",
    description: "One-of-a-kind experience"
  }
]

export default function Highlights() {
  return (
    <section className="py-12 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{highlight.title}</h3>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {highlight.rating && (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{highlight.rating}</span>
                    <span className="text-sm text-muted-foreground">{highlight.subtext}</span>
                  </div>
                )}

                {highlight.mainText && (
                  <div>
                    <div className="font-medium mb-1">{highlight.mainText}</div>
                    <div className="text-sm text-muted-foreground">{highlight.subtext}</div>
                  </div>
                )}

                <p className="text-muted-foreground">{highlight.description}</p>

                {/* Conditional Rendering based on highlight type */}
                {highlight.stats && (
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {highlight.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-semibold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {highlight.features && (
                  <ul className="space-y-1">
                    {highlight.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {highlight.policies && (
                  <ul className="space-y-1">
                    {highlight.policies.map((policy, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {policy}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-secondary/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">More Reasons to Stay</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-sm"
              >
                <div className="p-2 bg-primary/10 rounded-full mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Book Your Magical Stay
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 