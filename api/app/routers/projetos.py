from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/projetos", tags=["projetos"])


@router.post("/", response_model=schemas.ProjetoOut)
def criar_projeto(payload: schemas.ProjetoCreate, db: Session = Depends(get_db)):
    projeto = models.Projeto(**payload.model_dump())
    db.add(projeto)
    db.commit()
    db.refresh(projeto)
    return projeto


@router.get("/", response_model=list[schemas.ProjetoOut])
def listar_projetos(db: Session = Depends(get_db)):
    return db.query(models.Projeto).all()


@router.get("/{projeto_id}", response_model=schemas.ProjetoOut)
def obter_projeto(projeto_id: int, db: Session = Depends(get_db)):
    projeto = db.query(models.Projeto).get(projeto_id)
    if projeto is None:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    return projeto
