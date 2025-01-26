'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { AspectRatio } from "@/app/ui/aspect-ratio"
import { Button } from "@/app/ui/button"
import { ChevronLeft, ChevronRight, Leaf, Heart, Star, Coffee, Trees, Utensils } from 'lucide-react'
import { motion } from "framer-motion"

// Enhanced image array with descriptions
const images = [
  {
    src: '/img/8.jpg',
    title: 'Handcrafted Architecture',
    description: 'Every curve and corner tells a story'
  },
  {
    src: '/img/10.jpg',
    title: 'Natural Living Spaces',
    description: 'Seamlessly blending with nature'
  },
  {
    src: '/img/11.jpg',
    title: 'Sustainable Design',
    description: 'Built with eco-friendly materials'
  },
  {
    src: '/img/12.jpg',
    title: 'Mountain Views',
    description: 'Panoramic Himalayan vistas'
  }
]

// Features section data
const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Built using natural materials and sustainable practices'
  },
  {
    icon: Heart,
    title: 'Handcrafted',
    description: 'Every detail lovingly created by local artisans'
  },
  {
    icon: Star,
    title: 'Unique Experience',
    description: 'One-of-a-kind stay in a fairytale setting'
  }
]

// Activities section data
const activities = [
  {
    icon: Coffee,
    title: 'Farm Cafe',
    description: 'Enjoy organic meals from our garden',
    timing: '7 AM - 8 PM'
  },
  {
    icon: Trees,
    title: 'Nature Walks',
    description: 'Guided tours through our forest trails',
    timing: 'Twice daily'
  },
  {
    icon: Utensils,
    title: 'Cooking Classes',
    description: 'Learn traditional recipes',
    timing: 'On request'
  }
]

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              A Handcrafted Haven in Nature
            </h2>
            <p className="text-lg text-muted-foreground">
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
            <div className="flex gap-4">
              <Button variant="default">Book Your Stay</Button>
              <Button variant="outline">Take a Tour</Button>
            </div>
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
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="text-white font-semibold">{image.title}</h3>
                        <p className="text-white/80 text-sm">{image.description}</p>
                      </div>
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
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

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6">On-site Activities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-secondary/30 rounded-lg"
              >
                <activity.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{activity.title}</h4>
                <p className="text-muted-foreground mb-2">{activity.description}</p>
                <p className="text-sm text-primary">{activity.timing}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 