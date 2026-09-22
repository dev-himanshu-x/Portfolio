import { useState } from 'react';

type FadeInImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  skeletonClassName?: string;
};

export default function FadeInImage({
  className,
  skeletonClassName = '',
  style,
  onLoad,
  alt,
  ...props
}: FadeInImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative block">
      {!loaded && (
        <span
          className={`absolute inset-0 animate-pulse rounded-[inherit] bg-cyan-500/10 ${skeletonClassName}`}
        />
      )}
      <img
        {...props}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={className}
        style={{
          ...style,
          // Inline style wins over any opacity utility class, so a caller's
          // own resting opacity (e.g. opacity-40) still applies once loaded.
          opacity: loaded ? style?.opacity : 0,
          transition: `opacity 700ms ease-out${style?.transition ? `, ${style.transition}` : ''}`,
        }}
      />
    </span>
  );
}
