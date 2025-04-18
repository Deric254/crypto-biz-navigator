
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Calendar, Link } from "lucide-react";
import { TechUpdate } from "@/types";
import { Separator } from "@/components/ui/separator";

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'high':
      return 'bg-crypto-alert text-white';
    case 'medium':
      return 'bg-crypto-bitcoin text-white';
    case 'low':
      return 'bg-crypto-trend text-white';
    default:
      return 'bg-muted text-white';
  }
};

const TechUpdatesCard = ({ updates }: { updates: TechUpdate[] }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center">
            <Cpu className="h-5 w-5 mr-2 text-crypto-ethereum" />
            Tech Updates
          </CardTitle>
          <Badge variant="outline" className="ml-2">
            {updates.length} Updates
          </Badge>
        </div>
        <CardDescription>
          Latest technology updates and their potential impact
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {updates.map((update, index) => (
            <div key={update.id}>
              <div className="p-3 bg-secondary/50 rounded-md hover:bg-secondary/80 transition-colors">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">{update.title}</h3>
                  <Badge className={getImpactColor(update.impact)}>
                    {update.impact} impact
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mt-1">{update.description}</p>
                
                <div className="flex flex-col sm:flex-row justify-between mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">{update.category}</Badge>
                  </div>
                  
                  <div className="flex items-center mt-2 sm:mt-0">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(update.date).toLocaleDateString()}</span>
                    <Separator orientation="vertical" className="mx-2 h-3" />
                    <Link className="h-3 w-3 mr-1" />
                    <span>{update.source}</span>
                  </div>
                </div>
              </div>
              {index < updates.length - 1 && <Separator className="my-3" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechUpdatesCard;
