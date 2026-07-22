# Checkpoint — Módulo 3: Scaffolding e Estrutura do Produto

## 1. O que é o PageShell e que problema resolve
PageShell é uma ferramenta de scaffolding que gera a estrutura inicial de um app
Next.js/React com convenções pré-definidas (rotas, componentes, padrões). No
venture studio, resolve o problema de reutilização: sem scaffolding padronizado,
cada MVP começa do zero com decisões inconsistentes. Ele economiza tempo de setup
e garante que todos os projetos do studio sigam os mesmos padrões.

## 2. Estrutura de diretórios e responsabilidades
- `app/` (ou `pages/`) — as rotas/páginas (telas com endereço).
- `components/` — componentes reutilizáveis (peças de tela, sem acoplamento a rota).
- `lib/` — código compartilhado: clientes de API, utilitários e tipos.
A separação de responsabilidades (UI separada de lógica) facilita manutenção e
onboarding de novos membros.

## 3. Componente de página vs componente reutilizável
- Componente de página: associado a uma **rota**, orquestra layout e dados, fica
  em `app/`/`pages/`.
- Componente reutilizável: sem acoplamento a rota, recebe props, usado em vários
  lugares, fica em `components/`.
Misturar os dois cria acoplamento desnecessário e dificulta teste e reuso.

## 4. Argumento contra criar a estrutura manualmente
Estrutura manual não garante consistência entre projetos do studio — depende de
quem criou e do que lembrou. O scaffolding automatizado embute decisões testadas
e documentadas implicitamente. Sem convenções padronizadas, o onboarding é mais
lento e as divergências entre projetos geram retrabalho de integração.

## 5. Conexão com o contrato OpenAPI
O scaffolding cria uma camada de clients/serviços (ex: `lib/api`) onde as chamadas
à API são centralizadas. Centralizar num diretório específico permite atualizar o
contrato sem alterar os componentes de UI, e evita o erro comum de frontend e
backend divergirem por chamadas espalhadas pelo código.

## 6. Primeiros passos para adaptar ao Paris Group Copilot / ToFiscal
1. Identificar/criar as rotas alinhadas ao domínio (ex: `/apuracoes`, `/clientes`,
   `/projects`, `/backlog`).
2. Adaptar/criar componentes de domínio (ex: card de apuração, `ProjectCard`,
   `BacklogItem`) dentro da estrutura gerada.
3. Registrar as decisões de adaptação (via README/ADR ou Tasknotes) para manter
   rastreabilidade das mudanças sobre o scaffolding base.
