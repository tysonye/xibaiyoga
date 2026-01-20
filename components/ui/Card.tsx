import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  elevated?: boolean;
}

export const Card = ({ children, className, glass = false, elevated = false }: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          'rounded-2xl p-6 transition-all duration-500',
          // 普通卡片
          !glass && !elevated && 'bg-white shadow-md hover:shadow-xl',
          // 玻璃态卡片
          glass && 'bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:bg-white/85 hover:-translate-y-2 hover:shadow-2xl',
          // 高级卡片（带光晕效果）
          elevated && 'relative overflow-hidden',
          elevated && glass && 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-brand-accent/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
