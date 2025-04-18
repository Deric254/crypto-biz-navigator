
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, DollarSign, Clock, Briefcase, BarChart } from "lucide-react";
import { MonetizationIdea } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const getDifficultyColor = (level: string) => {
  switch (level) {
    case 'easy':
      return 'bg-crypto-trend text-white';
    case 'medium':
      return 'bg-crypto-bitcoin text-white';
    case 'hard':
      return 'bg-crypto-alert text-white';
    default:
      return 'bg-muted text-white';
  }
};

const MonetizationIdeasCard = ({ ideas }: { ideas: MonetizationIdea[] }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-crypto-bitcoin" />
            Monetization Ideas
          </CardTitle>
          <Badge variant="outline" className="ml-2">
            {ideas.length} Ideas
          </Badge>
        </div>
        <CardDescription>
          Actionable business ideas based on trending topics
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <Accordion type="single" collapsible className="w-full">
          {ideas.map((idea, index) => (
            <AccordionItem key={idea.id} value={idea.id} className="border-b-0">
              <AccordionTrigger className="py-3 px-3 bg-secondary/50 rounded-t-md hover:bg-secondary/80 transition-colors">
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center">
                    <span className="font-medium text-left">{idea.title}</span>
                  </div>
                  <Badge className={getDifficultyColor(idea.difficultyLevel)}>
                    {idea.difficultyLevel}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 px-3 pb-4 bg-secondary/30 rounded-b-md mb-3">
                <p className="text-sm mb-3">{idea.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-crypto-bitcoin" />
                    <span className="text-sm">ROI: <strong>{idea.estimatedROI}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    <span className="text-sm">Time to Market: <strong>{idea.timeToMarket}</strong></span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm font-medium">Required Resources:</span>
                  </div>
                  <ul className="list-disc ml-6 text-sm">
                    {idea.requiredResources.map((resource, idx) => (
                      <li key={idx}>{resource}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <BarChart className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm font-medium">Related Trends:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {idea.relatedTrends.map((trend, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {trend}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default MonetizationIdeasCard;
