import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hjnonobmqlqnsekinqey.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqbm9ub2JtcWxxbnNla2lucWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjc2MjMsImV4cCI6MjA2NDYwMzYyM30.gmXFTIfGcUg_xhy9ohkIFcbuTtHW-qWaggvssk-JfKY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
