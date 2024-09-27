"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
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
              <li><Link href="/" className="hover:text-accent text-xl capitalize transition-colors">Home</Link></li>
              <li><Link href="/sobre" className="hover:text-accent text-xl capitalize transition-colors">sobre</Link></li>
              <li><Link href="/recursos" className="hover:text-accent text-xl capitalize transition-colors">recursos</Link></li>
              <li><Link href="/eventos" className="hover:text-accent text-xl capitalize transition-colors">eventos</Link></li>
              <li><Link href="/contactos" className={`text-2xl ${isMenuOpen ? "text-xl hover:text-accent" : "bg-accent p-3 rounded-full text-white hover:bg-accent-hover"} capitalize transition-colors`}>contactos</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-accent text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <Link href="/sobre" className="hover:text-accent-hover capitalize transition-colors">sobre</Link>
              <Link href="/recursos" className="hover:text-accent-hover capitalize transition-colors">recursos</Link>
              <Link href="/eventos" className="hover:text-accent-hover capitalize transition-colors">eventos</Link>
              <Link href="/contactos" className="hover:text-accent-hover capitalize transition-colors">contactos</Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-hover transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent-hover transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-accent-hover transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 UkeMercier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}