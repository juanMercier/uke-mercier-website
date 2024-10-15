import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

type EventCardProps = {
    id: number,
    title: string,
    date: string,
    from: string,
    to: string,
    location: string,
    description: string,
    imageUrl: string,
}

const EventCard = ({
    id,
    title,
    date,
    from,
    to,
    location,
    description,
    imageUrl,
}: EventCardProps) => {
    return (
        <Link href={`/eventos/${id}`} className="bg-primary-foreground p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 flex">
            <div className="flex-1 mr-4">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-tertiary" />
                    <span className="text-secondary text-sm">{date}</span>
                </div>
                <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 mr-2 text-tertiary" />
                    <span className="text-secondary text-sm">{from} - {to}</span>
                </div>
                <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-tertiary" />
                    <span className="text-secondary text-sm">{location}</span>
                </div>
                <p className="text-secondary mb-4 text-sm sm:text-base">{description}</p>
            </div>
            <div className="w-24 sm:w-32 h-40 sm:h-52 flex-shrink-0 relative rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
        </Link>
    )
}

export default EventCard