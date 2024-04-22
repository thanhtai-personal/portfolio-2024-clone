import { ReactNode } from 'react';

export interface ICardProps {
  title?: ReactNode | string;
  description?: string;
  defaultFullDes?: boolean;
  embeddedVideo?: string;
  embeddedAlt?: string;
  rating?: {
    point: number;
    baseOn?: string;
  };
};

export const Card = ({}: ICardProps) => {
  return (
    <div></div>
  );
};
