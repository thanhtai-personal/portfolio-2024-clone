import { Accordion as FlowBiteAccordion } from 'flowbite-react';
import { ReactNode } from 'react';

export interface IAccordion {
  children: ReactNode;
  title: string;
  collapseAll?: boolean;
}

export const Accordion = ({ children, title, collapseAll }: IAccordion) => {
  return (
    <FlowBiteAccordion collapseAll={collapseAll}>
      <FlowBiteAccordion.Panel>
        <FlowBiteAccordion.Title className='bg-gray-700 focus:bg-gray-700 hover:bg-gray-700 enabled:bg-gray-700 active:bg-gray-700 text-white'>
          {title}
        </FlowBiteAccordion.Title>
        <FlowBiteAccordion.Content>{children}</FlowBiteAccordion.Content>
      </FlowBiteAccordion.Panel>
    </FlowBiteAccordion>
  );
};
