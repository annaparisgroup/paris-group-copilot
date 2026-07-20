from fastapi import FastAPI

from . import models
from .database import Base, engine
from .routers import hipoteses, projetos

# Cria as tabelas no banco na primeira subida (para o MVP; em produção usaríamos migrações).
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Paris Group Copilot API",
    description="Backend do ToFiscal — projetos e hipóteses de valor.",
    version="0.1.0",
)


@app.get("/health", tags=["infra"])
def health():
    return {"status": "ok"}


app.include_router(projetos.router)
app.include_router(hipoteses.router)
