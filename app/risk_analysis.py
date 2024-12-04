from app.model.risk_model import RiskAnalysisModel

def perform_risk_analysis(document: str):
    model = RiskAnalysisModel()
    risk_level = model.analyze_risk(document)
    return risk_level
