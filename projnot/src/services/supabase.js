import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://ulggxbyomxlkqupfmtwo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsZ2d4YnlvbXhsa3F1cGZtdHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0NDU1ODcsImV4cCI6MjExMTAyMTU4N30.dGbvQzcCoZAL3pkHPSRjDWNKe9wldjyz_DjxqCs_5Ag';
export const supabase = createClient(supabaseUrl, supabaseKey);