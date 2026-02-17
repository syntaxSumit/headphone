'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 240;
const IMAGE_PATH = '/sequence/ezgif-1f463ca0b34196c9-jpg/ezgif-frame-';

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `${IMAGE_PATH}${frameNumber}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  // Update canvas on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (!imagesLoaded || !canvasRef.current) return;

      const frameIndex = Math.min(
        Math.floor(latest * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );

      setCurrentFrame(frameIndex);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx || !images[frameIndex]) return;

      const img = images[frameIndex];

      // Set canvas size to match viewport
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate scaling to fit image while maintaining aspect ratio
      const canvasAspect = window.innerWidth / window.innerHeight;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        // Canvas is wider than image
        drawWidth = window.innerWidth;
        drawHeight = drawWidth / imgAspect;
        offsetX = 0;
        offsetY = (window.innerHeight - drawHeight) / 2;
      } else {
        // Canvas is taller than image
        drawHeight = window.innerHeight;
        drawWidth = drawHeight * imgAspect;
        offsetX = (window.innerWidth - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    });

    return () => unsubscribe();
  }, [scrollYProgress, images, imagesLoaded]);

  // Draw initial frame
  useEffect(() => {
    if (imagesLoaded && canvasRef.current && images[0]) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = images[0];
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      const canvasAspect = window.innerWidth / window.innerHeight;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = window.innerWidth;
        drawHeight = drawWidth / imgAspect;
        offsetX = 0;
        offsetY = (window.innerHeight - drawHeight) / 2;
      } else {
        drawHeight = window.innerHeight;
        drawWidth = drawHeight * imgAspect;
        offsetX = (window.innerWidth - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, [imagesLoaded, images]);

  // Text overlay opacity transforms
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const engineeringOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const titaniumOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      {/* Loading State */}
      {!imagesLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-white/60 text-sm tracking-tight">Loading Experience...</p>
          </div>
        </div>
      )}

      {/* Sticky Canvas */}
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Text Overlays */}
        {imagesLoaded && (
          <>
            {/* Title - 0% */}
            <motion.div
              style={{ opacity: titleOpacity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-center px-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/90 tracking-tighter mb-4">
                  Zenith X
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/60 tracking-tight">
                  Pure Sound.
                </p>
              </div>
            </motion.div>

            {/* Precision Engineering - 30% */}
            <motion.div
              style={{ opacity: engineeringOpacity }}
              className="absolute inset-0 flex items-center pointer-events-none"
            >
              <div className="pl-8 md:pl-16 lg:pl-24 max-w-2xl">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-3">
                  Precision
                </h2>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-4">
                  Engineering.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/60 tracking-tight max-w-md">
                  Every component meticulously crafted for acoustic perfection.
                </p>
              </div>
            </motion.div>

            {/* Titanium Drivers - 60% */}
            <motion.div
              style={{ opacity: titaniumOpacity }}
              className="absolute inset-0 flex items-center justify-end pointer-events-none"
            >
              <div className="pr-8 md:pr-16 lg:pr-24 max-w-2xl text-right">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-3">
                  Titanium
                </h2>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-4">
                  Drivers.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/60 tracking-tight max-w-md ml-auto">
                  50mm drivers delivering unparalleled clarity and depth.
                </p>
              </div>
            </motion.div>

            {/* CTA - 90% */}
            <motion.div
              style={{ opacity: ctaOpacity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-center px-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/90 tracking-tighter mb-6">
                  Hear Everything.
                </h2>
                <button className="pointer-events-auto px-8 py-4 bg-white text-[#050505] text-lg font-semibold tracking-tight rounded-full hover:bg-white/90 transition-colors">
                  Experience Zenith X
                </button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
