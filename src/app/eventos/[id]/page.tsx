import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/data'
import EventDetail from './_components/EventDetail'

type Props = { params: Promise<{ id: string }> }

export default async function EventPost({ params }: Props) {
  const { id } = await params
  const event = await getEventById(Number(id))

  if (!event) notFound()

  return (
    <div className="pt-24 md:pt-16">
      <EventDetail event={event} />
    </div>
  )
}
