# Blog — Guia de Gerenciamento

## Como criar um novo post

1. Crie um arquivo `.md` em `src/content/blog/`
2. O **nome do arquivo** vira a URL: `meu-post.md` → `ad.tec.br/blog/meu-post`
3. Adicione o frontmatter no topo e escreva o conteúdo abaixo

## Estrutura do arquivo

```markdown
---
title: "Título do Post"
description: "Descrição curta para SEO e preview nos cards"
date: 2025-03-01
tags: ["ad tech", "dicas"]
draft: false
---

Conteúdo do post aqui em Markdown.
```

## Campos do frontmatter

| Campo         | Obrigatório | Tipo       | Exemplo                          |
|---------------|:-----------:|------------|----------------------------------|
| `title`       | ✅          | texto      | `"Como otimizar anúncios"`       |
| `description` | ✅          | texto      | `"Dicas para melhorar CTR..."`   |
| `date`        | ✅          | data       | `2025-03-01`                     |
| `tags`        | ❌          | lista      | `["ad tech", "dicas"]`           |
| `draft`       | ❌          | true/false | `true` (oculta o post do site)   |

## Formatação Markdown

```markdown
## Subtítulo (h2)
### Sub-subtítulo (h3)

Parágrafo normal com **negrito** e *itálico*.

- Item de lista
- Outro item

1. Lista numerada
2. Segundo item

[Texto do link](/contato)

> Citação em bloco

`código inline`
```

## Publicar

```bash
git add .
git commit -m "novo post: titulo do post"
git push origin main
```

O Netlify faz o deploy automaticamente após o push.

## Dicas

- Posts com `draft: true` não aparecem no site
- Os **3 posts mais recentes** aparecem na home automaticamente
- Posts são ordenados por `date` (mais recentes primeiro)
- Use nomes de arquivo descritivos e em minúsculo com hífens: `meu-novo-post.md`
