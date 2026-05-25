import joblib

model = joblib.load("model.pkl")

def check_url(url):

    prediction = model.predict([url])[0]

    if prediction == "phishing":
        status = "Phishing"
        score = 90
        reasons = ["AI detected suspicious URL"]

    else:
        status = "Safe"
        score = 10
        reasons = ["AI detected safe URL"]

    return {
        "url": url,
        "status": status,
        "score": score,
        "reasons": reasons
    }