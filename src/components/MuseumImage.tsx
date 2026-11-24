import { useState } from 'react';
import { Landmark } from 'lucide-react';

interface MuseumImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
}

export function MuseumImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectClassName = '',
  priority = false,
}: MuseumImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EBE3D3] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#D6C9B4] p-6 text-center border border-[#D8CBB8] dark:border-[#3D3731] ${aspectClassName} ${className}`}
      >
        <Landmark className="w-8 h-8 mb-2 opacity-60" aria-hidden="true" />
        <p className="font-serif text-sm font-medium max-w-xs">{alt}</p>
        <span className="mt-1 text-xs opacity-70">Tư liệu Bảo tàng Sơn La</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
