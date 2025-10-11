# 📖 Гайд: Монорепо на pnpm + Turborepo (Astro, Next.js, React, TS)

---

## 🔹 1. Структура проекта

```
monorepo/
  apps/
    astro-app/     # проект на Astro
      package.json
    next-app/      # проект на Next.js
      package.json
    react-app/     # проект на React (SPA, Vite или CRA)
      package.json
  packages/
    ui/            # общая библиотека UI-компонентов
      package.json
    utils/         # общие утилиты
      package.json
  package.json         # корневой
  pnpm-workspace.yaml  # объявление монорепо
  turbo.json           # конфиг Turborepo
  tsconfig.json        # базовые настройки TS
  pnpm-lock.yaml
```

---

## 🔹 2. Файл `pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

Это говорит `pnpm`, что все проекты в этих папках — часть workspace.

---

## 🔹 3. Корневой `package.json`

```json
{
  "name": "crash-monorepo",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "turbo run dev --parallel",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "clean": "turbo run clean"
  },
  "packageManager": "pnpm@10.18.0",
  "devDependencies": {
    "eslint": "^9.37.0",
    "prettier": "^3.6.2",
    "turbo": "^2.5.8",
    "typescript": "^5.9.3"
  }
}
```

---

## 🔹 4. Конфиг `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**", "build/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {},
    "test": {}
  }
}
```

---

## 🔹 5. Настройки проектов в `apps/*`

### Пример `apps/next-app/package.json`

```json
{
  "name": "next-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

### Пример `apps/astro-app/package.json`

```json
{
  "name": "astro-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

### Пример `apps/react-app/package.json` (Vite)

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "vite": "^5.0.0"
  }
}
```

---

## 🔹 6. Общие пакеты в `packages/*`

Пример `packages/ui/package.json`:

```json
{
  "name": "@myorg/ui",
  "version": "1.0.0",
  "main": "index.tsx",
  "dependencies": {
    "react": "^18.3.0"
  }
}
```

В `apps/next-app/package.json` можно использовать:

```json
"dependencies": {
  "@myorg/ui": "workspace:*"
}
```

---

## 🔹 7. Запуск и билд локально

### Все проекты сразу

```bash
pnpm dev        # запускает все dev-сервера параллельно
pnpm build      # билдит всё
```

### Один проект

```bash
pnpm turbo run dev --filter=astro-app
pnpm turbo run build --filter=next-app
```

Проверить список доступных проектов:

```bash
pnpm list -r
```

---

## 🔹 8. Деплой на Netlify

### Вариант 1. Деплой одного приложения

В настройках Netlify (`Build & Deploy`) укажи:

- **Base directory** → `apps/astro-app`
- **Build command** → `pnpm turbo run build --filter=astro-app`
- **Publish directory** → `dist` (Astro), `.next` (Next), `dist` (Vite React)

### Вариант 2. Несколько приложений

Создай `.netlify.toml` в корне:

```toml
[[build]]
  base = "apps/astro-app"
  command = "pnpm turbo run build --filter=astro-app"
  publish = "apps/astro-app/dist"

[[build]]
  base = "apps/next-app"
  command = "pnpm turbo run build --filter=next-app"
  publish = "apps/next-app/.next"

[[build]]
  base = "apps/react-app"
  command = "pnpm turbo run build --filter=react-app"
  publish = "apps/react-app/dist"
```

---

## 🔹 9. Советы и best practices

- Всегда коммить `pnpm-lock.yaml` → чтобы CI/CD подтянул те же зависимости.
- Если нужен только один проект — используй `--filter`.
- Общие компоненты/утилиты клади в `packages/*`.
- В CI/CD (Netlify, Vercel, GitHub Actions) всегда ставь зависимости через `pnpm install --frozen-lockfile`.
- Для Node ≥ 18 лучше всего работает Turborepo + pnpm.
