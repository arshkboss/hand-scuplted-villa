'use client'

import { motion } from "framer-motion"
import { Star } from 'lucide-react'

const reviews = [
  {
    name: "Sarah Johnson",
    date: "January 2024",
    rating: 5,
    comment: "A truly magical experience! The attention to detail in every corner of the villa is amazing. We felt like we were living in a fairytale."
  },
  {
    name: "Michael Chen",
    date: "December 2023",
    rating: 5,
    comment: "Perfect getaway spot. The handcrafted elements make it unique, and the surrounding nature is breathtaking."
  },
  {
    name: "Emma Williams",
    date: "November 2023",
    rating: 5,
    comment: "Exceeded all expectations. The villa is even more beautiful in person, and the hosts were incredibly accommodating."
  },
]

export default function Reviews() {
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
          <h2 className="text-4xl font-bold mb-4">Guest Reviews</h2>
          <p className="text-lg text-muted-foreground">
            What our guests say about their stay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-4">{review.comment}</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{review.name}</span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 