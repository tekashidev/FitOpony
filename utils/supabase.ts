import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gzndoigrapcgepytpzar.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6bmRvaWdyYXBjZ2VweXRwemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5Mzk4NzEsImV4cCI6MjA0NDUxNTg3MX0.hxVuXLz0ycvtrHREmiR4vwELgsg53r-I-JZoFVSKYes';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
