import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Camera, Upload } from 'lucide-react';

export default function PrescriptionScanner() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Upload Prescription</h2>
      
      {isScanning ? (
        <div className="relative">
          <Webcam
            audio={false}
            className="w-full rounded-lg"
            screenshotFormat="image/jpeg"
          />
          <button
            onClick={() => setIsScanning(false)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Capture Prescription
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={() => setIsScanning(true)}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            <Camera className="h-5 w-5" />
            <span>Scan Prescription</span>
          </button>
          
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop your prescription here or{" "}
              <span className="text-blue-600 hover:text-blue-500 cursor-pointer">browse files</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}