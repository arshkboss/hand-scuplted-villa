'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion"
import { Star } from 'lucide-react'

// Duplicate reviews for seamless infinite scroll
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
]

// Duplicate reviews for seamless scrolling
const infiniteReviews = [...reviews, ...reviews, ...reviews]

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const { scrollXProgress } = useScroll({ container: containerRef })
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [1, 0.8, 1])

  // Create two rows of reviews moving in opposite directions
  const row1Controls = useAnimationControls()
  const row2Controls = useAnimationControls()

  useEffect(() => {
    const startAnimation = async () => {
      await Promise.all([
        row1Controls.start({
          x: [0, -1920], // Adjust based on your content width
          transition: {
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          },
        }),
        row2Controls.start({
          x: [-1920, 0], // Moving in opposite direction
          transition: {
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          },
        }),
      ])
    }

    startAnimation()
  }, [row1Controls, row2Controls])

  const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => (
    <motion.div
      className="flex-none w-[350px] mx-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="bg-card p-6 rounded-lg shadow-sm h-full border border-border/50 hover:border-primary/50 transition-colors">
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
        <p className="text-card-foreground mb-4 line-clamp-4">{review.comment}</p>
        <div className="flex flex-col text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{review.name}</span>
          <span>{review.location}</span>
          <span>{review.date}</span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 overflow-hidden mx-0">
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
          {/* First row moving left */}
          <motion.div
            animate={row1Controls}
            className="flex mb-8"
          >
            {infiniteReviews.map((review, index) => (
              <ReviewCard key={`row1-${index}`} review={review} index={index} />
            ))}
          </motion.div>

          {/* Second row moving right */}
          <motion.div
            animate={row2Controls}
            className="flex"
          >
            {infiniteReviews.reverse().map((review, index) => (
              <ReviewCard key={`row2-${index}`} review={review} index={index} />
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
} 