
import { TrendingTopic, MonetizationIdea, TechUpdate, MarketInsight } from '../types';

// In a real application, these would be API calls to backend services
// For now, we'll use mock data to demonstrate the UI

// Mock trending topics data
export const fetchTrendingTopics = (): Promise<TrendingTopic[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Layer 2 Scaling Solutions',
          description: 'Layer 2 scaling solutions gaining traction as Ethereum gas fees rise.',
          source: 'Twitter',
          category: 'crypto',
          sentiment: 'positive',
          trendingScore: 94,
          date: '2025-04-18',
          tags: ['ethereum', 'scaling', 'defi'],
          relatedLinks: ['https://ethereum.org/en/layer-2/']
        },
        {
          id: '2',
          title: 'NFT Gaming Integration',
          description: 'Major gaming companies exploring NFT integration for in-game assets.',
          source: 'Reddit',
          category: 'crypto',
          sentiment: 'positive',
          trendingScore: 89,
          date: '2025-04-18',
          tags: ['nft', 'gaming', 'metaverse'],
          relatedLinks: []
        },
        {
          id: '3',
          title: 'AI-Powered Content Creation',
          description: 'AI tools revolutionizing content creation for businesses.',
          source: 'LinkedIn',
          category: 'business',
          sentiment: 'positive',
          trendingScore: 87,
          date: '2025-04-17',
          tags: ['ai', 'content', 'marketing'],
          relatedLinks: []
        },
        {
          id: '4',
          title: 'DeFi Yield Optimization',
          description: 'New DeFi protocols offering automated yield optimization across multiple chains.',
          source: 'Discord',
          category: 'crypto',
          sentiment: 'positive',
          trendingScore: 85,
          date: '2025-04-17',
          tags: ['defi', 'yield', 'passive-income'],
          relatedLinks: []
        },
        {
          id: '5',
          title: 'Supply Chain Blockchain Solutions',
          description: 'Enterprises adopting blockchain for supply chain management.',
          source: 'Forbes',
          category: 'business',
          sentiment: 'neutral',
          trendingScore: 78,
          date: '2025-04-16',
          tags: ['blockchain', 'supply-chain', 'enterprise'],
          relatedLinks: []
        },
        {
          id: '6',
          title: 'Quantum Computing Security',
          description: 'Emerging quantum-resistant cryptography protocols gaining attention.',
          source: 'Tech News',
          category: 'tech',
          sentiment: 'neutral',
          trendingScore: 76,
          date: '2025-04-16',
          tags: ['quantum', 'security', 'cryptography'],
          relatedLinks: []
        }
      ]);
    }, 800);
  });
};

// Mock monetization ideas
export const fetchMonetizationIdeas = (): Promise<MonetizationIdea[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Layer 2 Educational Platform',
          description: 'Create a comprehensive educational platform explaining Layer 2 solutions with interactive demos.',
          estimatedROI: '200-300% in 12 months',
          difficultyLevel: 'medium',
          timeToMarket: '3-4 months',
          requiredResources: ['Web development team', 'Blockchain experts', 'Content creators'],
          relatedTrends: ['Layer 2 Scaling Solutions']
        },
        {
          id: '2',
          title: 'NFT Gaming Marketplace',
          description: 'Develop a marketplace for trading in-game NFT assets with cross-game compatibility.',
          estimatedROI: '400-500% in 18 months',
          difficultyLevel: 'hard',
          timeToMarket: '6-8 months',
          requiredResources: ['Blockchain developers', 'Game integration specialists', 'UI/UX designers'],
          relatedTrends: ['NFT Gaming Integration']
        },
        {
          id: '3',
          title: 'AI Content SaaS for Businesses',
          description: 'Launch a SaaS platform that uses AI to generate and optimize business content.',
          estimatedROI: '150-250% in 12 months',
          difficultyLevel: 'medium',
          timeToMarket: '4-5 months',
          requiredResources: ['AI engineers', 'Content experts', 'SaaS development team'],
          relatedTrends: ['AI-Powered Content Creation']
        },
        {
          id: '4',
          title: 'DeFi Yield Aggregator',
          description: 'Build a yield optimization protocol that automatically shifts funds to highest-yielding platforms.',
          estimatedROI: '300-700% in 24 months',
          difficultyLevel: 'hard',
          timeToMarket: '5-7 months',
          requiredResources: ['Smart contract developers', 'Security auditors', 'DeFi experts'],
          relatedTrends: ['DeFi Yield Optimization']
        }
      ]);
    }, 1000);
  });
};

// Mock tech updates
export const fetchTechUpdates = (): Promise<TechUpdate[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Ethereum Shanghai Upgrade',
          description: 'Ethereum network completes latest upgrade with significant improvements to scalability and efficiency.',
          impact: 'high',
          category: 'Blockchain',
          date: '2025-04-15',
          source: 'Ethereum Foundation'
        },
        {
          id: '2',
          title: 'GPT-5 Release',
          description: 'Next generation of large language models released with unprecedented capabilities for understanding and generating content.',
          impact: 'high',
          category: 'Artificial Intelligence',
          date: '2025-04-10',
          source: 'OpenAI'
        },
        {
          id: '3',
          title: 'Decentralized Storage Protocol V2',
          description: 'Major update to popular decentralized storage networks with 10x improvement in cost efficiency.',
          impact: 'medium',
          category: 'Decentralized Storage',
          date: '2025-04-08',
          source: 'Web3 Weekly'
        },
        {
          id: '4',
          title: 'Quantum Resistant Encryption Standard',
          description: 'New encryption standard finalized to protect against quantum computing threats.',
          impact: 'medium',
          category: 'Cryptography',
          date: '2025-04-05',
          source: 'National Institute of Standards and Technology'
        }
      ]);
    }, 1200);
  });
};

// Mock market insights
export const fetchMarketInsights = (): Promise<MarketInsight[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Institutional DeFi Adoption',
          description: 'Major financial institutions increasingly moving into DeFi space with significant capital inflows expected in Q3.',
          impactScore: 9.2,
          sentiment: 'bullish',
          relatedAssets: ['Ethereum', 'DeFi Indexes', 'Aave', 'Compound']
        },
        {
          id: '2',
          title: 'Regulatory Clarity in Key Markets',
          description: 'New regulatory frameworks in US and EU providing clearer guidelines for crypto businesses.',
          impactScore: 8.7,
          sentiment: 'bullish',
          relatedAssets: ['Exchange Tokens', 'Compliance Solutions', 'Regulated DeFi']
        },
        {
          id: '3',
          title: 'NFT Market Consolidation',
          description: 'NFT market showing signs of consolidation with focus on utility-based projects.',
          impactScore: 7.5,
          sentiment: 'neutral',
          relatedAssets: ['Gaming NFTs', 'Utility NFTs', 'NFT Marketplaces']
        },
        {
          id: '4',
          title: 'Web3 Social Media Growth',
          description: 'Decentralized social media platforms seeing accelerated user growth with over 50% increase MoM.',
          impactScore: 8.3,
          sentiment: 'bullish',
          relatedAssets: ['Social Tokens', 'Content Platforms', 'Decentralized Identity']
        }
      ]);
    }, 900);
  });
};

// Function to simulate web scraping
export const scrapWebContent = (url: string): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    console.log('Scraping URL:', url);
    // In a real app, this would connect to a backend service that performs actual web scraping
    setTimeout(() => {
      if (url && url.includes('http')) {
        resolve({ success: true, message: 'Successfully scraped content from ' + url });
      } else {
        resolve({ success: false, message: 'Invalid URL format. Please include http:// or https://' });
      }
    }, 2000);
  });
};
