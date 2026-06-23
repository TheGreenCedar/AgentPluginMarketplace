#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

const codex = readJson(".agents/plugins/marketplace.json");
const claude = readJson(".claude-plugin/marketplace.json");
const copilot = readJson(".github/plugin/marketplace.json");

assert.equal(codex.name, "TheGreenCedar");
assert.equal(claude.name, "thegreencedar");
assert.equal(copilot.name, "thegreencedar");
assert.equal(claude.metadata.description, "TheGreenCedar agent plugins.");
assert.equal(copilot.metadata.description, "TheGreenCedar agent plugins.");

const codestoryCodex = codex.plugins.find((plugin) => plugin.name === "codestory");
const codestoryClaude = claude.plugins.find((plugin) => plugin.name === "codestory");
const codestoryCopilot = copilot.plugins.find((plugin) => plugin.name === "codestory");

assert.ok(codestoryCodex, "missing Codex codestory entry");
assert.ok(codestoryClaude, "missing Claude Code codestory entry");
assert.ok(codestoryCopilot, "missing GitHub Copilot codestory entry");

assert.deepEqual(codestoryCodex.source, {
  source: "git-subdir",
  url: "https://github.com/TheGreenCedar/CodeStory.git",
  path: "plugins/codestory",
});

assert.deepEqual(codestoryClaude.source, {
  source: "github",
  repo: "TheGreenCedar/CodeStory",
  path: "plugins/codestory",
  ref: "main",
});

assert.deepEqual(codestoryCopilot.source, {
  source: "github",
  repo: "TheGreenCedar/CodeStory",
  path: "plugins/codestory",
  ref: "main",
});

assert.equal(codestoryCopilot.skills, "skills/");
assert.equal(codestoryCopilot.hooks, "hooks/copilot-hooks.json");

console.log("marketplace manifests ok");
