from fastapi import FastAPI
from pydantic import BaseModel
from utils import check_url
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class URLRequest(BaseModel):
    url: str

@app.post("/check")
def detect_phishing(data: URLRequest):
    result = check_url(data.url)
    return result