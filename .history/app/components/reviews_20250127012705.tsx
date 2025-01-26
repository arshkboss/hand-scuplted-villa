'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/app/ui/button"

const reviews = [
  {
    name: "Sarah Johnson",
    date: "January 2024",
    rating: 5,
    location: "United States",
    comment: "A truly magical experience! The attention to detail in every corner of the villa is amazing. We felt like we were living in a fairytale."
  },
  {
    name: "Michael Chen",
    date: "December 2023",
    rating: 5,
    location: "Singapore",
    comment: "Perfect getaway spot. The handcrafted elements make it unique, and the surrounding nature is breathtaking."
  },
  {
    name: "Emma Williams",
    date: "November 2023",
    rating: 5,
    location: "United Kingdom",
    comment: "Exceeded all expectations. The villa is even more beautiful in person, and the hosts were incredibly accommodating."
  },
  {
    name: "Alessandro Romano",
    date: "October 2023",
    rating: 5,
    location: "Italy",
    comment: "An architectural masterpiece nestled in nature. Every detail tells a story. The perfect blend of luxury and artistry."
  },
  {
    name: "Sophie Martin",
    date: "September 2023",
    rating: 5,
    location: "France",
    comment: "Magical moments in a magical place. The garden is a paradise, and the interior design is simply stunning."
  },
  {
    name: "James Wilson",
    date: "August 2023",
    rating: 5,
    location: "Australia",
    comment: "Worth every penny! The villa offers complete privacy while being close to amazing attractions. We'll definitely return."
  },
  // Add more reviews...
]

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [1, 0.8, 1])

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

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

        <div className="relative">
          <motion.div 
            ref={containerRef}
            style={{ opacity }}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 -mx-4 px-4 snap-x snap-mandatory"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-[300px] md:w-[350px] snap-start"
              >
                <div className="bg-card p-6 rounded-lg shadow-sm h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-card-foreground mb-4">{review.comment}</p>
                  <div className="flex flex-col text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{review.name}</span>
                    <span>{review.location}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <Button
              variant="ghost"
              size="icon"
              className="pointer-events-auto bg-background/80 hover:bg-background shadow-md"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="pointer-events-auto bg-background/80 hover:bg-background shadow-md"
              onClick={scrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 