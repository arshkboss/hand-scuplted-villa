'use client'

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Car, Train, Plane, Bus, Coffee, Mountain, Trees, Camera } from 'lucide-react'
import { Button } from "@/app/ui/button"

const attractions = [
  { 
    name: "Rajaji National Park",
    distance: "40 min drive",
    description: "Famous for wild elephants and tigers",
    type: "Nature"
  },
  { 
    name: "Crystal Lake",
    distance: "15 min walk",
    description: "Perfect for swimming and picnics",
    type: "Recreation"
  },
  { 
    name: "Artisan Village",
    distance: "10 min drive",
    description: "Local crafts and cultural experiences",
    type: "Culture"
  },
  { 
    name: "Mountain Viewpoint",
    distance: "20 min drive",
    description: "Panoramic Himalayan views",
    type: "Nature"
  },
]

const transportation = [
  {
    icon: Plane,
    name: "Jolly Grant Airport",
    distance: "45 km",
    duration: "1 hour drive"
  },
  {
    icon: Train,
    name: "Dehradun Railway Station",
    distance: "35 km",
    duration: "45 min drive"
  },
  {
    icon: Bus,
    name: "Rishikesh Bus Terminal",
    distance: "25 km",
    duration: "30 min drive"
  }
]

const activities = [
  {
    icon: Mountain,
    title: "Hiking Trails",
    description: "Multiple trails starting from the property"
  },
  {
    icon: Coffee,
    title: "Local Cafes",
    description: "Authentic mountain cafes nearby"
  },
  {
    icon: Trees,
    title: "Forest Walks",
    description: "Guided nature walks available"
  },
  {
    icon: Camera,
    title: "Photography Spots",
    description: "Perfect sunrise/sunset locations"
  }
]

export default function Location() {
  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Location</h2>
          <p className="text-lg text-muted-foreground">
            Perfectly situated in the serene Himalayan foothills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.2642089567721!2d78.38975456051467!3d30.118563368423626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909116153f3b67f%3A0xaca3a406df7a3850!2sTiny%20Farm%20Fort!5e1!3m2!1sen!2sin!4v1737923206669!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-4">Getting Here</h3>
              <div className="space-y-4">
                {transportation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.distance} • {item.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address and Contact */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Tiny Farm Fort<br />
                      Near Rajaji National Park<br />
                      Rishikesh, Uttarakhand<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Check-in/Check-out</h3>
                    <p className="text-muted-foreground">
                      Check-in: 3:00 PM - 8:00 PM<br />
                      Check-out: 11:00 AM<br />
                      Early check-in available upon request
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Contact</h3>
                    <p className="text-muted-foreground">
                      Phone: +1 (234) 567-8900<br />
                      WhatsApp: +1 (234) 567-8901<br />
                      Email: stay@tinyfarmfort.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Activities */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-4">Activities Nearby</h3>
              <div className="grid grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-secondary/30 rounded-lg"
                  >
                    <activity.icon className="w-6 h-6 text-primary mb-2" />
                    <div className="font-medium">{activity.title}</div>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Attractions */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-4">Nearby Attractions</h3>
              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-start border-b border-border/50 pb-4"
                  >
                    <div>
                      <div className="font-medium">{attraction.name}</div>
                      <p className="text-sm text-muted-foreground">
                        {attraction.description}
                      </p>
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {attraction.distance}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button className="w-full" size="lg">
              Get Directions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 