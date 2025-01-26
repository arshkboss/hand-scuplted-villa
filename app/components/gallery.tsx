'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { AspectRatio } from "@/app/ui/aspect-ratio"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/app/ui/button"

// Sample images - replace with actual villa images
const images = [
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  // Add more images...
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
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
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground">
            Take a visual tour of our magical villa
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative mb-6">
          <AspectRatio ratio={16/9}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="object-cover w-full h-full rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(images[currentIndex])}
            />
          </AspectRatio>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 hover:bg-background shadow-md"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 hover:bg-background shadow-md"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer rounded-md overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            >
              <AspectRatio ratio={1}>
                <img
                  src={image}
                  alt={`Gallery thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected gallery image"
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 