"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { motion } from 'framer-motion';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

interface ResumeViewerProps {
  resumeUrl: string;
}

export default function ResumeViewer({ resumeUrl }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(): void {
    setError(true);
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <p className="text-red-500 mb-2">Error loading resume PDF</p>
              <a 
                href={resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Click here to view the resume directly
              </a>
            </div>
          </div>
        )}

        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="h-full"
          loading={
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            className="flex justify-center"
            renderAnnotationLayer={true}
            renderTextLayer={true}
            scale={1.2}
          />
        </Document>
      </div>

      {numPages && numPages > 1 && (
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber <= 1}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= (numPages || 1)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      <motion.a
        href={resumeUrl}
        download="Dharmik_Joshi_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Resume
      </motion.a>
    </div>
  );
}