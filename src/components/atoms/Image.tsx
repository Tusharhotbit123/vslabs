import type { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export const Image = ({ src, alt, className = '', ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      {...props}
    />
  );
};
