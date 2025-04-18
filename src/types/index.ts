
export interface TrendingTopic {
  id: string;
  title: string;
  description: string;
  source: string;
  category: 'crypto' | 'business' | 'tech';
  sentiment: 'positive' | 'negative' | 'neutral';
  trendingScore: number;
  date: string;
  tags: string[];
  relatedLinks: string[];
}

export interface MonetizationIdea {
  id: string;
  title: string;
  description: string;
  estimatedROI: string;
  difficultyLevel: 'easy' | 'medium' | 'hard';
  timeToMarket: string;
  requiredResources: string[];
  relatedTrends: string[];
}

export interface TechUpdate {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  category: string;
  date: string;
  source: string;
}

export interface MarketInsight {
  id: string;
  title: string;
  description: string;
  impactScore: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  relatedAssets: string[];
}
