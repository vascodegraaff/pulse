import { createClient } from '@supabase/supabase-js'
import { Database } from '../../database.types'
import { env } from '~/env.mjs';

export const supabase = createClient<Database>(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY
)
