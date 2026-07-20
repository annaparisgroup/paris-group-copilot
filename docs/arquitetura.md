# Arquitetura da Stack — Paris Group Copilot (ToFiscal)

Este documento justifica cada componente da stack em relação aos dois critérios
centrais do modelo de Venture Studio: **velocidade de criação de MVPs** e
**reutilização entre produtos do studio** (além de manutenção simples).

## Visão geral

| Camada | Tecnologia | Papel |
| --- | --- | --- |
| Frontend | Next.js | Interface do usuário (o que o contador vê e clica) |
| Backend | FastAPI (Python) | Regras de negócio e API |
| Banco de dados | PostgreSQL | Persistência de projetos e hipóteses |
| Orquestração | Docker Compose | Sobe toda a stack com um comando |

O contrato **OpenAPI** gerado automaticamente pelo FastAPI (`/docs`) é a fonte de
verdade entre backend e frontend — o que elimina retrabalho de integração.

## Frontend: Next.js (e não Remix)

- **Velocidade de MVP:** é o framework React mais popular do mercado, com enorme
  quantidade de componentes, tutoriais e exemplos prontos. Menos tempo
  reinventando, mais tempo validando hipótese.
- **Reutilização:** por ser o padrão de mercado, é fácil achar profissionais que
  já conhecem, e o mesmo conhecimento serve para todos os produtos do studio.
  O onboarding de novos devs cai para perto de zero.
- **Manutenção:** ecossistema maduro, documentação forte e atualizações
  frequentes — decisões de UI/roteamento já resolvidas pela comunidade.

## Backend: FastAPI / Python (e não Express / Node)

- **IA como diferencial:** Python é a linguagem onde vivem as principais
  bibliotecas de IA. Como os produtos do studio usam IA como multiplicador de
  execução, ter o backend em Python coloca a "cozinha" ao lado da "despensa" de
  IA — integração direta, sem pontes.
- **Velocidade de MVP:** o FastAPI gera o contrato OpenAPI automaticamente e
  valida os dados via Pydantic. Isso significa documentação e validação de graça,
  desde o primeiro endpoint.
- **Reutilização:** o mesmo padrão de routers + schemas serve para qualquer
  produto novo do studio; muda só o domínio (fiscal, gestão, etc.), não a forma.

## Banco de dados: PostgreSQL (e não SQLite)

- **Uso concorrente (motivo principal):** o ToFiscal terá vários contadores
  usando a plataforma ao mesmo tempo. O SQLite é um arquivo simples, ótimo para
  uso individual, mas trava quando muita gente escreve ao mesmo tempo. O
  PostgreSQL foi feito para acesso concorrente e não se perde com muitos usuários.
- **Confiabilidade e escala:** suporta o crescimento do produto sem troca de
  banco no meio do caminho — evita retrabalho e migração arriscada depois.
- **Reutilização:** é um banco relacional maduro que serve a todos os produtos do
  studio, com suporte nativo a JSON para dados semiestruturados de IA.

## Orquestração: Docker Compose

- **Velocidade de MVP:** `docker compose up` sobe frontend, backend e banco de uma
  vez, em qualquer máquina, sem "na minha máquina funciona".
- **Reutilização:** o mesmo padrão de `docker-compose.yml` é reaproveitado em cada
  novo produto — a infraestrutura vira template.

## Segurança

Segredos (senha do banco, etc.) ficam no arquivo `.env`, que **nunca** é
versionado (está no `.gitignore`). O repositório contém apenas `.env.example`
como template público — prática essencial, inclusive para conformidade com LGPD.
