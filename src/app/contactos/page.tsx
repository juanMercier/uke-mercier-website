"use client";

import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Contactos() {
  return (
    <>
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <Image
          src="/lisboaLandscape.jpg"
          alt="Contact UkeMercier"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Contactos</h1>
      </section>


      <section className="py-12 sm:py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="text-center">
              <a
                className="bg-primary-foreground rounded-full w-48 h-48 flex items-center justify-center mx-auto mb-4"
                href="mailto:carlosjamercier@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-24 h-24 text-white hover:text-secondary" />
              </a>
              <p className="text-secondary font-bold text-xl">carlosjmercier@gmail.com</p>
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
                href="https://www.instagram.com/carlosmercier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-24 h-24 text-white hover:text-secondary" />
              </a>
              <p className="text-secondary font-bold text-xl">@ukemercier</p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
            <div className=''>

            </div>
            <div className="bg-primary-foreground p-8 rounded-lg shadow-md mb-12">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.458703107833!2d-9.153806125595171!3d38.77611755385357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19328c9fc011ad%3A0xe063f6dc5be224e7!2sR.%20Lu%C3%ADs%20Pi%C3%A7arra%206%2C%201750-448%20Lisboa%2C%20Portugal!5e0!3m2!1spt-PT!2spe!4v1727383379999!5m2!1spt-PT!2spe&zoom=30"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Follow Us on Social Media</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-secondary hover:text-secondary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-secondary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-secondary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}






{/* <section className="py-12 sm:py-16 md:py-20">
<div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/2">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" required></textarea>
        </div>
        <button type="submit" className="bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors">Send Message</button>
      </form>
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Informação</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-accent mr-3 mt-1" />
          <div>
            <h3 className="font-bold">Email</h3>
            <p className="text-secondary">info@ukemercier.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-accent mr-3 mt-1" />
          <div>
            <h3 className="font-bold">Phone</h3>
            <p className="text-secondary">+351 123 456 789</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-accent mr-3 mt-1" />
          <div>
            <h3 className="font-bold">Address</h3>
            <p className="text-secondary">123 Ukulele Street, Lisbon, Portugal</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Location</h3>
        <div className="bg-gray-100 p-4 rounded-lg h-64 flex items-center justify-center">
          <p className="text-center text-gray-500">Google Maps Integration Coming Soon!</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section className="py-12 sm:py-16 md:py-20 bg-gray-50">
<div className="container mx-auto px-4 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Follow Us on Social Media</h2>
  <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
    Stay connected with UkeMercier and join our ukulele community on social media platforms.
  </p>
  <div className="flex justify-center space-x-4">
    <a href="#" className="text-accent hover:text-teal-600">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    </a>
    <a href="#" className="text-accent hover:text-teal-600">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    </a>
    <a href="#" className="text-accent hover:text-teal-600">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    </a>
  </div>
</div>
</section> */}


