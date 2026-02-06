# Monorepo: unificar frontend y backend en un solo repositorio

## Resumen

Este PR convierte el proyecto **Citizen Reports** en un **monorepo**: el frontend (React + Vite) y el backend (NestJS + Prisma) pasan a vivir en el mismo repositorio, junto con un paquete compartido de tipos, constantes y utilidades.

## Motivación

- **Un solo repo** para desarrollar, revisar y desplegar frontend y backend.
- **Código compartido** (`@citizen-reports/shared`) para tipos, constantes, schemas Zod y utilidades (p. ej. `formatDate`), evitando duplicación y desincronización.
- **Build y scripts unificados** con Turborepo: `pnpm run build`, `pnpm run dev`, `pnpm run lint`, `pnpm run test` desde la raíz.

## Cambios principales

### Estructura del monorepo

- **`apps/frontend/`** — Aplicación React + Vite (antes repositorio separado).
- **`apps/backend/`** — API NestJS + Prisma (antes repositorio separado).
- **`packages/shared/`** — Paquete interno con:
  - Tipos TypeScript (Report, PaginationMeta, Auth, etc.).
  - Constantes (REPORT_STATUS_VALUES, DEFAULT_PAGE_SIZE, rutas API).
  - Schemas Zod (createReport, updateReport, login).
  - Utilidades (formatDate).

### Configuración en la raíz

- **`pnpm-workspace.yaml`** — Workspaces `apps/*` y `packages/*`.
- **`turbo.json`** — Turborepo 2: tareas `build`, `dev`, `lint`, `test` con caché y dependencias entre paquetes.
- **`tsconfig.base.json`** — Config base y path alias `@citizen-reports/shared` → `packages/shared/src`.
- **`package.json`** — Scripts: `dev`, `build`, `lint`, `test`, `predev` (build de shared), y scripts por app (`dev:frontend`, `dev:backend`, etc.).

### Integración de shared

- **Frontend**: importa tipos, constantes, schemas y `formatDate` desde `@citizen-reports/shared`; Vite resuelve el alias al código fuente de `packages/shared` para el build.
- **Backend**: importa tipos y constantes desde `@citizen-reports/shared`; el paquete shared se compila a CommonJS para compatibilidad con NestJS.

### Otros ajustes

- **Tests**: Jest en backend, Vitest en frontend; `pnpm test` en raíz ejecuta ambos.
- **TypeScript**: tsconfig unificados y corregidos (incremental, target ES2022, opciones compatibles con la versión de TS usada).
- **.gitignore**: actualizado en raíz, apps y packages (node_modules, .turbo, dist, coverage, etc.).
- **Repositorios unificados**: un solo Git en la raíz; frontend y backend ya no tienen su propio `.git`.

## Cómo probar

Desde la raíz del repo:

```bash
pnpm install
pnpm run build
pnpm run dev
```

O por app:

```bash
pnpm --filter frontend dev
pnpm --filter backend dev
```

## Checklist

- [x] Monorepo con pnpm workspaces y Turborepo
- [x] Paquete `@citizen-reports/shared` con tipos, constantes, schemas y utils
- [x] Frontend y backend consumen shared; build y dev funcionan
- [x] Scripts root y por app documentados en README
- [x] Tests (Jest backend, Vitest frontend) ejecutables con `pnpm test`
- [x] Tsconfig y linter sin errores en todos los proyectos
