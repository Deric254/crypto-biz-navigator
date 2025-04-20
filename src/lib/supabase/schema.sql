
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crypto Promotions Table
CREATE TABLE crypto_promotions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exchange VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    link VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Market Insights Table
CREATE TABLE market_insights (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR NOT NULL,
    content TEXT NOT NULL,
    source VARCHAR NOT NULL,
    sentiment_score DECIMAL,
    impact_level VARCHAR CHECK (impact_level IN ('low', 'medium', 'high')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    tags TEXT[],
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trade Signals Table
CREATE TABLE trade_signals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    asset VARCHAR NOT NULL,
    entry_price DECIMAL NOT NULL,
    stop_loss DECIMAL,
    take_profit DECIMAL,
    direction VARCHAR CHECK (direction IN ('long', 'short')),
    timeframe VARCHAR NOT NULL,
    confidence_score DECIMAL CHECK (confidence_score >= 0 AND confidence_score <= 1),
    analysis TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News Sources Table
CREATE TABLE news_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    api_endpoint VARCHAR,
    category VARCHAR CHECK (category IN ('crypto', 'finance', 'general', 'tech')),
    is_active BOOLEAN DEFAULT true,
    last_fetched TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_crypto_promotions_updated_at
    BEFORE UPDATE ON crypto_promotions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_market_insights_updated_at
    BEFORE UPDATE ON market_insights
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_trade_signals_updated_at
    BEFORE UPDATE ON trade_signals
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_sources_updated_at
    BEFORE UPDATE ON news_sources
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better query performance
CREATE INDEX idx_crypto_promotions_exchange ON crypto_promotions(exchange);
CREATE INDEX idx_market_insights_source ON market_insights(source);
CREATE INDEX idx_trade_signals_asset ON trade_signals(asset);
CREATE INDEX idx_news_sources_category ON news_sources(category);
