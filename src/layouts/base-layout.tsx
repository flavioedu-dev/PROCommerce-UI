import { Menu } from '@components/menu';
import type { ReactNode } from 'react';

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen bg-primary-background pb-8">
      <Menu />
      {children}
    </div>
  );
};
