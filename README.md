# AgentPluginMarketplace

Codex plugin marketplace catalog for TheGreenCedar.

## Catalog

- Catalog file: `.agents/plugins/marketplace.json`
- Catalog name: `TheGreenCedar`
- Display name: `TheGreenCedar`
- Plugin entries: `codestory`, `codex-autoresearch`

## Install Or Refresh

Add or refresh the marketplace from the Git marketplace source:

```powershell
codex plugin marketplace add TheGreenCedar/AgentPluginMarketplace --ref main
codex plugin marketplace upgrade TheGreenCedar
```

Replace a local-path marketplace entry with the Git marketplace source:

```powershell
codex plugin marketplace remove TheGreenCedar
codex plugin marketplace add TheGreenCedar/AgentPluginMarketplace --ref main
```

## CodeStory Plugin Source

This catalog points the `codestory` plugin entry at the canonical package in
[`TheGreenCedar/CodeStory`](https://github.com/TheGreenCedar/CodeStory/tree/dev/codestory-next/plugins/codestory)
under `plugins/codestory`. The source package landed through
[`TheGreenCedar/CodeStory#262`](https://github.com/TheGreenCedar/CodeStory/pull/262)
at commit `3aa0847e00c1feddab9bb11fcf1bde63e22c5aeb`.

The marketplace entry uses the Git subdirectory source shape:

```json
{
  "source": {
    "source": "git-subdir",
    "url": "https://github.com/TheGreenCedar/CodeStory.git",
    "path": "plugins/codestory"
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
