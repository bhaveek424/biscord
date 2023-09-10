import { Hash } from 'lucide-react';
import { MobileToggle } from '../mobile-toggle';

type ChatHeaderProps = {
  serverId: string;
  name: string;
  type: 'channel' | 'conversation';
  imageUrl?: string;
};

export const ChatHeader = ({
  name,
  serverId,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === 'channel' && (
        <Hash className="mr-2 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      )}

      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
    </div>
  );
};
