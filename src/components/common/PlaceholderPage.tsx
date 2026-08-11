import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { FEATURE_FLAGS } from "../../types";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: ReactNode;
  featureKey: string;
  cards?: { title: string; content?: ReactNode }[];
}

export const PlaceholderPage = ({ title, description, icon, featureKey, cards = [] }: PlaceholderPageProps) => {
  const status = FEATURE_FLAGS[featureKey];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="p-3 bg-priven-surface rounded-xl border border-priven-muted text-priven-lime">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-priven-white">{title}</h1>
            <p className="text-priven-muted-text">{description}</p>
          </div>
        </div>
        <Badge variant={status === 'active' ? 'lime' : status === 'coming-soon' ? 'gold' : 'danger'}>
          {status === 'active' ? 'Active' : status === 'coming-soon' ? 'Coming Soon' : 'Disabled'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.length > 0 ? (
          cards.map((card, i) => (
            <Card key={i} className="opacity-70 grayscale pointer-events-none">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {card.content || <div className="h-24 rounded bg-priven-muted/50 animate-pulse" />}
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="col-span-full border-dashed border-priven-muted bg-transparent">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-priven-surface flex items-center justify-center mb-4">
                <span className="text-xl">🚧</span>
              </div>
              <h3 className="text-lg font-medium text-priven-white mb-2">Module under development</h3>
              <p className="text-priven-muted-text max-w-sm">
                This feature is part of the future Priven Hub ecosystem and is currently being built.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
