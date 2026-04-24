import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import octopusSrc from '../assets/octopus.svg';
import seashoreSrc from '../assets/seashore.png';

const TILE_SIZE = 60;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    let timeoutId: any = null;
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      }, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

const useScreenTiles = (tileSize: number, extraY = 0) => {
  const { width: w, height: h } = useScreenSize();
  const [nX, setNX] = useState<number>(Math.ceil(w / tileSize));
  const [nY, setNY] = useState<number>(Math.ceil(h / tileSize) + extraY);

  useLayoutEffect(() => {
    setNX(Math.ceil(w / tileSize));
    setNY(Math.ceil(h / tileSize) + extraY);
  }, [extraY, h, tileSize, w]);

  return { nX, nY };
};

const createArray = (length: number) => Array.from({ length }, (_, k) => k);

interface CoverScreenProps {
  onDone?: () => void;
}

export default function CoverScreen({ onDone }: CoverScreenProps) {
  const { nX, nY } = useScreenTiles(TILE_SIZE);
  const [rows, setRows] = useState<number[]>();
  const [cols, setCols] = useState<number[]>();
  const [hiddenKeys, setHiddenKeys] = useState<Record<string, boolean>>({});
  const [isEntering, setIsEntering] = useState(false);
  const [scratchStarted, setScratchStarted] = useState(false);

  useLayoutEffect(() => {
    setRows(createArray(nY));
    setCols(createArray(nX));
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nX, nY]);

  const hideTile = useCallback((key: string) => {
    if (!scratchStarted) setScratchStarted(true);
    setHiddenKeys((v) => ({ ...v, [key]: true }));
  }, [scratchStarted]);

  const handleEnter = () => {
    if (!scratchStarted) return;
    setIsEntering(true);
    setTimeout(() => {
      onDone?.();
    }, 1000);
  };

  const tiles = useMemo(() => {
    if (!rows || !cols) return null;
    return rows.map((row) => (
      <div key={row} className="flex flex-nowrap h-[60px]">
        {cols.map((col) => {
          const key = `${row}.${col}`;
          const isHidden = hiddenKeys[key];
          return (
            <div
              key={key}
              onMouseEnter={() => hideTile(key)}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                const el = document.elementFromPoint(touch.clientX, touch.clientY);
                const tileKey = el?.getAttribute('data-key');
                if (tileKey) hideTile(tileKey);
              }}
              data-key={key}
              className={classNames(
                "w-[60px] min-w-[60px] h-[60px] transition-all duration-700 ease-out handcrafted-sky-tiles",
                isHidden ? "opacity-0 pointer-events-none scale-0" : "opacity-100"
              )}
            />
          );
        })}
      </div>
    ));
  }, [cols, hiddenKeys, hideTile, rows]);

  // Calculate opacity based on scratched tiles
  const scratchedCount = Object.keys(hiddenKeys).length;
  const totalTiles = nX * nY;
  const scratchRatio = totalTiles > 0 ? scratchedCount / totalTiles : 0;
  // Fade out smoothly after a tiny bit of scratching
  const contentOpacity = Math.max(0, 1 - (scratchRatio * 5));

  return (
    <div
      className={classNames(
        "fixed inset-0 z-[100] transition-opacity duration-1000 bg-transparent",
        isEntering ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      onClick={handleEnter}
    >

      {/* Grid of Scratchable Tiles */}
      <div className="absolute inset-0 z-10 select-none overflow-hidden">{tiles}</div>

      {/* Actual Seashore Image with gray filter */}
      <img 
        src={seashoreSrc} 
        alt="Seashore" 
        className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[35vh] object-cover pointer-events-none z-20"
        style={{ 
          opacity: contentOpacity, 
          transition: 'opacity 0.4s ease-out',
          filter: 'grayscale(100%) brightness(0.6)'
        }} 
      />

      {/* Centered Welcome Text & Instructions */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center pointer-events-none w-full"
        style={{ opacity: contentOpacity, transition: 'opacity 0.4s ease-out' }}
      >
        
        <h1 className="text-[16vw] md:text-[13rem] font-bold text-white leading-[1] tracking-tighter flex items-center justify-center select-none whitespace-nowrap relative">
          Welcome
          
          {/* Floating Octopus (by the side of the 'e', slightly above) */}
          <img 
            src={octopusSrc} 
            alt="octopus" 
            className="absolute -right-[25%] md:-right-[20%] top-0 md:top-[10%] w-[30vw] md:w-[300px] animate-float-slow drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-40"
          />
        </h1>
        
        {/* Plain Text Instructions */}
        <p className="mt-8 md:mt-16 text-white font-medium tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-sm">
          Scratch or tap anywhere to explore
        </p>
      </div>
    </div>
  );
}
