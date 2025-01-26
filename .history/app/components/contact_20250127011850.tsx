'use client'

import { motion } from "framer-motion"
import { Button } from "@/app/ui/button"
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Contact() {
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
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with any questions about your stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border bg-background h-32"
                  placeholder="Your message"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: info@fairytalevilla.com</p>
                <p>Phone: +1 (234) 567-8900</p>
                <p>Address: 123 Fairytale Road, Enchanted Forest</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Check-in: 3:00 PM - 8:00 PM</p>
                <p>Check-out: By 11:00 AM</p>
                <p>Office Hours: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 