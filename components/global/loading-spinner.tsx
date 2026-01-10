import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-3">
      <Loader2 className="animate-spin w-5 h-5 text-primary" />
      <p className="text-sm">Đang tải...</p>
    </div>
  );
};

export default LoadingSpinner;
