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

// ─── Target paths (inside viana-kit) ─────────────────────────────────────────

const destUi = path.join(targetRoot, "src/components/ui")
const destPrimitives = path.join(targetRoot, "src/components/primitives")
const destBlocks = path.join(targetRoot, "src/components/blocks")
const destAssets = path.join(targetRoot, "src/assets")
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
  // Primitives in viana-kit-core use relative imports for the monorepo transpile setup.
  // viana-kit is a standard Next.js app — replace relative utils import with the @/ alias.
  return content.replace(/from ["']\.\.\/\.\.\/lib\/utils["']/g, 'from "@/lib/utils"')
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

// ─── Sync ui/ ─────────────────────────────────────────────────────────────────

ensureDir(destUi)

const uiFiles = fs.readdirSync(srcUi).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
let uiSynced = 0

for (const file of uiFiles) {
  const src = path.join(srcUi, file)
  const dest = path.join(destUi, file)
  fs.copyFileSync(src, dest)
  uiSynced++
}

// ─── Sync primitives/ ─────────────────────────────────────────────────────────

ensureDir(destPrimitives)

const primitiveFiles = fs.readdirSync(srcPrimitives).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
const updatedComponents = { ...currentVianarc.components }
let primitivesSynced = 0

for (const file of primitiveFiles) {
  const src = path.join(srcPrimitives, file)
  const dest = path.join(destPrimitives, file)

  let content = fs.readFileSync(src, "utf8")
  content = transformPrimitive(content)
  fs.writeFileSync(dest, content, "utf8")

  // Track App* component names (skip index.ts and hooks)
  if (file.startsWith("App") && file.endsWith(".tsx")) {
    const componentName = file.replace(".tsx", "")
    updatedComponents[componentName] = newVersion
  }

  primitivesSynced++
}

// ─── Sync blocks/ ─────────────────────────────────────────────────────────

ensureDir(destBlocks)

const blockFiles = fs.readdirSync(srcBlocks).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
let blocksSynced = 0

for (const file of blockFiles) {
  const src = path.join(srcBlocks, file)
  const dest = path.join(destBlocks, file)

  let content = fs.readFileSync(src, "utf8")
  content = transformPrimitive(content) // same import transform applies
  fs.writeFileSync(dest, content, "utf8")

  blocksSynced++
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
console.log(`  ui/     : ${uiSynced} files copied`)
console.log(`  primitives/ : ${primitivesSynced} files synced (imports transformed)`)
console.log(`  blocks/ : ${blocksSynced} files synced (imports transformed)`)
console.log(`  assets/ : ${assetsSynced} files copied`)
console.log(`  rules/  : ${rulesSynced} files copied`)
console.log("")
