// PDFRenderer.tsx

import { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;


interface PDFRendererProps {
    url: string;
}

export default function PDFRenderer({ url }: PDFRendererProps) {
    const [pdfPages, setPdfPages] = useState<string[]>([]);

    useEffect(() => {
        const loadPDF = async () => {
            try {
                const pdf = await pdfjsLib.getDocument(url).promise;
                const pages = await Promise.all(
                    Array.from({ length: pdf.numPages }, async (_, i) => {
                        const page = await pdf.getPage(i + 1);
                        const scale = 1.5;
                        const viewport = page.getViewport({ scale });
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        if (!context) throw new Error('Failed to get canvas 2D context');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport,
                        };

                        await page.render(renderContext).promise;
                        return canvas.toDataURL(); // Convert the canvas to a base64 image
                    })
                );
                setPdfPages(pages); // Set rendered pages as images
            } catch (error) {
                console.error('Error rendering PDF:', error);
            }
        };

        loadPDF();
    }, [url]);

    return (
        <div>
            {pdfPages.map((page, index) => (
                <img
                    key={index}
                    src={page}
                    alt={`Page ${index + 1}`}
                    className="w-full mb-4"
                />
            ))}
        </div>
    );
}
