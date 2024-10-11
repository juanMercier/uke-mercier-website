import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'


type EventCardProps = {
    id: number,
    title: string,
    date: string,
    from: string,
    to: string,
    location: string,
    description: string,
}

const EventCard = ({
    id,
    title,
    date,
    from,
    to,
    location,
    description,
}: EventCardProps) => {
    return (
        <div className="bg-primary-foreground p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl">
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
            <Link href={`/eventos/${id}`} className="text-tertiary hover:text-tertiary-hover font-semibold">
                Ler mais
            </Link>
        </div>
    )
}

export default EventCard