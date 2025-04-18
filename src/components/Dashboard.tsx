
import { useState, useEffect } from 'react';
import { 
  fetchTrendingTopics, 
  fetchMonetizationIdeas, 
  fetchTechUpdates, 
  fetchMarketInsights 
} from '@/services/trendsService';
import TrendingTopicsCard from './TrendingTopicsCard';
import MonetizationIdeasCard from './MonetizationIdeasCard';
import TechUpdatesCard from './TechUpdatesCard';
import MarketInsightsCard from './MarketInsightsCard';
import { TrendingTopic, MonetizationIdea, TechUpdate, MarketInsight } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';
import Header from './Header';
import Footer from './Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Dashboard = () => {
  const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([]);
  const [monetizationIdeas, setMonetizationIdeas] = useState<MonetizationIdea[]>([]);
  const [techUpdates, setTechUpdates] = useState<TechUpdate[]>([]);
  const [marketInsights, setMarketInsights] = useState<MarketInsight[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [topicsData, ideasData, updatesData, insightsData] = await Promise.all([
        fetchTrendingTopics(),
        fetchMonetizationIdeas(),
        fetchTechUpdates(),
        fetchMarketInsights()
      ]);
      
      setTrendingTopics(topicsData);
      setMonetizationIdeas(ideasData);
      setTechUpdates(updatesData);
      setMarketInsights(insightsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header refreshData={fetchAllData} />
      
      <ScrollArea className="flex-1 py-6">
        <main className="container px-4 pb-6">
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-full h-[500px] rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TrendingTopicsCard topics={trendingTopics} />
              <MonetizationIdeasCard ideas={monetizationIdeas} />
              <TechUpdatesCard updates={techUpdates} />
              <MarketInsightsCard insights={marketInsights} />
            </div>
          )}
        </main>
      </ScrollArea>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
