# 📙 Guia de Estudo — Módulo 3: Scaffolding e Estrutura do Produto

> Material pra revisar quando quiser. Tente responder de cabeça antes de conferir.

---

## 🧠 Conceitos-chave (resumo relâmpago, bem simples)

- **Scaffolding** = montar o "esqueleto" do produto (pastas, configuração, rotas)
  antes de escrever a lógica. É levantar as paredes antes de decorar a casa.
- **PageShell** = a ferramenta da Paris Group que **gera esse esqueleto pronto**,
  já no padrão do studio. Economiza tempo E deixa todos os produtos iguais
  (padronizados) — qualquer um entra em qualquer projeto e sabe onde tudo está.
- **As 3 pastas principais:**
  - `app/` (ou `pages/`) → as **páginas/rotas** (telas com endereço, ex: `/login`)
  - `components/` → as **peças reutilizáveis** de tela (ex: `ProjectCard`)
  - `lib/` → o **código compartilhado** (a "cozinha": clientes de API, utilidades, tipos)
- **Componente de página** = preso a uma **rota** (um endereço). Fica em `app/`.
- **Componente reutilizável** = NÃO preso a endereço; usado em **vários lugares**;
  recebe props. Fica em `components/`. (Constrói uma vez, usa muitas.)
- **Conexão com o backend** = fica centralizada em `lib/api`. Juntar todas as
  chamadas num lugar só = se o backend muda, você ajusta UMA vez (não caça no
  código todo). Evita frontend e backend divergirem.
- **Cliente tipado (do OpenAPI)** = o "garçom" que já sabe o formato dos dados; se
  frente e trás discordarem, o erro aparece ao compilar (cedo), não pro usuário.
- **CI (o robozinho)** = confere o código automaticamente (lint + build) a cada PR,
  antes de entrar na `main`. **Branch protection** = a regra que obriga a passar.
- **Adaptar o esqueleto ao seu produto:** (1) criar as rotas do seu domínio,
  (2) criar seus componentes, (3) anotar as decisões (README/task).

---

## ✅ As 6 perguntas do checkpoint (com respostas)

**1. O que é PageShell e que problema resolve?**
Ferramenta de scaffolding que gera a estrutura inicial (Next.js/React) com
convenções prontas. Resolve reutilização: sem ele, cada MVP começa do zero com
decisões inconsistentes. Economiza setup e padroniza os projetos do studio.

**2. Estrutura de pastas e responsabilidades?**
`app/`/`pages/` (rotas), `components/` (peças reutilizáveis), `lib/` (código
compartilhado: API, utils, tipos). Separar responsabilidades facilita manutenção
e onboarding.

**3. Componente de página vs reutilizável?**
Página: preso a uma rota, orquestra layout/dados, fica em `app/`. Reutilizável:
sem rota, recebe props, usado em vários lugares, fica em `components/`. Misturar
cria acoplamento e dificulta reuso.

**4. Argumento contra montar a estrutura na mão?**
Manual não garante consistência — depende de quem fez e do que lembrou. Scaffolding
embute decisões testadas. Sem padrão: onboarding lento + retrabalho de integração.

**5. Conexão com o contrato OpenAPI — onde fica?**
Numa camada de clients (ex: `lib/api`) que centraliza as chamadas. Centralizar
deixa atualizar o contrato sem mexer na UI e evita frontend/backend divergirem.

**6. Primeiros passos pra adaptar ao produto?**
(1) Criar rotas do domínio (ex: `/apuracoes`, `/clientes`); (2) criar componentes
de domínio (ex: card de apuração); (3) registrar as decisões (README/Tasknotes).

---

## 🎯 Treine sozinha (questões novas — gabarito no fim)

**Q1.** O que significa "scaffolding" em uma frase simples?

**Q2.** Onde ficam, no projeto: (a) as páginas, (b) as peças reutilizáveis,
(c) o código compartilhado/API?

**Q3.** Um cartão que mostra um cliente e aparece 30 vezes na tela — é um
componente de página ou reutilizável? Por quê?

**Q4.** Por que juntar todas as chamadas de API numa pasta só (ex: `lib/api`) é
melhor do que espalhar pelo código?

**Q5.** Explique, com suas palavras, o que o CI (o robozinho) faz e por que ajuda.

**Q6.** Você gerou o esqueleto e vai adaptar ao ToFiscal. Cite 2 primeiros passos.

---

### 🔑 Gabarito (tente antes de olhar!)

**Q1.** Scaffolding = montar o esqueleto/estrutura inicial do produto (pastas,
config, rotas) antes de escrever a lógica.

**Q2.** (a) `app/` (ou `pages/`); (b) `components/`; (c) `lib/` (incl. `lib/api`).

**Q3.** Reutilizável — porque não está preso a um endereço e é usado em vários
lugares (30 vezes), recebendo dados diferentes por props.

**Q4.** Porque se o backend mudar, você ajusta num lugar só; e evita que o
frontend e o backend fiquem divergentes por chamadas espalhadas.

**Q5.** O CI confere o código automaticamente (compila? segue as regras?) a cada
mudança, antes de entrar na versão principal — pega erro cedo, sem conferência manual.

**Q6.** (1) Criar as rotas do domínio (ex: `/apuracoes`); (2) criar componentes do
domínio (ex: card de apuração). (Bônus: anotar as decisões.)

---

*Você domina o "porquê" — agora é firmar os "nomes das gavetas". Bons estudos! — Cleiton 💡*
