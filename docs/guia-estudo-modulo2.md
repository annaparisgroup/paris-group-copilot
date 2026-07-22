# 📗 Guia de Estudo — Módulo 2: Colaboração com IA e Ferramentas

> Material pra revisar quando quiser. Tente responder de cabeça antes de conferir.

---

## 🧠 Conceitos-chave (resumo relâmpago)

- **Pair programming com IA** = colaboração em **ciclos curtos**: planejar →
  implementar → revisar → iterar. **Humano** define objetivo + critérios e
  **revisa/valida**; **agente** implementa e sugere. O humano dirige o tempo todo.
- **Critérios de aceitação no prompt** = dizer *o que é sucesso* antes de construir.
  Pedido vago → entrega vaga. Verbo concreto + resultado verificável.
- **Claude Code** = a ferramenta que conecta a IA ao seu computador (lê, edita, roda).
- **DevKit** = configuração que ensina o agente as regras do projeto (stack,
  critérios, limites) — dá contexto persistente entre sessões.
- **Padrões GitHub** = README + template de Issue + template de PR = contrato de
  comunicação do time.
- **A IA não tem memória entre sessões** → externalizar contexto é essencial
  (anotar tarefas e handoffs).
- **Tasknotes (`tn`)** = lista pessoal do dia a dia (local, tempo, foco). 
  **GitHub Issues** = estado combinado com o time (público). São complementares.
- **Handoff (AsyncMe)** = bilhete com 3 partes: (1) o que foi feito + decisões,
  (2) estado atual/bloqueios, (3) próximos passos com responsável e prazo.
- **Loom** = vídeo curto de tela que substitui reunião de alinhamento.
- **Documentação assíncrona** (vídeo + handoff + PR linkados) = atualiza
  stakeholders sem reunião; gera confiança e acelera decisões.
- **Fluxo Git profissional:** branch → commit → push → PR → revisão → merge → limpar branch.

---

## ✅ As 6 perguntas do checkpoint (com respostas)

**1. Papéis no pair programming com IA (ciclos curtos)?**
Humano define objetivo + critérios de aceitação e revisa/valida (mantém o contexto
do produto). Agente implementa e sugere. Ciclos curtos: planejar → implementar →
revisar → iterar.

**2. Passos do `claude-devkit init` e o que configura?**
Roda-se na raiz do repositório. Gera arquivos de contexto do projeto (CLAUDE.md/
AGENTS.md ou equivalente) que orientam o agente sobre escopo, stack e restrições —
dando contexto persistente entre sessões, sem repetir instruções.

**3. Tasknotes CLI vs GitHub Issues?**
Complementares. `tn` = fluxo individual local (tempo, sessão, tarefa ativa).
Issues = colaboração/estado público acordado com o time. Um não substitui o outro.

**4. Elementos mínimos de um handoff?**
(1) O que foi feito + decisões e porquê; (2) estado atual, pendências e bloqueios;
(3) próximos passos concretos com responsável, prazo e critérios.

**5. Erro mais comum no prompt e como os critérios ajudam?**
Prompt vago, sem exemplos nem limites. Critérios de aceitação tornam o resultado
verificável (o agente sabe quando parar; você sabe como validar). Exemplos reduzem
ambiguidade.

**6. Para que serve o PR template e quais seções?**
Garante contexto suficiente para revisar sem reunião. Seções: o que mudou; tarefa/
Issue relacionada; como testar; checklist de qualidade. (Bônus studio+IA: registrar
se houve código gerado por agente e qual critério foi aplicado.)

---

## 🎯 Treine sozinha (questões novas — gabarito no fim)

**Q1.** Você pede pro agente: "melhora essa tela". Por que esse pedido é ruim?
Reescreva com critérios claros.

**Q2.** V ou F: "Se a IA gerou um código e ele passou nos testes, pode fazer merge
direto." Justifique.

**Q3.** Seu colega perdeu o contexto de uma tarefa que ficou parada 3 dias. Qual
ferramenta/prática teria evitado isso, e por quê?

**Q4.** Cite as 3 partes de um bom handoff.

**Q5.** Por que abrir um PR (em vez de commitar direto no main) é mais seguro num time?

**Q6.** Um investidor quer entender a sprint sem reunião. Quais 3 artefatos você
entregaria, e o que cada um responde?

**Q7.** Por que anotar tarefas/decisões é ainda mais importante quando uma IA
participa do trabalho?

---

### 🔑 Gabarito (tente antes de olhar!)

**Q1.** "Melhora essa tela" é vago — não diz o que melhorar nem como saber se
ficou bom. Melhor: "deixa o botão Entrar na cor da marca (azul→roxo) e centraliza
o formulário na tela."

**Q2.** Falso. Passar nos testes (funcionar) não basta — o código pode fugir da
arquitetura. Na revisão, compara-se com os critérios e padrões do repo; se não
seguir, pede-se ajuste antes do merge.

**Q3.** Tasknotes (`tn`) / anotar a tarefa com contexto e logs — a informação fica
registrada e qualquer um retoma sem depender de memória.

**Q4.** (1) O que foi feito + decisões; (2) estado atual/bloqueios; (3) próximos
passos com responsável e prazo.

**Q5.** Porque o PR cria um ponto de revisão antes de mexer na versão principal —
o time confere a mudança e evita quebrar o código de todo mundo. O branch é o
rascunho seguro.

**Q6.** Vídeo (Loom) → como está funcionando; Handoff → o que foi decidido e o que
está travado; PR → o que mudou no código. Linkados entre si.

**Q7.** Porque a IA não tem memória entre sessões — ela depende de anotações
externas pra continuar de onde parou. Sem isso, recomeça do zero toda vez.

---

*Bons estudos, Anna! — Cleiton 💡*
