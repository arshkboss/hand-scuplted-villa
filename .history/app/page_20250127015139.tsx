import Hero from '@/app/components/hero'
import About from '@/app/components/about'
import Amenities from '@/app/components/amenities'
import Location from '@/app/components/location'
import Gallery from '@/app/components/gallery'
import Booking from '@/app/components/booking'
import Reviews from '@/app/components/reviews'
import Contact from '@/app/components/contact'
import Host from '@/app/components/host'
import Highlights from '@/app/components/highlights'

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <section id="about"><About /></section>
      <section id="host"><Host /></section>
      <section id="amenities"><Amenities /></section>
      <section id="location"><Location /></section>
      <section id="gallery"><Gallery /></section>
      <section id="booking"><Booking /></section>
      <section id="reviews"><Reviews /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
} 