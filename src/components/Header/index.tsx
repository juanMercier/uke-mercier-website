import React, { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
      setIsDropdownOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      dropdownTimeoutRef.current = window.setTimeout(() => {
        setIsDropdownOpen(false)
      }, 200)
    }
  }

  const toggleDropdown = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <header className="fixed w-full z-20 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex flex-col lg:flex-row lg:gap-x-1 item-start lg:items-end font-bold text-accent">
            <span className='text-4xl'>UkeMercier</span>
            <span className='hidden lg:flex text-3xl'>-</span>
            <span className='text-2xl'>Escola de Ukulele</span>
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} md:relative md:top-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <li><Link onClick={closeMenu} href="/" className="hover:text-accent text-lg capitalize transition-colors">Home</Link></li>
            <li><Link onClick={closeMenu} href="/sobre" className="hover:text-accent text-lg capitalize transition-colors">Sobre</Link></li>
            <li className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                href="/recursos"
                onClick={toggleDropdown}
                className="flex items-center hover:text-accent text-lg capitalize transition-colors"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Recursos
                <ChevronDown size={20} className={`ml-1 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              <ul
                className={`${isDropdownOpen ? 'block' : 'hidden'} md:absolute md:left-0 md:mt-2 md:w-48 md:bg-white md:shadow-lg md:rounded-md md:py-2 space-y-2 md:space-y-0`}
              >
                {isMobile && (
                <li><Link onClick={closeMenu} href="/recursos" className="block px-4 py-2 hover:bg-accent hover:text-white transition-colors">Todos os Recursos</Link></li>
                )}
                <li><Link onClick={closeMenu} href="/recursos/historia-do-ukulele" className="block px-4 py-2 hover:bg-accent hover:text-white transition-colors">História do Ukulele</Link></li>
                <li><Link onClick={closeMenu} href="/recursos/vantagens" className="block px-4 py-2 hover:bg-accent hover:text-white transition-colors">Vantagens de Tocar</Link></li>
                <li><Link onClick={closeMenu} href="/recursos/cifra-reader" className="block px-4 py-2 hover:bg-accent hover:text-white transition-colors">Cifra Reader</Link></li>
                <li><Link onClick={closeMenu} href="/recursos/videos" className="block px-4 py-2 hover:bg-accent hover:text-white transition-colors">Vídeos</Link></li>
              </ul>
            </li>
            <li><Link onClick={closeMenu} href="/blog" className="hover:text-accent text-lg capitalize transition-colors">Blog</Link></li>
            <li><Link onClick={closeMenu} href="/eventos" className="hover:text-accent text-lg capitalize transition-colors">Eventos</Link></li>
            <li><Link onClick={closeMenu} href="/contactos" className={`text-lg ${isMenuOpen ? "hover:text-accent" : "bg-accent p-3 rounded-full text-white hover:bg-accent-hover"} capitalize transition-colors`}>Contactos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header