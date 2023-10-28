import { FC, ReactNode } from 'react';

interface LinksGroupProps {
  icon: FC<any>;
  label: string;
  initiallyOpened: boolean;
  links: { label: string; link: string; view: ReactNode }[];
}

export type { LinksGroupProps };
