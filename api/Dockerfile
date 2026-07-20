FROM python:3.12-slim

WORKDIR /code

# Instala as dependências primeiro (aproveita cache do Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código da aplicação
COPY app ./app

# Sobe o servidor FastAPI acessível fora do container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
