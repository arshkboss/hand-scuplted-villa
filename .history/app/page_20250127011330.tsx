import Hero from '@/app/components/hero'
import About from '@/app/components/about'
import Amenities from '@/app/components/amenities'
import Location from '@/app/components/location'
import Gallery from '@/app/components/gallery'
import Booking from '@/app/components/booking'
import Reviews from '@/app/components/reviews'
import Contact from '@/app/components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Amenities />
      <Location />
      <Gallery />
      <Booking />
      <Reviews />
      <Contact />
    </main>
  )
} 