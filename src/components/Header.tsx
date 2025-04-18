
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  TrendingUp, 
  PieChart, 
  Lightbulb, 
  Cpu, 
  RefreshCw,
  Zap
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { scrapWebContent } from '@/services/trendsService';

const Header = ({ refreshData }: { refreshData: () => void }) => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScrapContent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to scrap",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await scrapWebContent(url);
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
        refreshData();
      } else {
        toast({
          title: "Warning",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to scrap content. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="w-full px-6 py-4 bg-card border-b border-border sticky top-0 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Zap className="h-6 w-6 mr-2 text-crypto-bitcoin" />
          <h1 className="text-2xl font-bold">Crypto Biz Navigator</h1>
        </div>
        
        <div className="flex flex-1 max-w-xl">
          <form onSubmit={handleScrapContent} className="flex w-full gap-2">
            <Input
              type="url"
              placeholder="Enter URL to analyze (e.g., https://twitter.com/trending)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Search className="h-4 w-4 mr-2" />}
              {isLoading ? "Analyzing..." : "Analyze"}
            </Button>
          </form>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={refreshData}
            className="flex items-center text-xs"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Refresh
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center text-xs hidden md:flex"
          >
            <TrendingUp className="h-4 w-4 mr-1 text-crypto-trend" />
            Trends
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center text-xs hidden md:flex"
          >
            <Lightbulb className="h-4 w-4 mr-1 text-crypto-bitcoin" />
            Ideas
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center text-xs hidden md:flex"
          >
            <Cpu className="h-4 w-4 mr-1 text-crypto-ethereum" />
            Tech
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center text-xs hidden md:flex"
          >
            <PieChart className="h-4 w-4 mr-1 text-primary" />
            Markets
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
