import { createClient } from './supabase'
import type { Event, BlogPost, Cifra } from './types'

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
    .order('date', { ascending: false })
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

function cifraDisplayName(filename: string): string {
  return filename.replace(/^\d+\s*/, '').split('.').slice(0, -1).join('.')
}

export async function getCifras(): Promise<Cifra[]> {
  const supabase = createClient()
  const { data, error } = await supabase.storage.from('cifras').list()
  if (error) throw error

  const cifras = (data ?? [])
    .filter((f) => f.name.toLowerCase().endsWith('.pdf'))
    .map((f) => ({
      filename: f.name,
      name: cifraDisplayName(f.name),
      url: supabase.storage.from('cifras').getPublicUrl(f.name).data.publicUrl,
    }))

  return cifras.sort((a, b) => a.name.localeCompare(b.name))
}
