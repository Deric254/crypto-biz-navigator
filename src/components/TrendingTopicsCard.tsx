
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowUpRight, ExternalLink } from "lucide-react";
import { TrendingTopic } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive':
      return 'bg-crypto-trend text-white';
    case 'negative':
      return 'bg-crypto-alert text-white';
    default:
      return 'bg-muted text-white';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'crypto':
      return 'bg-crypto-bitcoin text-white';
    case 'business':
      return 'bg-blue-600 text-white';
    case 'tech':
      return 'bg-crypto-ethereum text-white';
    default:
      return 'bg-muted text-white';
  }
};

const TrendingTopicsCard = ({ topics }: { topics: TrendingTopic[] }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-crypto-trend" />
            Trending Topics
          </CardTitle>
          <Badge variant="outline" className="ml-2">
            {topics.length} Topics
          </Badge>
        </div>
        <CardDescription>
          Latest trending topics from social media and news sources
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {topics.map((topic) => (
            <div 
              key={topic.id} 
              className="p-3 bg-secondary/50 rounded-md hover:bg-secondary/80 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium flex items-center">
                    {topic.title}
                    {topic.relatedLinks.length > 0 && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a 
                              href={topic.relatedLinks[0]} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-block ml-2 text-primary hover:text-primary/90"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Source</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
                </div>
                <div className="flex space-x-1">
                  <Badge className={getCategoryColor(topic.category)}>
                    {topic.category}
                  </Badge>
                  <Badge className={getSentimentColor(topic.sentiment)}>
                    {topic.sentiment}
                  </Badge>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs">
                  <span>Trending Score</span>
                  <span className="font-medium">{topic.trendingScore}%</span>
                </div>
                <Progress 
                  value={topic.trendingScore} 
                  className="h-1.5 mt-1"
                  indicatorClassName={
                    topic.trendingScore > 90 
                      ? "bg-crypto-trend" 
                      : topic.trendingScore > 80 
                      ? "bg-crypto-bitcoin" 
                      : "bg-primary"
                  }
                />
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {topic.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                <span>Source: {topic.source}</span>
                <span>{new Date(topic.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingTopicsCard;
