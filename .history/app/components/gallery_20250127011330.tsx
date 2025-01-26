'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { X } from 'lucide-react'

// Sample images - replace with actual villa images
const images = [
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
  '/gallery-4.jpg',
  '/gallery-5.jpg',
  '/gallery-6.jpg',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <AspectRatio ratio={4/3}>
                <div className="relative h-full">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  )
} 