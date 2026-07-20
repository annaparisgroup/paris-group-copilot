from pydantic import BaseModel


# ---- Projeto ----
class ProjetoCreate(BaseModel):
    nome: str
    descricao: str | None = None


class ProjetoOut(ProjetoCreate):
    id: int

    class Config:
        from_attributes = True


# ---- Hipótese ----
class HipoteseCreate(BaseModel):
    projeto_id: int
    enunciado: str          # ex: "Se o sistema cruza dados, então o contador..."
    metrica: str            # ex: "1 -> 3 empresas apuradas no mesmo período"


class HipoteseOut(HipoteseCreate):
    id: int
    status: str

    class Config:
        from_attributes = True
