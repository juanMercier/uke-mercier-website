/**
 * One-time migration: insert existing JSON data into Supabase.
 *
 * Usage:
 *   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co \
 *   SUPABASE_SERVICE_ROLE_KEY=your_key \
 *   node scripts/migrate-data.mjs
 */
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

const events = JSON.parse(
  readFileSync(join(__dirname, '../src/data/events.json'), 'utf8')
)

const blogPosts = JSON.parse(
  readFileSync(join(__dirname, '../src/data/blogPosts.json'), 'utf8')
)

async function migrateEvents() {
  const rows = events.map(({ id, title, date, from, to, location, description, content, image, past }) => ({
    id,
    title,
    date,
    from_time: from,
    to_time: to,
    location,
    description,
    content,
    image,
    past,
  }))

  const { error } = await supabase.from('events').upsert(rows, { onConflict: 'id' })
  if (error) { console.error('Events error:', error.message); process.exit(1) }
  console.log(`✓ Migrated ${rows.length} events`)
}

async function migrateBlogPosts() {
  const rows = blogPosts.map(({ id, title, date, image, author, resume, content }) => ({
    id,
    title,
    date,
    image,
    author,
    resume,
    content,
  }))

  const { error } = await supabase.from('blog_posts').upsert(rows, { onConflict: 'id' })
  if (error) { console.error('Blog error:', error.message); process.exit(1) }
  console.log(`✓ Migrated ${rows.length} blog posts`)
}

await migrateEvents()
await migrateBlogPosts()
console.log('Migration complete.')
