
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const fetchLatestPromotions = async () => {
  const { data, error } = await supabase
    .from('crypto_promotions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) throw error;
  return data;
};

export const fetchMarketInsights = async () => {
  const { data, error } = await supabase
    .from('market_insights')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) throw error;
  return data;
};

export const fetchTradeSignals = async () => {
  const { data, error } = await supabase
    .from('trade_signals')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) throw error;
  return data;
};
