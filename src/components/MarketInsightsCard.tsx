
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, TrendingUp, TrendingDown, LineChart, Tag } from "lucide-react";
import { MarketInsight } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

const getSentimentIcon = (sentiment: string) => {
  switch (sentiment) {
    case 'bullish':
      return <TrendingUp className="h-4 w-4 text-crypto-trend" />;
    case 'bearish':
      return <TrendingDown className="h-4 w-4 text-crypto-alert" />;
    default:
      return <LineChart className="h-4 w-4 text-muted-foreground" />;
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'bullish':
      return 'bg-crypto-trend text-white';
    case 'bearish':
      return 'bg-crypto-alert text-white';
    default:
      return 'bg-muted text-white';
  }
};

const getImpactColor = (score: number) => {
  if (score >= 9) return "bg-crypto-trend";
  if (score >= 7) return "bg-crypto-bitcoin";
  if (score >= 5) return "bg-primary";
  return "bg-muted";
};

const MarketInsightsCard = ({ insights }: { insights: MarketInsight[] }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center">
            <PieChart className="h-5 w-5 mr-2 text-primary" />
            Market Insights
          </CardTitle>
          <Badge variant="outline" className="ml-2">
            {insights.length} Insights
          </Badge>
        </div>
        <CardDescription>
          Key market trends and their potential impact
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {insights.map((insight) => (
            <div 
              key={insight.id} 
              className="p-3 bg-secondary/50 rounded-md hover:bg-secondary/80 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-medium flex items-center">
                  {getSentimentIcon(insight.sentiment)}
                  <span className="ml-2">{insight.title}</span>
                </h3>
                <Badge className={getSentimentColor(insight.sentiment)}>
                  {insight.sentiment}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
              
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs">
                  <span>Impact Score</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="font-medium">{insight.impactScore.toFixed(1)}/10</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {insight.impactScore >= 9 
                            ? "Extremely High Impact" 
                            : insight.impactScore >= 7 
                            ? "High Impact" 
                            : insight.impactScore >= 5 
                            ? "Medium Impact" 
                            : "Low Impact"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Progress 
                  value={insight.impactScore * 10} 
                  className="h-1.5 mt-1"
                  indicatorClassName={getImpactColor(insight.impactScore)}
                />
              </div>
              
              <div className="mt-3">
                <div className="flex items-center text-xs mb-1">
                  <Tag className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">Related Assets:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {insight.relatedAssets.map((asset, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {asset}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketInsightsCard;
