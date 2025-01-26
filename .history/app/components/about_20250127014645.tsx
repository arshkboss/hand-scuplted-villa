'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { AspectRatio } from "@/app/ui/aspect-ratio"
import { Button } from "@/app/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"

// Sample images array - replace with your actual villa images
const images = [
  '/img/9.jpg',
  '/villa-interior-2.jpg',
  '/villa-interior-3.jpg',
]

export default function About() {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  // Carousel navigation handlers
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              A Handcrafted Haven in Nature
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every corner of our villa tells a story, handcrafted with love and 
              attention to detail. From the whimsical sculptures that adorn the 
              walls to the custom-made furniture that seems to have grown from 
              the forest floor itself, each element has been carefully designed 
              to create a magical experience.
            </p>
            <p className="text-lg text-muted-foreground">
              Nestled in the heart of an enchanted forest, our villa offers a 
              unique blend of artistic craftsmanship and natural beauty, 
              providing an unforgettable escape from the ordinary.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="flex">
                {images.map((src, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={src}
                        alt={`Villa interior ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white rounded-full ml-4"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white rounded-full mr-4"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 