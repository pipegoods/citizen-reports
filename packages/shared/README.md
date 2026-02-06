# @citizen-reports/shared

Paquete compartido del monorepo **Citizen Reports**. Contiene tipos, constantes y schemas de validación usados por el backend (NestJS) y el frontend (React + Vite).

## Contenido

### Tipos (`types.ts`)

- **ReportStatus** — `"pending" | "process" | "resolved"`
- **ReportEntity** — Entidad de reporte (id, title, description, status, createdAt)
- **PaginationMeta** — total, page, pageSize, totalPages
- **PaginatedReports\<T\>** — Lista paginada con `reports` y `meta`
- **ReportsResponse** — Respuesta de `GET /api/reports`
- **CreateReportDto** — Payload para crear reporte (title, description)
- **UpdateReportDto** — Payload para actualizar (status)
- **Auth:** **LoginDto**, **AuthUser**, **AuthResponse**, **AuthRole**

### Constantes (`constants.ts`)

- **REPORT_STATUS_VALUES** — `["pending", "process", "resolved"]` (para validación y selects)
- **DEFAULT_PAGE_SIZE** — `10`
- **API_REPORTS** — `"/reports"` (prefijo de rutas de la API)
- **API_AUTH**, **AUTH_LOGIN**, **AUTH_LOGOUT**, **AUTH_SESSION** — Rutas de auth

### Schemas Zod (`schemas.ts`)

- **createReportSchema** — Validación para crear reporte (título ≥ 5, descripción ≥ 10)
- **updateReportSchema** — Validación para actualizar (status enum)
- **CreateReportForm** / **UpdateReportForm** — Tipos inferidos de los schemas
- **loginSchema**, **LoginForm** — Validación de login (email, password)

El backend mantiene DTOs con class-validator alineados con estos schemas; el frontend usa estos schemas con react-hook-form y `@hookform/resolvers/zod`.

### Utilidades (`utils.ts`)

- **formatDate** — Formatea fecha (string/Date) con `Intl.DateTimeFormat`; reutilizable en backend y frontend.

## Convención de la API

- **Query params para listado:** `page` (número de página) y `pageSize` (tamaño de página).
- **Rutas:** `GET/POST /api/reports`, `GET/PUT/DELETE /api/reports/:id`.

## Uso

```ts
import type { ReportEntity, CreateReportDto } from "@citizen-reports/shared";
import { REPORT_STATUS_VALUES, DEFAULT_PAGE_SIZE, createReportSchema } from "@citizen-reports/shared";
```

El paquete expone fuente TypeScript (`.ts`); las apps lo resuelven vía workspace (`workspace:*`) y lo compilan con su propio bundler/tsconfig.
