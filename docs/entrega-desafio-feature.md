# Entrega — Desafio: Feature "Área do Colaborador" via Pair Programming com IA

Repositório: https://github.com/annaparisgroup/paris-group-copilot

> Nota de transparência: `tn` e AsyncMe (ferramentas internas da Paris Group) não
> estão instaladas nesta máquina. Rastreio de tarefas em `docs/tarefas.md` e
> handoff em formato AsyncMe abaixo. O scaffold foi gerado via Claude Code (o
> agente desta sessão) sob direção da Anna.

## 1. Prompt usado no Claude Code (com critérios de aceitação)

A Anna dirigiu o agente com este pedido (formato "o que mostrar + como sei que
está pronto"):

- **O que a página deve mostrar:** uma área do colaborador com usuário e senha;
  ao entrar, o colaborador vai para o ToFiscal.
- **Critérios de aceitação:**
  - a identidade visual deve seguir a marca Paris Group (dark, azul/roxo, logo);
  - área com campos de usuário e senha para preencher;
  - sem erros (validação de campos vazios).

Iterações (o ciclo de revisão do pair programming):
1. 1ª versão: card branco neutro → **rejeitada** (não seguia a marca).
2. 2ª versão: card dark + cores Paris Group (azul-índigo/roxo, botão em degradê) →
   aprovada no visual.
3. 3ª versão: adicionada a arte da logo (monograma "PG" + wordmark) → **aceita**.

## 2. O que o Claude Code gerou (e o que foi aceito/rejeitado)

- `src/app/colaborador/page.tsx` — tela de login (client component): formulário
  com usuário/senha, validação de campos vazios, fundo animado com blobs
  (aproximação de "3D"), card dark com identidade Paris Group e arte da logo.
- `src/app/tofiscal/page.tsx` — área interna (placeholder) para onde o login leva.
- **Aceito:** layout dark, cores da marca, botão em degradê azul→roxo, logo em arte.
- **Rejeitado/ajustado:** o card branco inicial (trocado por dark); logo recriada
  em vetor (a oficial em imagem entra depois).

## 3. Estado das tarefas (docs/tarefas.md)

- Tarefa 4 — Área do colaborador: 3 subitens concluídos [x], 2 pendentes [ ]
  (autenticação real segura; trocar logo recriada pela oficial).

## 4. Decisões técnicas tomadas durante o processo

- Rota `/colaborador` para o login e `/tofiscal` para a área interna (App Router).
- Componente de cliente ("use client") por causa do formulário interativo.
- Fundo "3D" feito com CSS (gradiente + animação) em vez de WebGL, para manter o
  MVP leve.
- **Decisão adiada (consciente):** autenticação de verdade (hash de senha, sessão,
  contas) NÃO foi implementada — é a decisão técnica pendente do produto. A tela
  atual é uma demonstração de fluxo, não um login seguro.

## 5. O que falta para a feature estar pronta para revisão (próximos passos)

Cada item com responsável e prazo estimado:
- **Anna:** implementar autenticação real e segura (backend), ligada à estrutura
  de usuários — **até 28/07** (próxima semana).
- **Anna:** substituir a logo recriada pela oficial (arquivo em `public/`) — **até 23/07**.
- **Anna:** definir o modelo de cobrança (por colaborador), que depende da
  estrutura de usuários — **até 24/07 (sexta)**.

## 6. Decisão mais crítica

A decisão mais crítica é a **técnica (autenticação / estrutura de usuários)**, por
dependência: o modelo de cobrança pretendido (por colaborador) só pode ser
definido depois de resolver como os usuários/colaboradores funcionam. Ou seja,
essa decisão desbloqueia tanto a segurança do login quanto a decisão de produto
(preço). Deve ser resolvida primeiro. (Não por "precisar deixar tudo completo"
antes — a validação deve acontecer cedo.)
