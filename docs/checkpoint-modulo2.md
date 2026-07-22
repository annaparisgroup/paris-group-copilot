# Checkpoint — Módulo 2: Colaboração com IA e Ferramentas

## 1. Pair programming com IA — papéis (ciclos curtos)
Os ciclos são curtos: planejar → implementar → revisar → iterar. O **humano**
define o objetivo, os critérios de aceitação e **revisa/valida** o resultado,
mantendo o contexto do produto e garantindo que o output está dentro da qualidade
e da política esperadas. O **agente** implementa e sugere. O humano dirige e
valida o tempo todo — não só no início.

## 2. claude-devkit init — passos e o que configura
Executa-se `claude-devkit init` na raiz do repositório. Ele gera a estrutura
padrão de configuração do projeto — arquivos de contexto (como CLAUDE.md/AGENTS.md
ou equivalente) que orientam o agente sobre escopo, stack e restrições. Assim o
agente tem contexto persistente entre sessões, sem precisar repetir instruções
manualmente. Esse arquivo é versionado com o código.

## 3. Tasknotes CLI vs GitHub Issues
São complementares. O `tn` opera localmente e é otimizado para o fluxo
**individual** de execução: rastrear tempo, sessões de trabalho e o contexto da
tarefa ativa (`tn start`, `tn log`). O GitHub Issues é orientado à **colaboração**
e ao estado público acordado com o time. Ou seja: `tn` registra o trabalho em
andamento (pessoal); Issues registra o estado combinado (time). Um não substitui
o outro.

## 4. Handoff (AsyncMe) — elementos mínimos
1. Contexto do que foi feito — decisões tomadas e o motivo.
2. Estado atual — o que está funcionando, o que está pendente, bloqueios conhecidos.
3. Próximos passos concretos — com responsável, prazo e critérios claros.

## 5. Erro mais comum no prompt e como os critérios ajudam
O erro mais comum é especificar o prompt de forma **vaga**, sem exemplos de
input/output esperado nem limites de comportamento. Os **critérios de aceitação**
tornam o resultado **verificável**: o agente sabe quando parar e o humano sabe
como validar. Exemplos concretos reduzem ambiguidade e tornam o output previsível
e testável.

## 6. PR template — para que serve e seções
Garante que cada pull request tenha contexto suficiente para revisão **sem
reunião**: o que mudou, por quê e como testar. Seções mínimas: descrição da
mudança; tarefa/Issue relacionada; como testar/validar; checklist de qualidade.
Num venture studio com IA, vale registrar se houve código gerado por agente e qual
critério de aceitação foi aplicado.

## 7. Código que funciona mas foge da arquitetura
Passar nos testes (funcionar) não basta. É na **revisão** (o humano tem a palavra
final) que se identifica o desvio, comparando com os critérios de aceitação e os
padrões do repositório. O checklist do PR funciona como portão: se o código não
segue a arquitetura definida, pede-se ajuste **antes do merge** — não se junta.
