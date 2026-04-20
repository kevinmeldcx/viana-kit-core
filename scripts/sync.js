#!/usr/bin/env node

/**
 * sync.js — Sync primitives from viana-kit-core to a viana-kit project.
 *
 * Usage:
 *   node scripts/sync.js
 *   node scripts/sync.js --target /path/to/viana-kit
 *   node scripts/sync.js --version 0.2.0
 *
 * Defaults:
 *   --target   ../viana-kit  (sibling directory)
 *   --version  bumps patch version from current .vianarc
 */

const fs = require("fs")
const path = require("path")

// ─── Parse args ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const getArg = (flag) => {
  const i = args.indexOf(flag)
  return i !== -1 ? args[i + 1] : null
}

const scriptDir = path.resolve(__dirname)
const coreRoot = path.resolve(scriptDir, "..")
const targetArg = getArg("--target")
const versionArg = getArg("--version")

const targetRoot = targetArg
  ? path.resolve(targetArg)
  : path.resolve(coreRoot, "../viana-kit")

// ─── Source paths (inside viana-kit-core) ────────────────────────────────────

const srcUi = path.join(coreRoot, "packages/ui/src/components/ui")
const srcPrimitives = path.join(coreRoot, "packages/ui/src/components/primitives")
const srcBlocks = path.join(coreRoot, "packages/ui/src/components/blocks")
const srcAssets = path.join(coreRoot, "packages/ui/src/assets")
const srcHooks = path.join(coreRoot, "packages/ui/src/hooks")
const srcTokens = path.join(coreRoot, "packages/tokens/src/index.css")
const srcBackground = path.join(coreRoot, "packages/tokens/src/background.css")

// ─── Target paths (inside viana-kit) ─────────────────────────────────────────

const destUi = path.join(targetRoot, "src/components/ui")
const destPrimitives = path.join(targetRoot, "src/components/primitives")
const destBlocks = path.join(targetRoot, "src/components/blocks")
const destAssets = path.join(targetRoot, "src/assets")
const destHooks = path.join(targetRoot, "src/hooks")
const destGlobalsCss = path.join(targetRoot, "src/app/globals.css")
const destVianarc = path.join(targetRoot, ".vianarc")

// ─── Validation ───────────────────────────────────────────────────────────────

if (!fs.existsSync(targetRoot)) {
  console.error(`✗ Target directory not found: ${targetRoot}`)
  console.error(`  Pass the correct path with --target /path/to/viana-kit`)
  process.exit(1)
}

if (!fs.existsSync(srcUi) || !fs.existsSync(srcPrimitives) || !fs.existsSync(srcBlocks)) {
  console.error("✗ Source directories not found. Run this script from viana-kit-core root.")
  process.exit(1)
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function bumpPatch(version) {
  const parts = version.split(".").map(Number)
  parts[2] = (parts[2] || 0) + 1
  return parts.join(".")
}

function transformPrimitive(content) {
  // In viana-kit-core, blocks and primitives use relative imports for the monorepo
  // transpile setup. viana-kit is a standard Next.js app — rewrite to @/ aliases.
  return content
    .replace(/from ["']\.\.\/\.\.\/lib\/utils["']/g, 'from "@/lib/utils"')
    .replace(/from ["']\.\.\/primitives\//g, 'from "@/components/primitives/')
}

// ─── Read current .vianarc ────────────────────────────────────────────────────

let currentVianarc = { version: "0.1.0", components: {}, source: "https://github.com/kevinmeldcx/viana-kit-core" }
if (fs.existsSync(destVianarc)) {
  try {
    currentVianarc = JSON.parse(fs.readFileSync(destVianarc, "utf8"))
  } catch {
    console.warn("⚠ Could not parse .vianarc — will overwrite.")
  }
}

const newVersion = versionArg || bumpPatch(currentVianarc.version || "0.0.0")

// ─── Sync tokens → globals.css ────────────────────────────────────────────────
//
// Replaces the managed token block (:root { ... } .dark { ... }) in globals.css
// with the current content from packages/tokens/src/index.css, preserving any
// custom additions the consumer has appended below the token block.

let tokensUpdated = false

if (fs.existsSync(srcTokens) && fs.existsSync(destGlobalsCss)) {
  const tokensSrc = fs.readFileSync(srcTokens, "utf8")
  const globalsCss = fs.readFileSync(destGlobalsCss, "utf8")

  // Extract only the :root { ... } .dark { ... } token variable blocks from source,
  // excluding preamble directives (@import, @source, etc.) which differ per project.
  const rootMatch = tokensSrc.match(/(^:root\s*\{[\s\S]*?^\})/m)
  const darkMatch = tokensSrc.match(/(^\.dark\s*\{[\s\S]*?^\})/m)

  if (rootMatch && darkMatch) {
    const newTokenBlock = rootMatch[1] + "\n\n" + darkMatch[1]

    // Replace :root { ... } .dark { ... } in the destination, preserving everything else.
    const replaced = globalsCss.replace(
      /^:root\s*\{[\s\S]*?^\}(\s*)^\.dark\s*\{[\s\S]*?^\}/m,
      newTokenBlock
    )

    if (replaced !== globalsCss) {
      fs.writeFileSync(destGlobalsCss, replaced, "utf8")
      tokensUpdated = true
    }
  }
}

// ─── Auto-generate background.css from :root ─────────────────────────────────
//
// Generates .background-light by copying every CSS variable from :root in
// index.css. This ensures .background-light is always in sync with the light
// palette — no manual maintenance required.

if (fs.existsSync(srcTokens) && fs.existsSync(srcBackground)) {
  const tokensSrc = fs.readFileSync(srcTokens, "utf8")
  const rootMatch = tokensSrc.match(/^:root\s*\{([\s\S]*?)^\}/m)
  if (rootMatch) {
    const rootBody = rootMatch[1]
    const generated =
      `/* ─────────────────────────────────────────────────────────────────────────────\n` +
      `   Viana Kit Background Overrides\n` +
      `   AUTO-GENERATED by scripts/sync.js — do not edit manually.\n` +
      `   Generated from :root in packages/tokens/src/index.css.\n` +
      `   To update, run \`npm run sync\` from viana-kit-core.\n` +
      `   ───────────────────────────────────────────────────────────────────────────── */\n` +
      `\n` +
      `@custom-variant background-light (&:is(.background-light *));\n` +
      `\n` +
      `.background-light {${rootBody}}\n`
    fs.writeFileSync(srcBackground, generated, "utf8")
  }
}

// ─── Sync background.css → globals.css background overrides block ────────────
//
// Inserts/replaces the .background-light block between BEGIN/END VIANA BACKGROUND
// OVERRIDES markers in globals.css. If the markers don't exist yet, the block is
// inserted after .dark { }.

let backgroundUpdated = false

if (fs.existsSync(srcBackground) && fs.existsSync(destGlobalsCss)) {
  const backgroundSrc = fs.readFileSync(srcBackground, "utf8")
  const globalsCss = fs.readFileSync(destGlobalsCss, "utf8")

  const BACKGROUND_BEGIN = "/* BEGIN VIANA BACKGROUND OVERRIDES"

  // Strip the file-level header comment from background.css, keep declarations only.
  const backgroundDeclarations = backgroundSrc
    .replace(/\/\*[\s\S]*?\*\/\s*/g, (match) => match.includes("─────") ? "" : match)
    .trim()

  const newBackgroundBlock =
    `/* BEGIN VIANA BACKGROUND OVERRIDES — managed by Viana Kit sync. Do not edit manually.\n` +
    `   To update, run \`npm run sync\` from viana-kit-core. */\n` +
    backgroundDeclarations + "\n" +
    `/* END VIANA BACKGROUND OVERRIDES */`

  let updatedGlobals

  if (globalsCss.includes(BACKGROUND_BEGIN)) {
    updatedGlobals = globalsCss.replace(
      /\/\* BEGIN VIANA BACKGROUND OVERRIDES[\s\S]*?END VIANA BACKGROUND OVERRIDES \*\//,
      newBackgroundBlock
    )
  } else if (globalsCss.includes("/* BEGIN VIANA CHROME OVERRIDES")) {
    // Migrate old markers
    updatedGlobals = globalsCss.replace(
      /\/\* BEGIN VIANA CHROME OVERRIDES[\s\S]*?END VIANA CHROME OVERRIDES \*\//,
      newBackgroundBlock
    )
  } else {
    updatedGlobals = globalsCss.replace(
      /^(\.dark\s*\{[\s\S]*?^\})/m,
      `$1\n\n${newBackgroundBlock}`
    )
  }

  if (updatedGlobals !== globalsCss) {
    fs.writeFileSync(destGlobalsCss, updatedGlobals, "utf8")
    backgroundUpdated = true
  }
}

// ─── Helper: sync a directory (copy new/changed, delete removed) ─────────────

function syncDir(srcDir, destDir, transform) {
  ensureDir(destDir)
  const srcFiles = new Set(
    fs.readdirSync(srcDir).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
  )
  // Remove files in dest that no longer exist in src
  if (fs.existsSync(destDir)) {
    for (const file of fs.readdirSync(destDir).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))) {
      if (!srcFiles.has(file)) {
        fs.rmSync(path.join(destDir, file))
      }
    }
  }
  // Copy/transform files from src
  let count = 0
  for (const file of srcFiles) {
    const dest = path.join(destDir, file)
    let content = fs.readFileSync(path.join(srcDir, file), "utf8")
    if (transform) content = transform(content)
    fs.writeFileSync(dest, content, "utf8")
    count++
  }
  return count
}

// ─── Sync ui/ ─────────────────────────────────────────────────────────────────

const uiSynced = syncDir(srcUi, destUi, null)

// ─── Sync primitives/ ─────────────────────────────────────────────────────────

const primitiveFiles = fs.readdirSync(srcPrimitives).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
const updatedComponents = { ...currentVianarc.components }

// Remove .vianarc entries for deleted primitives
if (fs.existsSync(destPrimitives)) {
  for (const file of fs.readdirSync(destPrimitives).filter((f) => f.endsWith(".tsx"))) {
    if (!primitiveFiles.includes(file)) {
      const name = file.replace(".tsx", "")
      delete updatedComponents[name]
    }
  }
}

const primitivesSynced = syncDir(srcPrimitives, destPrimitives, transformPrimitive)

// Track App* component names in .vianarc
for (const file of primitiveFiles) {
  if (file.startsWith("App") && file.endsWith(".tsx")) {
    updatedComponents[file.replace(".tsx", "")] = newVersion
  }
}

// ─── Sync blocks/ ─────────────────────────────────────────────────────────

const blocksSynced = syncDir(srcBlocks, destBlocks, transformPrimitive)

// ─── Sync hooks/ ──────────────────────────────────────────────────────────────

ensureDir(destHooks)

const hookFiles = fs.readdirSync(srcHooks).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
let hooksSynced = 0

for (const file of hookFiles) {
  const src = path.join(srcHooks, file)
  const dest = path.join(destHooks, file)
  fs.copyFileSync(src, dest)
  hooksSynced++
}

// ─── Sync assets/ ─────────────────────────────────────────────────────────────

let assetsSynced = 0

function syncAssetsDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return
  ensureDir(destDir)
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name)
    const destPath = path.join(destDir, entry.name)
    if (entry.isDirectory()) {
      syncAssetsDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
      assetsSynced++
    }
  }
}

if (fs.existsSync(srcAssets)) {
  syncAssetsDir(srcAssets, destAssets)
}

// ─── Write .vianarc ───────────────────────────────────────────────────────────

const newVianarc = {
  version: newVersion,
  components: updatedComponents,
  source: currentVianarc.source || "https://github.com/kevinmeldcx/viana-kit-core",
}

fs.writeFileSync(destVianarc, JSON.stringify(newVianarc, null, 2) + "\n", "utf8")

// ─── Sync component runtime deps → target package.json ───────────────────────
//
// Reads packages/ui/package.json and merges any component runtime deps that are
// missing from the target package.json. Skips framework/infrastructure packages
// that the target manages independently (next, react, tailwind, typescript, etc.).

const INFRA_PACKAGES = new Set([
  "next", "react", "react-dom",
  "typescript", "eslint", "eslint-config-next",
  "tailwindcss", "@tailwindcss/postcss",
  "@types/node", "@types/react", "@types/react-dom",
  "shadcn",
])

const srcUiPackageJson = path.join(coreRoot, "packages/ui/package.json")
const destPackageJson = path.join(targetRoot, "package.json")
let depsAdded = []

if (fs.existsSync(srcUiPackageJson) && fs.existsSync(destPackageJson)) {
  const srcPkg = JSON.parse(fs.readFileSync(srcUiPackageJson, "utf8"))
  const destPkg = JSON.parse(fs.readFileSync(destPackageJson, "utf8"))

  const srcDeps = { ...srcPkg.dependencies }
  destPkg.dependencies = destPkg.dependencies || {}

  for (const [name, version] of Object.entries(srcDeps)) {
    if (INFRA_PACKAGES.has(name)) continue
    if (!destPkg.dependencies[name]) {
      destPkg.dependencies[name] = version
      depsAdded.push(name)
    }
  }

  if (depsAdded.length > 0) {
    // Keep keys alphabetically sorted for readable diffs
    destPkg.dependencies = Object.fromEntries(
      Object.entries(destPkg.dependencies).sort(([a], [b]) => a.localeCompare(b))
    )
    fs.writeFileSync(destPackageJson, JSON.stringify(destPkg, null, 2) + "\n", "utf8")
  }
}

// ─── Sync rules/ ──────────────────────────────────────────────────────────────

const srcRules = path.join(coreRoot, "packages/ui/src/rules")
const destRules = path.join(targetRoot, "rules")
let rulesSynced = 0

if (fs.existsSync(srcRules)) {
  ensureDir(destRules)
  const ruleFiles = fs.readdirSync(srcRules).filter((f) => f.endsWith(".md"))
  for (const file of ruleFiles) {
    fs.copyFileSync(path.join(srcRules, file), path.join(destRules, file))
    rulesSynced++
  }
}

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log("")
console.log("✓ Viana Kit sync complete")
console.log(`  Target  : ${targetRoot}`)
console.log(`  Version : ${currentVianarc.version} → ${newVersion}`)
console.log(`  tokens  : ${tokensUpdated ? "globals.css token block updated" : fs.existsSync(destGlobalsCss) ? "already up to date" : "skipped (globals.css not found)"}`)
console.log(`  background : ${backgroundUpdated ? "globals.css background block updated" : fs.existsSync(destGlobalsCss) ? "already up to date" : "skipped (globals.css not found)"}`)
console.log(`  ui/     : ${uiSynced} files copied`)
console.log(`  primitives/ : ${primitivesSynced} files synced (imports transformed)`)
console.log(`  blocks/ : ${blocksSynced} files synced (imports transformed)`)
console.log(`  hooks/  : ${hooksSynced} files copied`)
console.log(`  assets/ : ${assetsSynced} files copied`)
console.log(`  rules/  : ${rulesSynced} files copied`)
if (depsAdded.length > 0) {
  console.log(`  deps    : added ${depsAdded.join(", ")} to package.json`)
} else {
  console.log(`  deps    : package.json already up to date`)
}
console.log("")
