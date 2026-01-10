import { cn } from '@/lib/utils';

const SlideIndicators = ({
  current,
  count,
  onSelect,
}: {
  current: number;
  count: number;
  onSelect: (index: number) => void;
}) => {
  return (
    <div className="flex gap-1 py-2 text-center text-muted-fg text-sm">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          aria-label={`Slide ${index + 1} of ${count}`}
          onClick={() => onSelect(index)}
          className={cn(
            'rounded-xl transition focus:outline-hidden',
            current === index + 1
              ? 'h-3 w-5 bg-primary transition-all hover:bg-primary/80'
              : 'h-3 w-3 bg-fg/10 hover:bg-fg/15'
          )}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
