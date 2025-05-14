import React, { useEffect, useRef, useState } from 'react';
import { Holistic } from '@mediapipe/holistic';

type GuidingSilhouetteProps = {
  imageData: string;
  onMeasurement: (data: Record<string, number>) => void;
};

const GuidingSilhouette: React.FC<GuidingSilhouetteProps> = ({ imageData, onMeasurement }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [processing, setProcessing] = useState(false);

  const calculateDistance = (a: any, b: any): number => {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  };

  useEffect(() => {
    if (!imageData) return;

    const processImage = async () => {
      setProcessing(true);

      const holistic = new Holistic({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
      });

      await holistic.initialize();

      holistic.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        refineFaceLandmarks: false,
      });

      holistic.onResults((results) => {
        if (results.poseLandmarks) {
          const lm = results.poseLandmarks;
          const data = {
            shoulderWidth: calculateDistance(lm[11], lm[12]),
            armLengthLeft:
              calculateDistance(lm[11], lm[13]) + calculateDistance(lm[13], lm[15]),
            armLengthRight:
              calculateDistance(lm[12], lm[14]) + calculateDistance(lm[14], lm[16]),
            legLengthLeft:
              calculateDistance(lm[23], lm[25]) + calculateDistance(lm[25], lm[27]),
            legLengthRight:
              calculateDistance(lm[24], lm[26]) + calculateDistance(lm[26], lm[28]),
            torsoLength: calculateDistance(lm[11], lm[23]),
          };

          onMeasurement(data); // <-- Send data to parent

          // Draw landmarks
          const canvas = canvasRef.current;
          const ctx = canvas?.getContext('2d');
          if (canvas && ctx && imageRef.current) {
            canvas.width = imageRef.current.width;
            canvas.height = imageRef.current.height;
            ctx.drawImage(imageRef.current, 0, 0);
            ctx.fillStyle = 'red';
            lm.forEach((point) => {
              ctx.beginPath();
              ctx.arc(point.x * canvas.width, point.y * canvas.height, 4, 0, 2 * Math.PI);
              ctx.fill();
            });
          }
        }
        setProcessing(false);
      });

      if (imageRef.current) {
        await holistic.send({ image: imageRef.current });
      }
    };

    processImage();
  }, [imageData, onMeasurement]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ maxWidth: '100%', marginTop: '1rem' }} />
      <img
        ref={imageRef}
        src={imageData}
        hidden
        alt="uploaded"
        crossOrigin="anonymous"
        onLoad={() => {
          if (imageRef.current) {
            imageRef.current.width = imageRef.current.naturalWidth;
            imageRef.current.height = imageRef.current.naturalHeight;
          }
        }}
      />
      {processing && <p>Processing image...</p>}
    </div>
  );
};

export default GuidingSilhouette;
