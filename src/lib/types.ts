export type Event = {
  id: number
  title: string
  date: string       // DD-MM-YYYY
  from: string       // HH:MM
  to: string         // HH:MM
  location: string
  description: string
  content: string
  image: string
  past: boolean
}

export type BlogPost = {
  id: number
  title: string
  date: string       // YYYY-MM-DD
  image: string
  author: string
  resume: string
  content: string
}
