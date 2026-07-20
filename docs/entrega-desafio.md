# Entrega — Nível Desafio: Stack Completa do Paris Group Copilot

Repositório: https://github.com/annaparisgroup/paris-group-copilot

## Restrição 1 — Backend FastAPI roda em `api/` (monorepo)

Estrutura:

```
paris-group-copilot/
├── api/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app/
│       ├── main.py
│       ├── database.py
│       ├── models.py         # Projeto, Hipotese (SQLAlchemy)
│       ├── schemas.py        # Pydantic (gera OpenAPI)
│       └── routers/
│           ├── projetos.py
│           └── hipoteses.py
├── docker-compose.yml
├── .env.example              # template público (sem segredos)
└── docs/arquitetura.md
```

## Restrição 2 — PostgreSQL configurado via Docker Compose

`docker compose up --build` sobe os serviços. Estado real:

```
NAME                        IMAGE                     SERVICE   STATUS
paris-group-copilot-api-1   paris-group-copilot-api   api       Up (porta 8000)
paris-group-copilot-db-1    postgres:16               db        Up (healthy) (porta 5432)
```

O `docker-compose.yml` define dois serviços: `db` (postgres:16, com healthcheck)
e `api` (build de ./api), com `depends_on: db (service_healthy)`.

## Restrição 3 — Contrato OpenAPI gerado automaticamente, acessível em /docs

- Swagger UI acessível em `http://localhost:8000/docs` (título "Paris Group
  Copilot API", OpenAPI 3.1).
- Health check: `GET http://localhost:8000/health` → `{"status":"ok"}`

## Restrição 4 — Contrato cobre pelo menos 2 endpoints das entidades do produto

Endpoints publicados no OpenAPI (`/openapi.json`):

```
GET   /health
GET   /projetos/
POST  /projetos/
GET   /projetos/{projeto_id}
GET   /hipoteses/
POST  /hipoteses/
```

Teste real de ponta a ponta (POST cria, GET lê de volta do PostgreSQL):

```
POST /projetos/  {"nome":"ToFiscal","descricao":"Apuracao fiscal automatica"}
-> {"nome":"ToFiscal","descricao":"Apuracao fiscal automatica","id":1}

POST /hipoteses/ {"projeto_id":1,"enunciado":"Se o sistema cruza dados fiscais,
                  entao o contabilista apura 3x mais empresas",
                  "metrica":"1 -> 3 empresas no mesmo periodo"}
-> {...,"id":1,"status":"rascunho"}

GET /projetos/   -> [{"nome":"ToFiscal",...,"id":1}]
GET /hipoteses/  -> [{...,"id":1,"status":"rascunho"}]
```

## Restrição 5 — docs/arquitetura.md justifica cada componente (não genérico)

Ver `docs/arquitetura.md`. Justificativas específicas de Venture Studio:

- **Next.js (e não Remix):** framework React mais popular → mais componentes e
  tutoriais prontos (velocidade de MVP) e fácil achar devs que já conhecem
  (reutilização/onboarding em múltiplos produtos do studio).
- **FastAPI/Python (e não Express/Node):** Python é onde vivem as bibliotecas de
  IA — como o studio usa IA como diferencial, o backend fica ao lado dessas
  ferramentas. Contrato OpenAPI + validação Pydantic de graça (velocidade).
- **PostgreSQL (e não SQLite):** o ToFiscal terá vários contadores usando ao mesmo
  tempo; SQLite trava com escrita concorrente, PostgreSQL foi feito para acesso
  concorrente e escala sem troca de banco depois (motivo principal).
- **Docker Compose:** `docker compose up` sobe tudo em qualquer máquina; o mesmo
  `docker-compose.yml` vira template reaproveitável entre produtos.

## Segurança

Segredos ficam em `.env` (no `.gitignore`, nunca versionado); apenas
`.env.example` vai para o repositório. Alinhado a boas práticas e LGPD.

## Commits

```
feat: backend FastAPI + PostgreSQL via Docker Compose + docs/arquitetura
docs: entrega nivel semi-guiado
docs: adiciona secao Fora de Escopo e link no README
docs: evidencias da entrega do exercicio
feat: estrutura inicial Next.js com paginas Projeto e Hipotese + enquadramento
```
