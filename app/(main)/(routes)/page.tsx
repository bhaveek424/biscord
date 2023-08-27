import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <p className="text-2xl">Hello Discord</p>;
      <Button className="">Click Me button</Button>
    </div>
  );
}
