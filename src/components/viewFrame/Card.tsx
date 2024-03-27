import { useTranslate } from '@/hooks/useTranslate';
import { CardProps, Card as FlowBiteCard } from 'flowbite-react';
import { ReactNode, useState } from 'react';

export type ICard = CardProps & {
  title?: ReactNode | string;
  description?: string;
  defaultFullDes?: boolean;
  rating?: {
    point: number;
    baseOn?: string;
  };
};

export const Card = ({
  title,
  description,
  defaultFullDes,
  rating,
  ...nestedProps
}: ICard) => {
  const { t } = useTranslate();
  const [isFullDes, setIsFullDes] = useState(!!defaultFullDes);

  return (
    <FlowBiteCard {...nestedProps}>
      <div className='flex flex-col w-full h-full justify-items-start'>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          <span className=" whitespace-nowrap">{typeof title === 'string' ? t(title) : title}</span>
          {rating && <span className="text-sm whitespace-nowrap font-mono ml-2 underline text-text-active italic">{`${t("Rate")}: ${rating.point}/100`}</span>}
        </h5>
        {rating?.baseOn && <p className="text-sm font-mono mb-4 text-text">{t(rating.baseOn)}</p>}
        <p
          className={`font-normal text-gray-700 dark:text-gray-400 italic ${
            isFullDes
              ? ''
              : 'max-h-40 overflow-hidden whitespace-nowrap text-ellipsis'
          }`}
        >
          {description && t(description)}
        </p>
        {!isFullDes && (
          <div
            className='w-full cursor-pointer flex justify-center items-center p-2 underline'
            onClick={() => setIsFullDes(true)}
          >
            {t('Read more...')}
          </div>
        )}
      </div>
    </FlowBiteCard>
  );
};
