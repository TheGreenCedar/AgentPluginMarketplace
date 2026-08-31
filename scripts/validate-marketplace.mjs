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
const teacherCodex = codex.plugins.find((plugin) => plugin.name === "teacher");

assert.ok(codestoryCodex, "missing Codex codestory entry");
assert.ok(codestoryClaude, "missing Claude Code codestory entry");
assert.ok(codestoryCopilot, "missing GitHub Copilot codestory entry");
assert.ok(teacherCodex, "missing Codex teacher entry");

const codestorySourceSha = codestoryCodex.source?.sha ?? "";
assert.match(
  codestorySourceSha,
  /^[0-9a-f]{40}$/u,
  "Codex codestory source must use a full immutable commit SHA",
);

assert.deepEqual(codestoryCodex.source, {
  source: "git-subdir",
  url: "https://github.com/TheGreenCedar/CodeStory.git",
  path: "plugins/codestory",
  sha: codestorySourceSha,
});

assert.deepEqual(codestoryClaude.source, {
  source: "github",
  repo: "TheGreenCedar/CodeStory",
  path: "plugins/codestory",
  ref: codestorySourceSha,
});

assert.deepEqual(codestoryCopilot.source, {
  source: "github",
  repo: "TheGreenCedar/CodeStory",
  path: "plugins/codestory",
  ref: codestorySourceSha,
});

assert.equal(codestoryCopilot.skills, "skills/");
assert.equal(codestoryCopilot.hooks, "hooks/copilot-hooks.json");

const teacherSourceSha = teacherCodex.source?.sha ?? "";
assert.equal(teacherCodex.version, "0.1.0");
assert.match(
  teacherSourceSha,
  /^[0-9a-f]{40}$/u,
  "Codex teacher source must use a full immutable commit SHA",
);
assert.deepEqual(teacherCodex.source, {
  source: "url",
  url: "https://github.com/TheGreenCedar/teacher.git",
  sha: teacherSourceSha,
});
assert.deepEqual(teacherCodex.policy, {
  installation: "AVAILABLE",
  authentication: "ON_INSTALL",
});
assert.equal(teacherCodex.category, "Productivity");

console.log("marketplace manifests ok");
