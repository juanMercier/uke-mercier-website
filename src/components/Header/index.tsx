import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-20 bg-white bg-opacity-90 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center py-4">
        <Link href="/" className="text-4xl font-bold text-accent">UkeMercier</Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} md:relative md:top-0 md:bg-transparent md:p-0 md:shadow-none`}>
          <li><Link href="/" className="hover:text-accent text-lg capitalize transition-colors">Home</Link></li>
          <li><Link href="/sobre" className="hover:text-accent text-lg capitalize transition-colors">sobre</Link></li>
          <li><Link href="/recursos" className="hover:text-accent text-lg capitalize transition-colors">recursos</Link></li>
          <li><Link href="/eventos" className="hover:text-accent text-lg capitalize transition-colors">eventos</Link></li>
          <li><Link href="/contactos" className={`text-lg ${isMenuOpen ? " hover:text-accent" : "bg-accent p-3 rounded-full text-white hover:bg-accent-hover"} capitalize transition-colors`}>contactos</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header