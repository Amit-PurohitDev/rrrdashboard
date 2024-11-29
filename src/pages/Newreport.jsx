import React, { useState } from 'react';
import Header from "../components/common/Header";

const Newreport = () => {
    const [file, setFile] = useState(null);
    
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (file) {
        alert(`File "${file.name}" has been submitted.`);
      } else {
        alert("Please select a file to upload.");
      }
    };
  return (





    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
    <Header title={"New Project"} />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Upload Project Document</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </main>
</div>
  )
}

export default Newreport
