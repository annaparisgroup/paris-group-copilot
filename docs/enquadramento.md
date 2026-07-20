# Enquadramento do Problema — Paris Group Copilot (ToFiscal)

## Contexto

Contabilistas de pequenas empresas, no momento de apuração fiscal dos seus
clientes. O uso acontece dentro do trabalho recorrente de fechamento mensal,
quando é preciso calcular impostos, comparar regimes tributários e organizar
obrigações de várias empresas ao mesmo tempo.

## Dor do Usuário

Contabilistas perdem semanas por mês em cálculos manuais de impostos —
comparando regimes, alíquotas e emitindo CNDs empresa por empresa — porque
não existe hoje um sistema que cruze essas informações e devolva o resultado
automaticamente.

## Hipótese de Valor

Se o sistema cruza as informações fiscais e devolve os resultados de apuração
automaticamente, então o contabilista conseguirá processar muito mais empresas
no mesmo período, porque deixa de refazer manualmente cálculos e comparações
que hoje consomem dias de trabalho.

## Métrica de Validação

Produtividade por contabilista: número de empresas apuradas no mesmo período de
tempo. Baseline (hoje, sem o sistema): ~1 empresa. Meta (com o sistema): ~3
empresas no mesmo intervalo — um aumento de 3x. Medido comparando o volume de
apurações concluídas antes e depois da adoção da plataforma.

## Fora de Escopo (MVP)

Estas funcionalidades são úteis, mas ficam de fora da primeira versão de
propósito — para validar o valor central (economizar tempo do contabilista)
sem inflar o escopo:

1. **Integração automática com os sistemas da Receita** — depende de terceiros,
   certificados e homologações; não é necessário para provar a hipótese de
   ganho de produtividade.
2. **Assinatura digital de PDFs** — exige certificado digital / ICP-Brasil,
   uma camada técnica pesada que não é o coração da promessa do produto.
3. **Aplicativo mobile** — a apuração é feita no computador; mobile é conforto,
   não necessidade para o público-alvo no MVP.
