import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-medium text-priven-muted-text">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'flex h-11 w-full rounded-lg border border-priven-muted bg-priven-surface px-4 py-2 text-sm text-priven-white ring-offset-priven-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-priven-muted-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-priven-lime focus-visible:border-priven-lime disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
            error && 'border-priven-red focus-visible:ring-priven-red focus-visible:border-priven-red',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-priven-red">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
