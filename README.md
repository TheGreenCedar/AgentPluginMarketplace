# AgentPluginMarketplace

Codex plugin marketplace catalog for TheGreenCedar.

## Catalog

- Catalog file: `.agents/plugins/marketplace.json`
- Catalog name: `TheGreenCedar`
- Display name: `TheGreenCedar`
- Plugin entries: `codestory`, `codex-autoresearch`
- Claude Code catalog: `.claude-plugin/marketplace.json`
- GitHub Copilot CLI catalog: `.github/plugin/marketplace.json`

## Install Or Refresh

On macOS and Linux, add the Git marketplace and install CodeStory with:

```sh
codex plugin marketplace add TheGreenCedar/AgentPluginMarketplace --ref main
codex plugin add codestory@TheGreenCedar
```

On Windows, use the native `codex.cmd` shim:

```powershell
codex.cmd plugin marketplace add TheGreenCedar/AgentPluginMarketplace --ref main
codex.cmd plugin add codestory@TheGreenCedar
```

Refreshing a marketplace updates its catalog snapshot; it does not replace an
installed plugin. To update an existing CodeStory installation, refresh the
catalog, remove the installed copy, and install it again:

```sh
codex plugin marketplace upgrade TheGreenCedar
codex plugin remove codestory@TheGreenCedar
codex plugin add codestory@TheGreenCedar
```

On Windows, run those refresh commands with `codex.cmd` instead of `codex`.
Replace an existing local-path marketplace entry by removing `TheGreenCedar`
first, then adding the Git source shown above.

## CodeStory Plugin Source

This catalog points the `codestory` plugin entry at the canonical package in
[`TheGreenCedar/CodeStory`](https://github.com/TheGreenCedar/CodeStory/tree/main/plugins/codestory)
under `plugins/codestory`. The current public release is
[`v0.15.0`](https://github.com/TheGreenCedar/CodeStory/releases/tag/v0.15.0).

Claude Code and GitHub Copilot CLI catalog files live in this marketplace repo
and point at the same canonical CodeStory plugin source.

Validate the marketplace files after edits:

```powershell
node scripts/validate-marketplace.mjs
```

The Codex marketplace entry uses the Git subdirectory source shape:

```json
{
  "source": {
    "source": "git-subdir",
    "url": "https://github.com/TheGreenCedar/CodeStory.git",
    "path": "plugins/codestory"
  }
}
```

The Claude Code and GitHub Copilot CLI catalog entries use the host-validated
GitHub source shape:

```json
{
  "source": {
    "source": "github",
    "repo": "TheGreenCedar/CodeStory",
    "path": "plugins/codestory",
    "ref": "main"
  }
}
```

## Codex Autoresearch Plugin Source

The `codex-autoresearch` entry points at
[`TheGreenCedar/codex-autoresearch`](https://github.com/TheGreenCedar/codex-autoresearch/tree/main/plugins/codex-autoresearch)
under `plugins/codex-autoresearch`:

```json
{
  "source": {
    "source": "git-subdir",
    "url": "https://github.com/TheGreenCedar/codex-autoresearch.git",
    "path": "plugins/codex-autoresearch"
  }
}
```
