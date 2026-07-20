# Checkpoint — Módulo 1: Fundamentos de Studio, Produto e Stack

## 1. Venture Studio vs aceleradora/incubadora

Uma aceleradora ou incubadora ajuda de fora — dá capital, mentoria e apoio, mas
quem constrói é o fundador. O Venture Studio é co-fundador e co-construtor: ele
mesmo constrói os produtos, com um time próprio compartilhado entre vários
ventures. Como o mesmo time toca múltiplos produtos, as decisões de stack são
tomadas pensando em todos os produtos futuros — por isso a reutilização de time,
processos e tecnologia é estrutural, não acidental.

## 2. Ciclo de vida do produto com IA e conclusão do MVP

As etapas: Descoberta → MVP → Instrumentação → Qualidade do Modelo → Evolução.
O MVP é considerado concluído quando a hipótese de valor principal se torna
testável — não quando o produto está "completo". Instrumentação e Qualidade do
Modelo são etapas distintas do MVP.

## 3. Hipótese de valor (com mecanismo de IA concreto)

Contabilistas gastam semanas em apuração fiscal manual. Se um sistema com IA que
**classifica e extrai automaticamente os dados das notas fiscais** for adotado,
então contabilistas de escritórios pequenos reduzirão a apuração de ~14 dias para
~5 dias, porque a IA elimina a digitação e a conferência manual.
- Problema: apuração manual demorada.
- Público: contabilistas de escritórios pequenos.
- Mecanismo de IA: classificação e extração de dados de notas fiscais.
- Métrica de validação: tempo médio de apuração cai de ~14 para ~5 dias.

## 4. Risco de não definir contrato de API (OpenAPI)

Sem o contrato, frontend e backend divergem silenciosamente — cada lado assume um
formato diferente de dados, e o erro só aparece na integração, difícil de
rastrear. Num studio com múltiplos produtos, cada produto que reutiliza esses
componentes herda a inconsistência, multiplicando o retrabalho. É um risco de
arquitetura, não apenas de organização.

## 5. As cinco camadas da stack reutilizável

Frontend, Backend, Dados, IA e Deploy. Dados e IA não podem ser ignorados mesmo
num MVP inicial porque, sem persistir dados e sem definir a camada de IA (ex:
provedor de LLM, gestão de prompts) desde o começo, não há baseline para medir a
qualidade do modelo nas etapas seguintes do ciclo de vida. Sem baseline, a
etapa de Qualidade do Modelo fica impossível.

## 6. Por que "colocar IA em tudo" é erro crítico

Mesmo com capacidade técnica, IA sem hipótese de valor vira complexidade sem
retorno — ou seja, dívida técnica. No modelo de studio, o custo se multiplica:
IA desnecessária num MVP vira dívida em todos os produtos que herdam o stack.
Além disso, cada integração de IA sem critério de aceitação aumenta a superfície
de falha (alucinações, timeouts, respostas fora de política) sem diagnóstico
possível. O critério para usar IA não é "conseguir implementar", e sim ter uma
hipótese de valor mensurável que a justifique.
