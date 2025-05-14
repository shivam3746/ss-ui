'use client';

import { useState } from 'react';
import GuidingSilhouette from '../components/guiding-silhouette';

export default function DetailsFormFour() {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [sideImage, setSideImage] = useState<string | null>(null);
  const [frontMeasurements, setFrontMeasurements] = useState<Record<string, number> | null>(null);
  const [sideMeasurements, setSideMeasurements] = useState<Record<string, number> | null>(null);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    view: 'front' | 'side'
  ) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        if (view === 'front') {
          setFrontImage(result);
        } else {
          setSideImage(result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Upload Front and Side Images for Measurement</h1>

      {/* Upload Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Front View Image:</label>
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'front')} />
        </div>
        <div>
          <label className="block font-medium">Side View Image:</label>
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'side')} />
        </div>
      </div>

      {/* Process Front Image */}
      {frontImage && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Front Image Measurements</h2>
          <GuidingSilhouette
            imageData={frontImage}
            onMeasurement={(data) => setFrontMeasurements(data)}
          />
        </div>
      )}

      {/* Process Side Image */}
      {sideImage && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Side Image Measurements</h2>
          <GuidingSilhouette
            imageData={sideImage}
            onMeasurement={(data) => setSideMeasurements(data)}
          />
        </div>
      )}

      {/* Final Summary */}
      {(frontMeasurements || sideMeasurements) && (
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Combined Measurements Summary</h2>
          <ul className="list-disc list-inside space-y-1">
            {frontMeasurements &&
              Object.entries(frontMeasurements).map(([key, value]) => (
                <li key={key}>
                  {key}: {value.toFixed(2)}
                </li>
              ))}
            {sideMeasurements &&
              Object.entries(sideMeasurements).map(([key, value]) => (
                <li key={key}>
                  {key}: {value.toFixed(2)}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
