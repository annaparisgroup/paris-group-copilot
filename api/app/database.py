import os

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# A URL de conexão vem de variável de ambiente (nunca fixa no código).
# Formato: postgresql://usuario:senha@host:porta/banco
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://tofiscal:tofiscal@db:5432/tofiscal",
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    """Abre uma conexão com o banco por requisição e fecha no final."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
