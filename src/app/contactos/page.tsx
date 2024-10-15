"use client";

import { Mail, Phone, Facebook } from 'lucide-react'
import { FaFacebook } from 'react-icons/fa';
import UpperSection from '@/components/UpperSection';

export default function Contactos() {
  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection imgLocation='/lisboaLandscape.jpg' title='Contactos' />

      <section className="py-12 sm:py-16 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="text-center">
              <a
                className="bg-primary-foreground rounded-full w-48 h-48 flex items-center justify-center mx-auto mb-4"
                href="mailto:ukeinparque@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-24 h-24 text-white hover:text-secondary" />
              </a>
              <p className="text-secondary font-bold text-xl">ukeinparque@gmail.com</p>
            </div>
            <div className="text-center">
              <a
                className="bg-primary-foreground rounded-full w-48 h-48 flex items-center justify-center mx-auto mb-4"
                href="https://wa.me/351964043011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-24 h-24 text-white hover:text-secondary" />
              </a>
              <p className="text-secondary font-bold text-xl">(+351) 964 043 011</p>
            </div>
            <div className="text-center">
              <a
                className="bg-primary-foreground rounded-full w-48 h-48 flex items-center justify-center mx-auto mb-4"
                href="https://web.facebook.com/profile.php?id=100084051245000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-24 h-24 text-white hover:text-secondary" />
              </a>
              <p className="text-secondary font-bold text-xl">@UkeInParque</p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
            <div className=''>

            </div>
            <div className="bg-primary-foreground p-8 rounded-xl shadow-md mb-12">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md" />
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 rounded-md" />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded-md"></textarea>
                <button type="submit" className="w-full bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
            <div className="bg-gray-200 p-4 rounded-lg h-96 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5115468391823!2d-9.145204499999998!3d38.72902200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339e043d79b3%3A0x210a53b86930acbc!2sR.%20Andrade%20Corvo%209%2C%201050-007%20Lisboa%2C%20Portugal!5e0!3m2!1spt-PT!2spe!4v1727890217750!5m2!1spt-PT!2spe&zoom=30"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}



