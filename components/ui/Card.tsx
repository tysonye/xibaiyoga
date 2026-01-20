import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card = ({ children, className, glass = false }: CardProps) => {
  return (
    <div 
      className={twMerge(
        clsx(
          'rounded-2xl p-6 transition-all duration-300 hover:shadow-lg',
          glass && 'bg-white/70 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/85 hover:-translate-y-1 hover:shadow-xl',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
