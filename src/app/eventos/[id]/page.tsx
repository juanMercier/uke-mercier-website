"use client";

import Image from 'next/image'
import { MapPin, Clock, CheckCircle, X, ArrowLeft } from 'lucide-react'
import events from '@/data/events.json'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'


type Props = {
  params: { id: string }
}


export default function EventPost({ params }: Props) {
  const [state, handleSubmit] = useForm("movqqnlv")
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false);


  const { id } = params;

  const post = events.find(event => event.id === Number(id));


  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('eventName', post!.title)
    formData.set('consentimento', consentChecked.toString());
    await handleSubmit(formData)
  }

  useEffect(() => {
    if (state.succeeded) {
      closeModal();

      setIsFadingOut(false);
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 4500);

      return () => {
        clearTimeout(fadeOutTimer);
      };
    }
  }, [state.succeeded]);

  if (!post) {
    return (
      <div className='pt-24 md:pt-0'>
        <div className="container mx-auto px-4 mt-20 py-12">
          <h1 className="text-3xl font-bold text-center">Post não encontrado</h1>
        </div>
      </div>
    )
  }
  return (
    <div className='pt-24 md:pt-16'>
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-8">
          <Link
            href="/eventos"
            className="absolute top-28 lg:top-26 flex items-center text-tertiary hover:text-tertiary-dark text-xl transition-colors mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span>Voltar aos Eventos</span>
          </Link>
          <div className="md:w-1/3">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={600}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>

            {/* Flex container for location, time, and button */}
            <div className="flex items-center justify-between text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="text-tertiary w-5 h-5 mr-2" />
                <span>{post.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-tertiary w-5 h-5 mr-2" />
                <span>{post.date} | De: {post.from} até {post.to}</span>
              </div>
              {
                !post.past &&
                <button
                  onClick={() => openModal()}
                  className=" bg-tertiary text-primary font-bold w-44 py-2 px-4 rounded-full hover:bg-tertiary-hover transition-colors duration-300"
                >
                  Inscrever-se
                </button>
              }
            </div>

            <div className="text-lg text-secondary mb-8 max-w-none text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />

          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-secondary bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-primary rounded-2xl p-8 w-full max-w-md relative animate-fade-in-scale">
              <h3 className="text-2xl font-bold text-secondary mb-4">Inscrever-se para o {post.title}</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary"
                    placeholder="Seu nome"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary"
                    placeholder="Seu email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">Telemóvel</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary"
                    placeholder="Número de telemóvel"
                    required
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-secondary">
                    Dou o meu consentimento para o processamento dos meus dados pessoais de acordo com a <Link href="/politica-de-privacidade" className='text-tertiary underline'>Política de privacidade</Link>.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting || !consentChecked}
                  className="w-full bg-tertiary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary-hover transition-colors duration-300 disabled:opacity-50"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar pedido'}
                </button>
              </form>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-secondary hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary rounded-full p-1"
                aria-label="Fechar"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}


        {state.succeeded && (
          <div className={`fixed bottom-4 right-4 bg-tertiary text-primary px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
            <CheckCircle className="h-6 w-6" />
            <span className="font-bold">Obrigado por se inscrever! Entraremos em contato em breve.</span>
          </div>
        )}
      </div>
    </div>
  )
}
