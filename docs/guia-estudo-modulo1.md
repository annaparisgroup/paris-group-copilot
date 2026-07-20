# 📘 Guia de Estudo — Módulo 1: Venture Studio, Produto com IA e Arquitetura de Stack

> Material pra revisar quando quiser. Primeiro tente responder de cabeça, depois confira.

---

## 🧠 Conceitos-chave (resumo relâmpago)

- **Venture Studio** = co-fundador e co-construtor. Constrói vários produtos com time compartilhado, reaproveitando "a máquina" (stack, processos). Diferente de aceleradora/incubadora, que só ajuda de fora.
- **IA no studio** = multiplicador de execução (acelera ideia → evidência). Mas IA sem hipótese = complexidade sem retorno = **dívida técnica**.
- **Ciclo de vida do produto com IA** (5 etapas): Descoberta → MVP → Instrumentação → Qualidade do Modelo → Evolução.
- **MVP concluído** = quando a hipótese de valor já pode ser **testada** (não quando o produto está "completo").
- **Hipótese de valor** precisa de 4 coisas: **problema + público + mecanismo de IA concreto + métrica**. Formato causal: *"Se [intervenção], então [público] vai [resultado com número], porque [mecanismo]."*
- **Métrica honesta** = mede o VALOR prometido (não vaidade). Baseline (onde está hoje) → Meta (aposta defensável). Evite prometer 100%/zerar.
- **Stack reutilizável (5 camadas):** Frontend · Backend · Dados · IA · Deploy.
- **Contrato de API (OpenAPI)** = fonte da verdade entre frontend e backend. Ignorar = divergência silenciosa + retrabalho que se multiplica no studio.
- **Segredos** nunca no Git (`.env` no `.gitignore`; só `.env.example` público).

---

## ✅ As 6 questões do checkpoint (com respostas)

**1. O que diferencia um Venture Studio de uma aceleradora/incubadora, e como isso impacta stack e time?**
Aceleradora/incubadora ajuda de fora (capital, mentoria). O studio é co-fundador e co-construtor: constrói os produtos com time próprio compartilhado. Como o mesmo time toca vários produtos, as decisões de stack pensam em todos os produtos futuros — reutilização é estrutural, não acidental.

**2. Quais as etapas do ciclo de vida com IA, e quando o MVP está concluído?**
Descoberta → MVP → Instrumentação → Qualidade do Modelo → Evolução. O MVP acaba quando a hipótese de valor principal fica testável (não quando o produto está "completo"). Instrumentação e Qualidade do Modelo são etapas separadas do MVP.

**3. Escreva uma hipótese de valor válida (problema + público + mecanismo de IA + métrica).**
Ex.: "Contabilistas gastam semanas em apuração manual. Se um sistema com IA que **classifica e extrai os dados das notas fiscais** for adotado, então contabilistas de escritórios pequenos reduzirão a apuração de ~14 para ~5 dias, porque a IA elimina digitação e conferência manual." (mecanismo concreto = classificar/extrair, não "usar IA pra melhorar").

**4. Risco de não definir contrato de API antes do frontend, num studio?**
Frontend e backend divergem silenciosamente; o erro só aparece na integração e é difícil de rastrear. No studio, cada produto que reaproveita os componentes herda a inconsistência → retrabalho multiplicado. É risco de arquitetura, não só de organização.

**5. Quais as 5 camadas da stack, e por que dados e IA não podem ser ignorados no MVP?**
Frontend, Backend, Dados, IA, Deploy. Sem persistir dados e sem definir a IA desde o início, não há **baseline** para medir a qualidade do modelo depois — a etapa de Qualidade do Modelo fica cega.

**6. Por que "colocar IA em tudo" é erro crítico, mesmo com capacidade técnica?**
IA sem hipótese de valor vira complexidade sem retorno = dívida técnica, que se multiplica entre produtos no studio. Cada IA sem critério de aceitação aumenta a chance de falha (alucinação, timeout) sem diagnóstico. O critério é ter hipótese que justifique a IA — não "conseguir implementar".

---

## 🎯 Treine sozinha (questões novas — gabarito no fim)

**Q1.** Uma amiga diz: "Vou usar IA no meu app de delivery pra melhorar a experiência." O que está errado nessa frase do ponto de vista de produto? Como você reescreveria?

**Q2.** Qual destas é uma métrica de VALOR (não de vaidade)?
(a) número de downloads do app
(b) número de curtidas
(c) redução de 30% no tempo médio de checkout
(d) número de seguidores

**Q3.** Complete a hipótese com uma meta defensável: "Uma escola perde 40% dos alunos nas primeiras 2 semanas de um curso online. Se [intervenção com IA], então os alunos vão [resultado com número], porque [mecanismo]."

**Q4.** Verdadeiro ou falso: "O MVP só está pronto quando todas as funcionalidades planejadas estão bonitas e completas." Justifique.

**Q5.** Você vai criar 3 produtos SaaS diferentes no próximo ano. Por que faz sentido decidir a stack pensando nos 3, e não só no primeiro?

**Q6.** Cite 2 coisas que você colocaria no "Fora de Escopo" de um MVP de um app de agendamento para salões de beleza — e por quê.

**Q7.** Por que guardar a senha do banco de dados dentro do código (versionado no Git) é um erro grave? O que fazer no lugar?

**Q8.** No ciclo de vida, por que "Instrumentação" deve ser planejada JUNTO com o MVP, e não depois?

---

### 🔑 Gabarito (tente antes de olhar!)

**Q1.** "Melhorar a experiência" é vago (sem público, sem mecanismo, sem métrica). Reescrever com mecanismo concreto + métrica: ex. "A IA **recomenda** pratos com base no histórico do cliente, aumentando o ticket médio em 15%."

**Q2.** (c) — é a única que mede o valor entregue. As outras medem vaidade/adoção.

**Q3.** Exemplo: "Se um assistente de IA que **envia lembretes personalizados e responde dúvidas** for usado, então a evasão nas 2 primeiras semanas cai de 40% para ~25%, porque o aluno se sente acompanhado e não trava sozinho." (meta defensável, não "zerar evasão").

**Q4.** Falso. O MVP está pronto quando a hipótese de valor fica testável — não quando está completo/bonito. "Completo" pode ser desperdício antes de validar.

**Q5.** Porque o time e a stack são compartilhados. Decidir pensando nos 3 evita reescrever a fundação a cada produto, reduz onboarding e reaproveita componentes — o custo de começar o próximo produto cai de semanas para horas.

**Q6.** Exemplos: (1) app mobile nativo — o dono acessa pelo navegador no MVP; (2) integração com meios de pagamento — valida primeiro o agendamento, cobra depois. O critério: cortar o que não é necessário pra testar a hipótese central.

**Q7.** Se a senha vai pro Git, qualquer um com acesso ao repositório (ainda mais público) a vê — risco de segurança e de LGPD. No lugar: `.env` (fora do Git, no `.gitignore`) e só um `.env.example` público como molde.

**Q8.** Porque se você não sabe COMO vai medir, não sabe O QUE construir. Sem instrumentação junto, você lança o MVP e não consegue provar (nem refutar) a hipótese — fica no achismo.

---

*Bons estudos, Anna! Qualquer dúvida, é só me chamar. — Cleiton 💡*
