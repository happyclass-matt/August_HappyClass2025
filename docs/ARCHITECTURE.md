# Architecture Overview (MVP)

## Modules
- Web App (Next.js App Router)
- API Route Handlers (Next.js)
- Auth (NextAuth v5)
- DB (PostgreSQL via Prisma)
- Design System (@happyclass/ui with Tailwind tokens)

## Request Flow
Browser → Next.js route → handler validates (zod) → service → Prisma → Postgres → response. Audit logs on write.

## Critical Paths
- Onboarding: create TeacherProfile, first Class
- Lesson generation: call model provider (stub), persist LessonPlan, render/export

