from sqlalchemy import Column, ForeignKey, Integer, String, Text

from .database import Base


class Projeto(Base):
    """Um projeto/produto que o studio está construindo (ex: ToFiscal)."""

    __tablename__ = "projetos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    descricao = Column(Text, nullable=True)


class Hipotese(Base):
    """Uma hipótese de valor ligada a um projeto."""

    __tablename__ = "hipoteses"

    id = Column(Integer, primary_key=True, index=True)
    projeto_id = Column(Integer, ForeignKey("projetos.id"), nullable=False)
    enunciado = Column(Text, nullable=False)          # "Se... então... porque..."
    metrica = Column(Text, nullable=False)            # métrica de validação
    status = Column(String, default="rascunho")       # rascunho | validada | invalidada
