import { useTranslate } from '@/hooks/useTranslate';
import { goToSection } from '@/utils/index';
import { ButtonGroup, Button } from 'flowbite-react';

export const SectionButtons = ({ vertical }: { vertical?: boolean }) => {
  const { t } = useTranslate();
  return (
    <div className='flex flex-col'>
      <ButtonGroup className={`flex ${vertical ? 'flex-col' : 'flex-row'}`}>
        <Button
          className={vertical ? 'm-1' : ''}
          onClick={() => goToSection('section-summary')}
        >
          {t('Summary')}
        </Button>
        <Button
          className={vertical ? 'm-1 rounded-lg' : ''}
          onClick={() => goToSection('section-skills')}
        >
          {t('Skills')}
        </Button>
        <Button
          className={vertical ? 'm-1 rounded-lg' : ''}
          onClick={() => goToSection('section-experience')}
        >
          {t('Experience')}
        </Button>
        <Button
          className={vertical ? 'm-1 rounded-lg' : ''}
          onClick={() => goToSection('section-education')}
        >
          {t('Education')}
        </Button>
        <Button
          className={vertical ? 'm-1 rounded-lg' : ''}
          onClick={() => goToSection('section-side-projects')}
        >
          {t('Side Projects')}
        </Button>
      </ButtonGroup>
    </div>
  );
};
