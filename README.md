# Tempo time tracking

A responsive time-tracking dashboard built with the Next.js App Router, TypeScript, and Tailwind CSS. All displayed workspace data is mock data; there is no database or authentication.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Routes

- `/` — Dashboard overview
- `/time-tracker` — Timer and daily entries
- `/timesheet` — Time entry summary
- `/projects` — Project overview
- `/clients` — Client overview
- `/reports` — Report summary
- `/team` — Team overview
- `/settings` — Workspace preferences

Shared layout and UI components live in `app/components`. Route pages use Server Components by default; the sidebar, header, and dashboard shell use Client Components for active navigation and responsive menu behavior.
