# Entrega do Exercício — Estrutura Inicial Paris Group Copilot

Repositório: https://github.com/annaparisgroup/paris-group-copilot

## Passo 1 — Repositório criado no GitHub via gh CLI e clonado localmente

Comando executado:

```bash
gh repo create paris-group-copilot --public --clone --description "Copiloto de venture studio para discovery e execução de MVPs com IA"
```

Saída:

```
https://github.com/annaparisgroup/paris-group-copilot
```

Remote configurado (comprova o clone/vínculo):

```
origin  https://github.com/annaparisgroup/paris-group-copilot.git (fetch)
origin  https://github.com/annaparisgroup/paris-group-copilot.git (push)
```

## Passo 2 — Next.js inicializado com TypeScript, Tailwind, ESLint e App Router

Comando executado:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Saída final: `Success! Created paris-group-copilot at /Users/annalaura/www/cursos/paris-group-copilot`

Comprovação via package.json (Next.js + React + TypeScript + Tailwind):

```json
{
  "dependencies": {
    "next": "16.2.10",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "16.2.10"
  }
}
```

Uso do App Router comprovado pela presença de `src/app/` com `layout.tsx` e `page.tsx`.

## Passo 3 — Projeto sobe em localhost:3000

Comando: `npm run dev`

Saída do servidor:

```
▲ Next.js 16.2.10 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.4.122:3000
✓ Ready in 192ms
```

Página inicial verificada no navegador (tela de boas-vindas do Next.js renderizada).

## Passo 4 — Pastas src/app/projeto e src/app/hipotese com page.tsx

Estrutura confirmada:

```
src/app/
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── hipotese/
│   └── page.tsx
└── projeto/
    └── page.tsx
```

## Passo 5 — Conteúdo mínimo nas páginas e rotas navegáveis

`src/app/projeto/page.tsx`:

```tsx
export default function ProjetoPage() {
  return (
    <main>
      <h1>Projeto</h1>
      <p>Visão geral do projeto Paris Group Copilot.</p>
    </main>
  );
}
```

`src/app/hipotese/page.tsx`:

```tsx
export default function HipotesePage() {
  return (
    <main>
      <h1>Hipótese de Valor</h1>
      <p>Enquadramento do problema e hipótese mensurável.</p>
    </main>
  );
}
```

Rotas verificadas no navegador:
- `http://localhost:3000/projeto` → exibe "Projeto" + "Visão geral do projeto Paris Group Copilot."
- `http://localhost:3000/hipotese` → exibe "Hipótese de Valor" + "Enquadramento do problema e hipótese mensurável."

## Passo 6 — docs/enquadramento.md com contexto, dor, hipótese e métrica

Ver arquivo `docs/enquadramento.md`. Contém as quatro seções: Contexto, Dor do
Usuário, Hipótese de Valor (formato causal se/então/porque) e Métrica de
Validação (produtividade: 1 → 3 empresas apuradas no mesmo período, aumento de
3x, medido antes/depois da adoção).

## Passo 7 — Commit e push para o GitHub

Comando executado:

```bash
git add . && git commit -m "feat: estrutura inicial Next.js com paginas Projeto e Hipotese + enquadramento" && git push origin main
```

Saída:

```
[main (root-commit) bba9be5] feat: estrutura inicial Next.js com paginas Projeto e Hipotese + enquadramento
 22 files changed, 7167 insertions(+)
 ...
 create mode 100644 docs/enquadramento.md
 create mode 100644 src/app/hipotese/page.tsx
 create mode 100644 src/app/projeto/page.tsx
To https://github.com/annaparisgroup/paris-group-copilot.git
 * [new branch]      main -> main
```

Histórico local:

```
bba9be5 feat: estrutura inicial Next.js com paginas Projeto e Hipotese + enquadramento
```
