import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'lime' | 'gold' | 'outline' | 'danger';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            'bg-priven-surface text-priven-white border border-transparent': variant === 'default',
            'bg-priven-lime/10 text-priven-lime border border-priven-lime/20': variant === 'lime',
            'bg-priven-gold/10 text-priven-gold border border-priven-gold/20': variant === 'gold',
            'text-priven-white border border-priven-muted': variant === 'outline',
            'bg-priven-red/10 text-priven-red border border-priven-red/20': variant === 'danger',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
