'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from 'lucide-react'

export default function Booking() {
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
          <h2 className="text-4xl font-bold mb-4">Book Your Stay</h2>
          <p className="text-lg text-muted-foreground">
            Reserve your magical escape today
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Check-in Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Check-out Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Adults</label>
                <select className="w-full px-4 py-2 rounded-lg border bg-background">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Children</label>
                <select className="w-full px-4 py-2 rounded-lg border bg-background">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Check Availability
            </Button>
          </form>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-medium mb-4">Booking Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Minimum stay: 2 nights</li>
              <li>• 50% deposit required to confirm booking</li>
              <li>• Free cancellation up to 7 days before check-in</li>
              <li>• Check-in: 3:00 PM, Check-out: 11:00 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 