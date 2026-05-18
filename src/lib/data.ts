import { createClient } from './supabase'
import type { Event, BlogPost } from './types'

type DbEvent = Omit<Event, 'from' | 'to'> & { from_time: string; to_time: string }

function mapEvent(e: DbEvent): Event {
  return { ...e, from: e.from_time, to: e.to_time }
}

export async function getEvents(): Promise<Event[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('id', { ascending: true })
  if (error) throw error
  return (data as DbEvent[]).map(mapEvent)
}

export async function getEventById(id: number): Promise<Event | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single()
  if (error) return null
  return mapEvent(data as DbEvent)
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('id', { ascending: true })
  if (error) throw error
  return data as BlogPost[]
}

export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()
  if (error) return null
  return data as BlogPost
}
