# Vantadb-web

Showcase site for **VantaDB** — Next.js 16 + shadcn/ui + framer-motion. Docs, playground (WASM), benchmarks, blog.

> Split from [`ness-e/Vantadb`](https://github.com/ness-e/Vantadb) (`web/`, with history) — Fase 2 estabilización 2026-09-22. Engine + SDKs live in the main repo; this repo owns only the site.

## Desarrollo

```bash
npm ci
npm run dev       # next dev -p 3000
npm run lint      # eslint .
npx tsc --noEmit  # typecheck
npm run build     # next build (standalone)
npx playwright test  # e2e (flujo-critico)
```

## Versionado

Ritmo propio, independiente de `vantadb` core (cierra contradicción "misma versión").

## Sync de contenido (Regla 11)

Toda cifra de la comparativa/benchmarks sale de `Vantadb/docs/operations/BENCHMARKS.md`. Checklist por release: verificar números contra el BENCHMARKS.md vigente antes de publicar.
