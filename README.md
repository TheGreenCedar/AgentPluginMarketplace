# AgentPluginMarketplace

Codex plugin marketplace catalog for TheGreenCedar.

## Catalog

- Catalog file: `.agents/plugins/marketplace.json`
- Catalog name: `TheGreenCedar`
- Display name: `TheGreenCedar`
- Plugin entry: `codestory`

## CodeStory Plugin Source

The canonical CodeStory plugin package source is in
[`TheGreenCedar/CodeStory`](https://github.com/TheGreenCedar/CodeStory/tree/dev/codestory-next/plugins/codestory)
under `plugins/codestory`. The source package landed through
[`TheGreenCedar/CodeStory#262`](https://github.com/TheGreenCedar/CodeStory/pull/262)
at commit `3aa0847e00c1feddab9bb11fcf1bde63e22c5aeb`.

The current Codex marketplace shape used here supports repo-local entries:

```json
{
  "source": {
    "source": "local",
    "path": "./plugins/codestory"
  }
}
```

This repository does not vendor the CodeStory plugin package yet. The catalog is
therefore a valid marketplace skeleton and readback target, not a verified
installable package. Installation should only be claimed after `plugins/codestory`
contains the plugin package or Codex supports a GitHub repo subpath source shape.
