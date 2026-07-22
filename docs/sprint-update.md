# Atualização de Sprint — ToFiscal / Paris Group Copilot

_Atualização assíncrona para stakeholders (sem reunião)._

## Contexto de negócio
O ToFiscal ajuda contabilistas de escritórios pequenos a fazer apuração fiscal
mais rápido, automatizando cálculos e cruzamento de dados. Meta de valor:
reduzir o tempo de apuração de semanas para dias (produtividade de ~1 para ~3
empresas no mesmo período).

## O que entregamos nesta sprint
- Estrutura do produto (Next.js) com páginas de Projeto e Hipótese.
- Backend (FastAPI + PostgreSQL) com API documentada (OpenAPI) e endpoints de
  Projeto e Hipótese testados de ponta a ponta.
- Área do colaborador (tela de login) com a identidade visual da Paris Group.
- Padrões de repositório: templates de Issue e PR.

## Principais decisões técnicas
1. Stack reutilizável (Next.js + FastAPI + PostgreSQL + Docker) — para reaproveitar
   entre produtos do studio e acelerar próximos MVPs.
2. PostgreSQL (e não SQLite) — porque vários contadores usarão a plataforma ao
   mesmo tempo (acesso concorrente).
3. Fundo/login como demonstração visual — a autenticação segura de verdade ficou
   para a próxima etapa (decisão consciente).

## Bloqueios ativos (owner + prazo)
- **Autenticação real e segura** — owner: Anna — prazo: 28/07. Bloqueia o login
  de produção e a cobrança por colaborador.
- **Modelo de cobrança (por colaborador)** — owner: Anna — prazo: 24/07. Depende
  da estrutura de usuários acima.

## Próximos passos
- Anna: definir estrutura de usuários/autenticação — até 28/07.
- Anna: pesquisar 3 preços de concorrentes — até 22/07.
- Anna: substituir a logo recriada pela oficial — até 23/07.

## Links
- Demo (Loom): _[gravar vídeo de 2-3 min e colar o link aqui]_
- Handoff detalhado: `docs/handoff.md`
