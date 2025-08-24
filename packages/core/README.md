# @planner/core

Core libraries and utilities for Planner application. This package serves as a central hub for shared dependencies and common functionality across all packages (backend, web, desktop, mobile).

## Purpose

The `@planner/core` package works similarly to `@types/` packages but for core libraries and utilities. It provides:

- **Consistent dependency versions** across all packages
- **Common utilities** and helper functions
- **Shared libraries** re-exports
- **Cross-platform compatibility** for backend, web, desktop, and mobile

## Current Exports

### Schema Validation

- **Zod** (v4.1.1) - TypeScript-first schema validation library

  ```typescript
  import { z } from "@planner/core/zod";

  const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  });
  ```

## Future Roadmap

The following utilities and libraries will be added in future versions:

- **Date utilities** - Cross-platform date manipulation and formatting
- **TypeScript/JavaScript utilities** - Common helper functions and type utilities
- **String manipulation** - Text processing and formatting utilities
- **Validation helpers** - Extended validation functions beyond Zod
- **Error handling** - Standardized error types and handling
- **Logging utilities** - Consistent logging across platforms
- **Configuration management** - Environment and config utilities

## Usage

Install the package in your Planner project:

```bash
pnpm add @planner/core
```

Import utilities in your code:

```typescript
// Schema validation
import { z } from "@planner/core/zod";

// Future: Date utilities
// import { formatDate, parseDate } from '@planner/core';

// Future: Common utilities
// import { debounce, throttle, pick, omit } from '@planner/core';
```

## Package Structure

```
packages/core/
├── src/
│   ├── index.ts          # Main exports
│   ├── dates/            # Date utilities (future)
│   ├── utils/            # Common utilities (future)
│   └── types/            # Type utilities (future)
├── package.json
├── tsconfig.json
└── README.md
```

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm run build

# Watch mode for development
pnpm run dev

# Clean build artifacts
pnpm run clean
```

## Integration

This package is designed to be used across all Planner packages:

- **@planner/backend** - Server-side logic
- **@planner/web** - Next.js web application
- **@planner/app** - Electron desktop application
- **@planner/mobile** - React Native mobile application
- **@planner/sdk** - API client library
- **@planner/types** - Shared TypeScript types

By centralizing core dependencies and utilities, we ensure consistency and reduce bundle duplication across the monorepo.
