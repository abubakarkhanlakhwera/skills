from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/items", tags=["items"])


class ItemResponse(BaseModel):
    id: int
    name: str


@router.get("/", response_model=list[ItemResponse])
async def list_items():
    # Replace with real DB query
    return [{"id": 1, "name": "Hello Copilot! Follow SKILL.md rules."}]
