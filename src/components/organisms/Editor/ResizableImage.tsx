'use client';

import styled from '@emotion/styled';
import React, { useState, useRef, useCallback, useEffect } from 'react';

type ResizableImageProps = {
  src: string;
  alt?: string;
  initialWidth?: number;
  initialHeight?: number;
  onResize?: (width: number, height: number) => void;
  textAlign?: 'left' | 'center' | 'right';
};

const ImageContainer = styled.div<{
  isSelected: boolean;
  width: number;
  height: number;
  textAlign?: 'left' | 'center' | 'right';
}>`
  position: relative;
  display: inline-block;
  margin: 0.8rem
    ${({ textAlign }) => {
      switch (textAlign) {
        case 'center':
          return 'auto';
        case 'right':
          return '0 0 0 auto';
        case 'left':
        default:
          return '0 auto 0 0';
      }
    }};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.semantic.primary.normal}` : '2px solid transparent'};
  border-radius: 0.4rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.4rem;
  display: block;
`;

const ResizeHandle = styled.div<{ position: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.semantic.primary.normal};
  border: 1px solid ${({ theme }) => theme.semantic.static.white};
  border-radius: 2px;
  cursor: ${({ position }) => {
    switch (position) {
      case 'nw':
        return 'nw-resize';
      case 'ne':
        return 'ne-resize';
      case 'sw':
        return 'sw-resize';
      case 'se':
        return 'se-resize';
      default:
        return 'pointer';
    }
  }};

  ${({ position }) => {
    switch (position) {
      case 'nw':
        return 'top: -4px; left: -4px;';
      case 'ne':
        return 'top: -4px; right: -4px;';
      case 'sw':
        return 'bottom: -4px; left: -4px;';
      case 'se':
        return 'bottom: -4px; right: -4px;';
      default:
        return '';
    }
  }}
`;

export default function ResizableImage({
  src,
  alt = '',
  initialWidth = 300,
  initialHeight = 200,
  onResize,
  textAlign = 'left',
}: ResizableImageProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: initialWidth,
    height: initialHeight,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [activeHandle, setActiveHandle] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = useCallback(() => {
    if (imageRef.current) {
      const ratio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
      setAspectRatio(ratio);

      if (Math.abs(initialWidth / initialHeight - ratio) > 0.1) {
        const adjustedHeight = initialWidth / ratio;
        setDimensions({ width: initialWidth, height: adjustedHeight });
        onResize?.(initialWidth, adjustedHeight);
      }
    }
  }, [initialWidth, initialHeight, onResize]);

  const handleImageClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(true);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, handle: string) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      setActiveHandle(handle);
      setDragStart({
        x: e.clientX,
        y: e.clientY,
        width: dimensions.width,
        height: dimensions.height,
      });
    },
    [dimensions],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !activeHandle) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      let newWidth = dragStart.width;
      let newHeight = dragStart.height;

      switch (activeHandle) {
        case 'se':
          newWidth = Math.max(100, dragStart.width + deltaX);
          newHeight = newWidth / aspectRatio;
          break;
        case 'sw':
          newWidth = Math.max(100, dragStart.width - deltaX);
          newHeight = newWidth / aspectRatio;
          break;
        case 'ne':
          newWidth = Math.max(100, dragStart.width + deltaX);
          newHeight = newWidth / aspectRatio;
          break;
        case 'nw':
          newWidth = Math.max(100, dragStart.width - deltaX);
          newHeight = newWidth / aspectRatio;
          break;
      }

      setDimensions({ width: newWidth, height: newHeight });
      onResize?.(newWidth, newHeight);
    },
    [isDragging, activeHandle, dragStart, aspectRatio, onResize],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setActiveHandle(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsSelected(false);
      }
    };

    if (isSelected) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSelected]);

  return (
    <ImageContainer
      ref={containerRef}
      isSelected={isSelected}
      width={dimensions.width}
      height={dimensions.height}
      textAlign={textAlign}
      onClick={handleImageClick}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
      />

      {isSelected && (
        <>
          <ResizeHandle
            position='nw'
            onMouseDown={(e) => handleMouseDown(e, 'nw')}
          />
          <ResizeHandle
            position='ne'
            onMouseDown={(e) => handleMouseDown(e, 'ne')}
          />
          <ResizeHandle
            position='sw'
            onMouseDown={(e) => handleMouseDown(e, 'sw')}
          />
          <ResizeHandle
            position='se'
            onMouseDown={(e) => handleMouseDown(e, 'se')}
          />
        </>
      )}
    </ImageContainer>
  );
}
