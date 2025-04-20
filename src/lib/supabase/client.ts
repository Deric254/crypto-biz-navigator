
import { createClient } from '@supabase/supabase-js';
import { CryptoPromotion, MarketInsightEntry, TradeSignal, NewsSource } from '../../types/database';

// Type definition for our Database structure
export type Database = {
  public: {
    Tables: {
      crypto_promotions: {
        Row: CryptoPromotion;
        Insert: Omit<CryptoPromotion, 'id' | 'created_at'>;
        Update: Partial<Omit<CryptoPromotion, 'id' | 'created_at'>>;
      };
      market_insights: {
        Row: MarketInsightEntry;
        Insert: Omit<MarketInsightEntry, 'id' | 'created_at'>;
        Update: Partial<Omit<MarketInsightEntry, 'id' | 'created_at'>>;
      };
      trade_signals: {
        Row: TradeSignal;
        Insert: Omit<TradeSignal, 'id' | 'created_at'>;
        Update: Partial<Omit<TradeSignal, 'id' | 'created_at'>>;
      };
      news_sources: {
        Row: NewsSource;
        Insert: Omit<NewsSource, 'id' | 'created_at' | 'last_fetched'>;
        Update: Partial<Omit<NewsSource, 'id' | 'created_at'>>;
      };
    };
  };
};

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

export const fetchNewsSources = async () => {
  const { data, error } = await supabase
    .from('news_sources')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return data;
};
