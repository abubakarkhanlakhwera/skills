from fastapi import FastAPI
from app.routers import items

app = FastAPI(title="FastAPI Vibe Coder", version="0.1.0")

app.include_router(items.router)


@app.get("/health")
async def health_check():
    return {"status": "ok"}
