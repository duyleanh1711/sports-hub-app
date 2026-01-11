import { MessageCircleMore, Paperclip, Send } from 'lucide-react';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const FieldReviews = () => {
  return (
    <div className="space-y-6 rounded-lg bg-white p-4 md:p-6">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold">Bình luận</h2>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center">
        <MessageCircleMore className="size-8 text-muted-foreground" />
        <p className="font-medium">Chưa có bình luận nào.</p>
        <p className="text-sm text-muted-foreground">
          Hãy để lại bình luận cho người bán.
        </p>
      </div>

      {/* Comment input */}
      <div className="space-y-2">
        <Textarea placeholder="Nhập bình luận của bạn..." />

        <div className="flex items-center justify-between">
          {/* Attach image */}
          <Button variant="ghost" size="icon">
            <Paperclip className="size-4" />
          </Button>

          {/* Send button */}
          <Button>
            <Send className="size-4" />
            Gửi bình luận
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FieldReviews;
