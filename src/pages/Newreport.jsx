import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { analyzeDocument } from '../services/aiService';
import Header from "../components/common/Header";

const Newreport = ({ setRiskData }) => {
  const [file, setFile] = useState(null);  // State to store the uploaded file
  const [loading, setLoading] = useState(false);  // State to show loading during analysis
  const [result, setResult] = useState(null); 

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);  // Store the selected file
  };

  // Handle form submission (analyze the file)
  const handleSubmit = async () => {
    if (!file) {
      alert('Please upload a PDF file!');
      return;
    }

    setLoading(true);  // Set loading to true while the file is being analyzed

    try {
      const analysisResult = await analyzeDocument(file);  // Call the analyzeDocument function
      setResult(analysisResult);  // Store the result of the analysis
    } catch (error) {
      console.error('Error submitting file:', error);
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
    <Header title={"New Project"} />

    <div>
      <div>
        <input
          type="file"
          accept=".pdf"  // Accept only PDF files
          onChange={handleFileChange}
        />
      </div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Analyzing...' : 'Submit for Sentiment Analysis'}
      </button>

      {result && (
        <div>
          <h3>Analysis Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>  {/* Display result as JSON */}
        </div>
      )}
    </div>
     
    </div>
  )
}

export default Newreport
