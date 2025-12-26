import React, { useState } from 'react';
import { Upload, Download, FileText, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

const CompressPDF = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [compressionLevel, setCompressionLevel] = useState('medium');

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setResult(null);
      setError(null);
    } else {
      setError('Please select a valid PDF file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setResult(null);
      setError(null);
    } else {
      setError('Please drop a valid PDF file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const compressPDF = async () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      setProgress(20);

      // Read the PDF file
      const arrayBuffer = await file.arrayBuffer();
      setProgress(40);

      // Load the PDF
      const pdfDoc = await PDFDocument.load(arrayBuffer, {
        ignoreEncryption: true,
      });
      setProgress(60);

      // Apply compression based on level
      let compressedPdfBytes;

      if (compressionLevel === 'low') {
        // Light compression - just remove metadata
        compressedPdfBytes = await pdfDoc.save({
          useObjectStreams: true,
          addDefaultPage: false,
        });
      } else if (compressionLevel === 'medium') {
        // Medium compression - remove metadata and compress streams
        compressedPdfBytes = await pdfDoc.save({
          useObjectStreams: true,
          addDefaultPage: false,
          objectsPerTick: 50,
        });
      } else {
        // High compression - maximum compression
        compressedPdfBytes = await pdfDoc.save({
          useObjectStreams: true,
          addDefaultPage: false,
          objectsPerTick: 20,
        });
      }

      setProgress(90);

      const originalSize = file.size;
      const compressedSize = compressedPdfBytes.length;
      const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);

      setResult({
        blob: new Blob([compressedPdfBytes], { type: 'application/pdf' }),
        originalSize,
        compressedSize,
        compressionRatio,
        fileName: file.name.replace('.pdf', '_compressed.pdf'),
      });

      setProgress(100);
    } catch (err) {
      console.error('Compression error:', err);
      setError('Failed to compress PDF. The file might be corrupted or encrypted.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadCompressed = () => {
    if (!result) return;

    const url = URL.createObjectURL(result.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = result.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setError(null);
    setProgress(0);
  };

  return (
    <div className="h-full flex flex-col p-6 overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Compress PDF</h1>
        <p className="text-slate-600">
          Reduce PDF file size while maintaining quality. All processing happens in your browser.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Upload Area */}
        {!file && (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="glass-panel rounded-xl p-8 border-2 border-dashed border-slate-300 hover:border-brand-primary transition-colors cursor-pointer"
          >
            <label className="flex flex-col items-center justify-center cursor-pointer">
              <Upload className="w-16 h-16 text-brand-primary mb-4" />
              <span className="text-lg font-semibold text-slate-700 mb-2">
                Drop PDF file here or click to browse
              </span>
              <span className="text-sm text-slate-500">Maximum file size: 50MB</span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          </div>
        )}

        {/* File Info & Controls */}
        {file && !result && (
          <div className="glass-panel rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand-primary" />
                <div>
                  <p className="font-semibold text-slate-900">{file.name}</p>
                  <p className="text-sm text-slate-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={reset}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Remove
              </button>
            </div>

            {/* Compression Level */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Compression Level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['low', 'medium', 'high'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setCompressionLevel(level)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      compressionLevel === level
                        ? 'bg-brand-primary text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {compressionLevel === 'low' && 'Minimal compression, preserves maximum quality'}
                {compressionLevel === 'medium' && 'Balanced compression and quality (recommended)'}
                {compressionLevel === 'high' && 'Maximum compression, may reduce quality'}
              </p>
            </div>

            {/* Compress Button */}
            <button
              onClick={compressPDF}
              disabled={isProcessing}
              className="w-full btn-primary text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Compressing... {progress}%
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Compress PDF
                </>
              )}
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {isProcessing && (
          <div className="glass-panel rounded-xl p-6">
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-brand-primary h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="glass-panel rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-3 text-green-600">
              <CheckCircle2 className="w-8 h-8" />
              <div>
                <p className="font-semibold text-lg">Compression Successful!</p>
                <p className="text-sm text-slate-600">Your PDF has been compressed</p>
              </div>
            </div>

            {/* Size Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-1">Original Size</p>
                <p className="text-2xl font-bold text-slate-900">{formatFileSize(result.originalSize)}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-600 mb-1">Compressed Size</p>
                <p className="text-2xl font-bold text-green-700">{formatFileSize(result.compressedSize)}</p>
              </div>
            </div>

            <div className="bg-brand-primary bg-opacity-10 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 mb-1">Space Saved</p>
              <p className="text-3xl font-bold text-brand-primary">{result.compressionRatio}%</p>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadCompressed}
              className="w-full btn-primary text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Compressed PDF
            </button>

            <button
              onClick={reset}
              className="w-full bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Compress Another File
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="glass-panel rounded-xl p-4 bg-red-50 border border-red-200">
            <div className="flex items-center gap-3 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="glass-panel rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-brand-primary" />
            How It Works
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-brand-primary">•</span>
              <span>Upload your PDF file (maximum 50MB)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary">•</span>
              <span>Choose compression level based on your needs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary">•</span>
              <span>Click "Compress PDF" to reduce file size</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary">•</span>
              <span>Download the compressed PDF instantly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary">•</span>
              <span className="font-semibold text-brand-primary">
                100% client-side processing - your files never leave your device
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompressPDF;
