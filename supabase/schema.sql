-- Run this in your Supabase SQL editor (Dashboard → SQL Editor)

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id         SERIAL PRIMARY KEY,
  title      TEXT NOT NULL,
  date       TEXT NOT NULL,       -- DD-MM-YYYY
  from_time  TEXT NOT NULL,       -- HH:MM
  to_time    TEXT NOT NULL,       -- HH:MM
  location   TEXT NOT NULL,
  description TEXT NOT NULL,
  content    TEXT NOT NULL,
  image      TEXT NOT NULL DEFAULT '',
  past       BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id         SERIAL PRIMARY KEY,
  title      TEXT NOT NULL,
  date       TEXT NOT NULL,       -- YYYY-MM-DD
  image      TEXT NOT NULL DEFAULT '',
  author     TEXT NOT NULL,
  resume     TEXT NOT NULL,
  content    TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (public reads, no writes without service role)
ALTER TABLE events      ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts  ENABLE ROW LEVEL SECURITY;

-- Public can read all rows
CREATE POLICY "public read events"     ON events     FOR SELECT USING (true);
CREATE POLICY "public read blog_posts" ON blog_posts FOR SELECT USING (true);

-- Storage buckets (run in Dashboard → Storage or via API)
-- Create three public buckets: eventos, blog, cifras
-- In Dashboard: Storage → New bucket → name, toggle Public ON
