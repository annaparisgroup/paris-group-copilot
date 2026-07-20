from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/hipoteses", tags=["hipoteses"])


@router.post("/", response_model=schemas.HipoteseOut)
def criar_hipotese(payload: schemas.HipoteseCreate, db: Session = Depends(get_db)):
    projeto = db.query(models.Projeto).get(payload.projeto_id)
    if projeto is None:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    hipotese = models.Hipotese(**payload.model_dump())
    db.add(hipotese)
    db.commit()
    db.refresh(hipotese)
    return hipotese


@router.get("/", response_model=list[schemas.HipoteseOut])
def listar_hipoteses(db: Session = Depends(get_db)):
    return db.query(models.Hipotese).all()
