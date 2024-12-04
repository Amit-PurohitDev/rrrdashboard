from flask import Flask, render_template, request
from app.risk_analysis import perform_risk_analysis

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'document' not in request.files:
        return "No file part", 400
    file = request.files['document']
    if file.filename == '':
        return "No selected file", 400
    
    document = file.read().decode("utf-8")
    risk_level = perform_risk_analysis(document)
    return f"Risk Level: {risk_level}"

if __name__ == '__main__':
    app.run(debug=True)
