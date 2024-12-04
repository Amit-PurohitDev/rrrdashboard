import axios from 'axios';
import * as pdfjsLib from 'pdfjs-dist';

// Set the workerSrc property to point to the correct worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const API_URL = "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english";

// Function to extract text from a PDF file
const extractTextFromPDF = async (pdfFile) => {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
        fileReader.onload = async () => {
            try {
                // Load the PDF document from the file
                const pdfData = new Uint8Array(fileReader.result);
                const pdfDocument = await pdfjsLib.getDocument(pdfData).promise;

                let fullText = '';

                // Extract text from each page in the PDF
                for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
                    const page = await pdfDocument.getPage(pageNum);
                    const textContent = await page.getTextContent();

                    textContent.items.forEach(item => {
                        fullText += item.str;  // Append text from each page
                    });
                }

                resolve(fullText);  // Return the extracted text
            } catch (error) {
                reject(error);
            }
        };

        fileReader.onerror = (err) => reject(err);  // Handle file read errors
        fileReader.readAsArrayBuffer(pdfFile);  // Read the file as an array buffer
    });
};

// Function to send extracted text to Hugging Face for analysis

export const analyzeDocument = async (file) => {
    try {
        // Extract text from the PDF file
        const extractedText = await extractTextFromPDF(file);

        // Send the extracted text to Hugging Face API for sentiment analysis
        const response = await axios.post(
            API_URL,
            { inputs: extractedText },  // Send the raw text as input
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',  // Ensure the payload is JSON
                },
            }
        );

        return response.data;  // Return the analysis result (e.g., sentiment labels)
    } catch (error) {
        console.error('Error analyzing document:', error);
        return { error: 'Failed to analyze document' };  // Handle errors
    }
};
