# Entrega — Nível Semi-guiado: Documento de Enquadramento Completo

Repositório: https://github.com/annaparisgroup/paris-group-copilot
Arquivo: `docs/enquadramento.md` · Referenciado no `README.md` · Commitado.

## Conteúdo completo de docs/enquadramento.md

### 1. Contexto

Contabilistas de pequenas empresas, no momento de apuração fiscal dos seus
clientes. O uso acontece dentro do trabalho recorrente de fechamento mensal,
quando é preciso calcular impostos, comparar regimes tributários e organizar
obrigações de várias empresas ao mesmo tempo.

### 2. Dor do Usuário

Contabilistas perdem semanas por mês em cálculos manuais de impostos —
comparando regimes, alíquotas e emitindo CNDs empresa por empresa — porque
não existe hoje um sistema que cruze essas informações e devolva o resultado
automaticamente.

### 3. Hipótese de Valor (formato causal)

Se o sistema cruza as informações fiscais e devolve os resultados de apuração
automaticamente, então o contabilista conseguirá processar muito mais empresas
no mesmo período, porque deixa de refazer manualmente cálculos e comparações
que hoje consomem dias de trabalho.

### 4. Métrica de Validação (quantitativa)

Produtividade por contabilista: número de empresas apuradas no mesmo período.
Baseline (hoje, sem o sistema): ~1 empresa. Meta (com o sistema): ~3 empresas
no mesmo intervalo — um aumento de 3x. Medido comparando o volume de apurações
concluídas antes e depois da adoção da plataforma.

### 5. Fora de Escopo (MVP) — decisões deliberadas

1. **Integração automática com os sistemas da Receita** — depende de terceiros,
   certificados e homologações; não é necessário para provar a hipótese de
   ganho de produtividade.
2. **Assinatura digital de PDFs** — exige certificado digital / ICP-Brasil,
   uma camada técnica pesada que não é o coração da promessa do produto.
3. **Aplicativo mobile** — a apuração é feita no computador; mobile é conforto,
   não necessidade para o público-alvo no MVP.

## Referência no README

O `README.md` contém a seção "Documentação" com link para `docs/enquadramento.md`:

```markdown
## Documentação

- [Enquadramento do Problema](docs/enquadramento.md) — contexto, dor do usuário, hipótese de valor, métrica de validação e fora de escopo.
```

## Commit / push

```
0527a02 docs: adiciona secao Fora de Escopo e link no README
c7e7e93 docs: evidencias da entrega do exercicio
bba9be5 feat: estrutura inicial Next.js com paginas Projeto e Hipotese + enquadramento
```
