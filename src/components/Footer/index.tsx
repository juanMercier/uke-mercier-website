import { Facebook, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-accent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full md:flex md:space-x-2 md:w-auto">
          <Link href="/" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              home
            </Link>
            <Link href="/sobre" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              sobre
            </Link>
            <Link href="/aulas" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              aulas
            </Link>
            <Link href="/explorar" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              explorar
            </Link>
            <Link href="/blog" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              blog
            </Link>
            <Link href="/eventos" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              eventos
            </Link>
            <Link href="/contactos" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left">
              contactos
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-accent-hover capitalize transition-colors text-center md:text-left col-span-2 md:col-span-1">
              Política de Privacidade
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/profile.php?id=100084051245000" className="hover:text-accent-hover transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.youtube.com/@UkeMercier" className="hover:text-accent-hover transition-colors">
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} UkeMercier. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer