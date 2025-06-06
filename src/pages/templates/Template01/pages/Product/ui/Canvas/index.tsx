import React, { useRef, useEffect } from "react";

interface CanvasImageProps {
  src: string;
  width?: number;
  height?: number;
}

export const CanvasImage: React.FC<CanvasImageProps> = ({
  src,
  width = 180,
  height = 180,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function isBlue(r: number, g: number, b: number) {
    const blueR = 0;
    const blueG = 120;
    const blueB = 255;

    const distance = Math.sqrt(
      Math.pow(r - blueR, 2) +
      Math.pow(g - blueG, 2) +
      Math.pow(b - blueB, 2)
    );

    return distance < 100;
  }

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = async () => {
      await img.decode().catch(() => {});
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (isBlue(r, g, b)) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    img.onerror = (err) => {
      console.error("Erro ao carregar imagem", err, src);
    };
  }, [src, width, height]);

  return (
    <canvas ref={canvasRef} style={{ width: "100%", height: `${height}px` }} />
  );
};
