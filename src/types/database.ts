
export interface CryptoPromotion {
  id: string;
  exchange: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  link: string;
  created_at: string;
}

export interface MarketInsightEntry {
  id: string;
  title: string;
  content: string;
  source: string;
  sentiment_score: number;
  impact_level: 'low' | 'medium' | 'high';
  created_at: string;
  tags: string[];
}

export interface TradeSignal {
  id: string;
  asset: string;
  entry_price: number;
  stop_loss: number;
  take_profit: number;
  direction: 'long' | 'short';
  timeframe: string;
  confidence_score: number;
  analysis: string;
  created_at: string;
}

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  api_endpoint?: string;
  category: 'crypto' | 'finance' | 'general' | 'tech';
  is_active: boolean;
  last_fetched: string;
}
