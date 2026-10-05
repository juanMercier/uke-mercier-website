'use server'

import { createServiceClient } from '@/lib/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

// ─── Auth ──────────────────────────────────────────────────────────────────

export async function login(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const password = formData.get('password') as string

  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: 'Palavra-passe incorreta.' }
  }

  const cookieStore = await cookies()
  cookieStore.set('admin_session', process.env.ADMIN_SESSION_TOKEN!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  redirect('/admin')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  redirect('/admin/login')
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function inputDateToDb(inputDate: string): string {
  // YYYY-MM-DD → DD-MM-YYYY
  const [year, month, day] = inputDate.split('-')
  return `${day}-${month}-${year}`
}

async function uploadImage(file: File, bucket: string): Promise<string> {
  const supabase = createServiceClient()
  const ext = file.name.split('.').pop()
  const filename = `${Date.now()}.${ext}`
  const buffer = Buffer.from(await file.arrayBuffer())

  const { error } = await supabase.storage.from(bucket).upload(filename, buffer, { contentType: file.type })
  if (error) throw new Error(error.message)

  const { data } = supabase.storage.from(bucket).getPublicUrl(filename)
  return data.publicUrl
}

// ─── Events ────────────────────────────────────────────────────────────────

export async function createEvent(formData: FormData): Promise<{ error: string } | void> {
  const supabase = createServiceClient()

  let image = formData.get('existingImage') as string
  const file = formData.get('image') as File
  if (file && file.size > 0) {
    try { image = await uploadImage(file, 'eventos') }
    catch (e: any) { return { error: `Erro ao fazer upload da imagem: ${e.message}` } }
  }

  const { error } = await supabase.from('events').insert({
    title:       formData.get('title'),
    date:        inputDateToDb(formData.get('date') as string),
    from_time:   formData.get('from_time'),
    to_time:     formData.get('to_time'),
    location:    formData.get('location'),
    description: formData.get('description'),
    content:     formData.get('content'),
    image,
    past:        formData.get('past') === 'on',
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/eventos')
  revalidatePath('/')
  revalidatePath('/eventos')
  redirect('/admin/eventos')
}

export async function updateEvent(id: number, formData: FormData): Promise<{ error: string } | void> {
  const supabase = createServiceClient()

  let image = formData.get('existingImage') as string
  const file = formData.get('image') as File
  if (file && file.size > 0) {
    try { image = await uploadImage(file, 'eventos') }
    catch (e: any) { return { error: `Erro ao fazer upload da imagem: ${e.message}` } }
  }

  const { error } = await supabase.from('events').update({
    title:       formData.get('title'),
    date:        inputDateToDb(formData.get('date') as string),
    from_time:   formData.get('from_time'),
    to_time:     formData.get('to_time'),
    location:    formData.get('location'),
    description: formData.get('description'),
    content:     formData.get('content'),
    image,
    past:        formData.get('past') === 'on',
  }).eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/eventos')
  revalidatePath(`/admin/eventos/${id}`)
  revalidatePath('/')
  revalidatePath('/eventos')
  revalidatePath(`/eventos/${id}`)
  redirect('/admin/eventos')
}

export async function deleteEvent(id: number): Promise<void> {
  const supabase = createServiceClient()
  await supabase.from('events').delete().eq('id', id)
  revalidatePath('/admin/eventos')
  revalidatePath('/')
  revalidatePath('/eventos')
  redirect('/admin/eventos')
}

// ─── Blog posts ────────────────────────────────────────────────────────────

export async function createBlogPost(formData: FormData): Promise<{ error: string } | void> {
  const supabase = createServiceClient()

  let image = formData.get('existingImage') as string
  const file = formData.get('image') as File
  if (file && file.size > 0) {
    try { image = await uploadImage(file, 'blog') }
    catch (e: any) { return { error: `Erro ao fazer upload da imagem: ${e.message}` } }
  }

  const { error } = await supabase.from('blog_posts').insert({
    title:   formData.get('title'),
    date:    formData.get('date'),
    image,
    author:  formData.get('author'),
    resume:  formData.get('resume'),
    content: formData.get('content'),
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/blog')
  revalidatePath('/')
  revalidatePath('/blog')
  redirect('/admin/blog')
}

export async function updateBlogPost(id: number, formData: FormData): Promise<{ error: string } | void> {
  const supabase = createServiceClient()

  let image = formData.get('existingImage') as string
  const file = formData.get('image') as File
  if (file && file.size > 0) {
    try { image = await uploadImage(file, 'blog') }
    catch (e: any) { return { error: `Erro ao fazer upload da imagem: ${e.message}` } }
  }

  const { error } = await supabase.from('blog_posts').update({
    title:   formData.get('title'),
    date:    formData.get('date'),
    image,
    author:  formData.get('author'),
    resume:  formData.get('resume'),
    content: formData.get('content'),
  }).eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/blog')
  revalidatePath(`/admin/blog/${id}`)
  revalidatePath('/')
  revalidatePath('/blog')
  revalidatePath(`/blog/${id}`)
  redirect('/admin/blog')
}

export async function deleteBlogPost(id: number): Promise<void> {
  const supabase = createServiceClient()
  await supabase.from('blog_posts').delete().eq('id', id)
  revalidatePath('/admin/blog')
  revalidatePath('/')
  revalidatePath('/blog')
  redirect('/admin/blog')
}

// ─── Cifras ────────────────────────────────────────────────────────────────

export async function uploadCifra(formData: FormData): Promise<{ error: string } | void> {
  const supabase = createServiceClient()

  const file = formData.get('file') as File
  if (!file || file.size === 0) return { error: 'Selecione um ficheiro PDF.' }
  if (!file.name.toLowerCase().endsWith('.pdf')) return { error: 'O ficheiro tem de ser um PDF.' }

  const buffer = Buffer.from(await file.arrayBuffer())
  const { error } = await supabase.storage.from('cifras').upload(file.name, buffer, {
    contentType: 'application/pdf',
    upsert: true,
  })
  if (error) return { error: error.message }

  revalidatePath('/admin/cifras')
  revalidatePath('/explorar/leitor-de-cifras')
  redirect('/admin/cifras')
}

export async function deleteCifra(filename: string): Promise<void> {
  const supabase = createServiceClient()
  await supabase.storage.from('cifras').remove([filename])
  revalidatePath('/admin/cifras')
  revalidatePath('/explorar/leitor-de-cifras')
  redirect('/admin/cifras')
}
