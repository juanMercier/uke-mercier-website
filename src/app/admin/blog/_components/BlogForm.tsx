'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import type { BlogPost } from '@/lib/types'
import { createBlogPost, updateBlogPost } from '../../actions'

type Props = { post?: BlogPost }

export default function BlogForm({ post }: Props) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState<string>(post?.image ?? '')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = post
      ? await updateBlogPost(post.id, formData)
      : await createBlogPost(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <input type="hidden" name="existingImage" value={post?.image ?? ''} />

      <Field label="Título" name="title" defaultValue={post?.title} required />

      <div className="grid grid-cols-2 gap-4">
        <Field label="Data" name="date" type="date" defaultValue={post?.date} required />
        <Field label="Autor" name="author" defaultValue={post?.author} required />
      </div>

      <Field label="Resumo" name="resume" as="textarea" rows={3} defaultValue={post?.resume} required />
      <Field label="Conteúdo (HTML)" name="content" as="textarea" rows={10} defaultValue={post?.content} required />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Imagem</label>
        {preview && (
          <div className="relative w-48 h-32 rounded-lg overflow-hidden mb-2 border border-gray-200">
            <Image
              src={preview}
              alt="preview"
              fill
              className="object-cover"
              unoptimized={preview.startsWith('blob:')}
            />
          </div>
        )}
        <input
          ref={fileRef}
          type="file"
          name="image"
          accept="image/*"
          className="text-sm text-gray-600"
          onChange={e => {
            const f = e.target.files?.[0]
            if (f) setPreview(URL.createObjectURL(f))
          }}
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'A guardar...' : post ? 'Guardar alterações' : 'Criar post'}
      </button>
    </form>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  as?: 'input' | 'textarea'
  rows?: number
  defaultValue?: string
  required?: boolean
}

function Field({ label, name, type = 'text', as = 'input', rows, defaultValue, required }: FieldProps) {
  const cls = "w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {as === 'textarea' ? (
        <textarea name={name} rows={rows ?? 4} defaultValue={defaultValue} required={required} className={cls} />
      ) : (
        <input type={type} name={name} defaultValue={defaultValue} required={required} className={cls} />
      )}
    </div>
  )
}
