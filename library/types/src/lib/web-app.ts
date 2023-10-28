import { FC } from 'react';

interface LinksGroupProps {
  icon: FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; view?: React.ReactNode }[];
}

export type { LinksGroupProps };
