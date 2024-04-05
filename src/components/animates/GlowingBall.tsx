import { useDragableElement } from '@/hooks/useDragableElement';

export interface IGlowingBall {
  className?: string;
  id: string;
}

export const GlowingBall = ({ className, id }: IGlowingBall) => {
  const { onSelect } = useDragableElement(id);
  return (
    <div className={`absolute duration-0`} onClick={onSelect} id={id}>
      <div className='relative'>
        <div
          className={`absolute cursor-pointer z-50 top-[calc(50%-20px)] left-[50%-20px] w-16 h-16 rounded-full bg-white glowing-ball ${className}`}
        ></div>
      </div>
    </div>
  );
};
