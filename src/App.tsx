import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Skills } from "@/sections/Skills"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
