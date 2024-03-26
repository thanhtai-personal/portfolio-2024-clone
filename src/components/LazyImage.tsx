import React, { useEffect, useRef, useState } from 'react';

interface LazyLoadImageProps {
  src: string;
  alt: string;
  threshold?: number;
  className?: string;
}

export const LazyLoadImage: React.FC<LazyLoadImageProps> = ({ src, alt, threshold = 0, className }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imageRef.current!);
        }
      },
      { threshold }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [threshold]);

  return (
    <img
      ref={imageRef}
      className={`${className}`}
      src={isVisible ? src : ''}
      alt={alt}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
    />
  );
};