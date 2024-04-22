import { ReactNode } from 'react';

export interface IListItem {
  key: string;
  className?: string;
  content?: ReactNode;
  isActive?: boolean;
  onClick?: (item?: IListItem) => void;
  onHover?: (item?: IListItem) => void;
}

export interface IListView {
  items?: IListItem[];
  classes?: {
    container?: string;
  };
  nested?: boolean;
  ordered?: boolean;
  unstyled?: boolean;
  horizontal?: boolean;
}

export const ListView = ({ }: IListView) => {

  return (
    <ul><li><div></div></li></ul>
  );
};
