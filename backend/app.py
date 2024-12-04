from fastapi import FastAPI, UploadFile, File
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Load a Hugging Face model for classification
model = pipeline("text-classification", model="facebook/bart-large-mnli")

origins = [
    "http://localhost:5173",  # Your frontend's development URL
    "http://localhost:5174",  # Your frontend's development URL
    "http://127.0.0.1:5173",  # In case you're accessing via 127.0.0.1 instead of localhost
    "https://myfrontend.com", # Your deployed frontend URL
]

# Adding CORS middleware to your app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Specifies which origins are allowed to make requests
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.post("/analyze/")
async def analyze_risk(file: UploadFile = File(...)):
    """
    Endpoint to analyze a document for risks.
    """
    # Read and decode the uploaded file
    content = await file.read()
    text = content.decode("utf-8")

    # Use the Hugging Face model to perform classification
    results = model(text)
    return {"analysis": results}
