<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Import rules for `src/components/ui/`

Always use relative imports for utils — never the `@/` alias:

```ts
// ✅ Correct
import { cn } from "../../lib/utils"

// ❌ Wrong — @/ alias does not work reliably in the package layer
import { cn } from "@/lib/utils"
```

The shadcn CLI installs components with `@/lib/utils` by default. Always fix this after running `npx shadcn add`.
