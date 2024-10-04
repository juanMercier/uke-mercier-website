import Image from 'next/image'
import { MapPin, Clock } from 'lucide-react'
import events from '@/data/events.json'
import Link from 'next/link'


type Props = {
  params: { id: string}
}


export default function EventPost({params}: Props) {

  const {id } = params;

  const post = events.find(event => event.id === Number(id));


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
    <div className='pt-24 md:pt-0'>
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-8">
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
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{post.location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-6">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.date} | De: {post.from} até {post.to}</span>
            </div>
            <p className="text-lg text-gray-700 mb-8">{post.description}</p>
            <Link href='/contactos' className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-full transition-colors">
              Inscrever-se no Evento
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}