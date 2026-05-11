import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Courses from './sections/Courses'
import Results from './sections/Results'
import Gallery from './sections/Gallery'
import Resources from './sections/Resources'
import Schedule from './sections/Schedule'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Results />
        <Gallery />
        <Resources />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
