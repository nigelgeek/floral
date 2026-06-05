import { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import ProductCard from '../components/ProductCard'
import OccasionSection from '../components/OccasionSection'
import ValuesStrip from '../components/ValuesStrip'
import AboutSection from '../components/AboutSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import products from '../data/products'

const occasionOptions = [
  { key: 'Weddings', title: 'Weddings', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
  { key: 'Birthdays', title: 'Birthdays', image: 'https://images.unsplash.com/photo-1526227605189-0a45a67ff011?auto=format&fit=crop&w=900&q=80' },
  { key: 'Sympathy', title: 'Sympathy', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
  { key: 'Corporate', title: 'Corporate', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80' },
  { key: 'Custom', title: 'Custom', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80' },
]

const faqs = [
  {
    question: 'How soon can I receive a bouquet?',
    answer: 'Same-day delivery is available for orders placed before 2PM in Greater Accra. We also offer next-day scheduling for premium arrangements.',
  },
  {
    question: 'Can I customize an order for an event?',
    answer: 'Yes. Our custom order form helps you share your occasion, inspiration, and budget so we can craft a bespoke arrangement.',
  },
  {
    question: 'What if my delivery address is outside the service zone?',
    answer: 'If your address falls outside Greater Accra, our team will suggest the closest available delivery option or the nearest pickup location.',
  },
  {
    question: 'Do you handle corporate or wedding installations?',
    answer: 'We do. Fleurá partners with brands and event planners to create editorial floral installations and seasonal environment styling.',
  },
]

export default function Home() {
  const [selectedOccasion, setSelectedOccasion] = useState(occasionOptions[0])

  return (
    <div className="min-h-screen bg-bg text-cream">
      <Nav />
      <main>
        <Hero />
        <Marquee />

        <section id="catalog" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-blush/80">— This Season</p>
            <h2 className="text-4xl font-display tracking-tight sm:text-5xl">Featured <span className="italic text-blush">/ Arrangements</span></h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <OccasionSection
          options={occasionOptions}
          selected={selectedOccasion}
          onSelect={setSelectedOccasion}
        />

        <ValuesStrip />
        <AboutSection />
        <FAQ items={faqs} />
      </main>
      <Footer />
    </div>
  )
}
