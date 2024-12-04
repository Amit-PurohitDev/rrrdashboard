from transformers import pipeline

class RiskAnalysisModel:
    def __init__(self):
        self.model = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

    def analyze_risk(self, document: str):
        candidate_labels = ["low", "medium", "high"]
        result = self.model(document, candidate_labels)
        return result['labels'][0]
