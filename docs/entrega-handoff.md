# Entrega — Exercício "Ambiente e Primeiro Handoff" (níveis Guiado + Semi-guiado)

Repositório: https://github.com/annaparisgroup/paris-group-copilot

> Nota de transparência: as ferramentas internas da Paris Group `tn` (Tasknotes
> CLI) e AsyncMe não estão instaladas nesta máquina (o `tn` é um binário Rust de
> repositório privado; AsyncMe é um formato/serviço interno, não um CLI local).
> Para praticar o MESMO hábito de forma honesta, usamos substitutos versionados:
> `docs/tarefas.md` (rastreio de tarefas com status/checklist) e `docs/handoff.md`
> (handoff no formato AsyncMe: contexto → decisões pendentes → próximos passos).

## Repositório padronizado (feito)
- `README.md` com contexto do produto e link para o enquadramento.
- `.gitignore` (inclui `.env`, segredos fora do versionamento).
- `.github/pull_request_template.md` e `.github/ISSUE_TEMPLATE/feature.md` com
  seções de critério de aceitação e definição de pronto.

## Rastreio de tarefas — docs/tarefas.md (substituto de `tn list`)
Três tarefas com status e checklist:
1. Estrutura inicial do projeto — CONCLUÍDA (3 subitens [x])
2. Backend do produto — CONCLUÍDA (3 subitens [x])
3. Padrões do repositório — EM ANDAMENTO (1 subitem [x] concluído, 2 [ ] pendentes)

Ou seja: 3 tarefas, com status diferenciado (concluídas vs. em andamento) e pelo
menos um subitem marcado como concluído.

## Handoff — docs/handoff.md (formato AsyncMe)

**Contexto (o que está feito):** simuladores planejados e identidade visual do
ToFiscal prontos; no projeto do curso, repositório estruturado, backend com API
e templates de Issue/PR.

**Decisões pendentes (2, distintas):**
- Produto/negócio — Cobrança: como cobrar dos clientes (modelo de preço). Trava o
  lançamento comercial.
- Técnico — Usuários: como funciona o acesso/contas dos usuários. Em estudo: uma
  "área do colaborador" para viabilizar cobrança por colaborador.

**Próximos passos (com responsável e prazo):**
- Anna: pesquisar 3 preços de concorrentes — até 22/07 (amanhã).
- Anna: conferir como adicionar a área do colaborador — até 24/07 (sexta).

## Reflexão — qual decisão é mais crítica

A decisão técnica (usuários) é a mais crítica, por **dependência**: o modelo de
cobrança pretendido (por colaborador) depende de já estar definido como
funcionam os usuários/colaboradores. Não é possível decidir o preço por
colaborador antes de resolver a estrutura de usuários. (Não é por "precisar
deixar o produto completo antes" — a validação deve ser cedo, não após completude.)
