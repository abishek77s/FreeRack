/*
  # Create resources table

  1. New Tables
    - `resources`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text, not null)
      - `url` (text, not null)
      - `type` (text, not null)
      - `categories` (text array, not null)
      - `author` (text, nullable)
      - `stars` (integer, nullable)
      - `dateAdded` (text, not null)
      - `approved` (boolean, default false)
  2. Security
    - Enable RLS on `resources` table
    - Add policy for authenticated users to insert their own data
    - Add policy for anyone to read approved resources
*/

CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  type text NOT NULL,
  categories text[] NOT NULL,
  author text,
  stars integer,
  "dateAdded" text NOT NULL,
  approved boolean DEFAULT false
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved resources
CREATE POLICY "Anyone can read approved resources"
  ON resources
  FOR SELECT
  USING (approved = true);

-- Allow anyone to insert resources (they'll need approval)
CREATE POLICY "Anyone can insert resources"
  ON resources
  FOR INSERT
  WITH CHECK (true);