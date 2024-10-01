import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-accent text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <Link href="/sobre/ukemercier" className="hover:text-accent-hover capitalize transition-colors">sobre</Link>
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
  )
}

export default Footer