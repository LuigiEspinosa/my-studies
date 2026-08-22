<!-- bmad:context -->
<!-- Verified 2026-08-21 against 2409228. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

# my-studies

Markdown study notes for 21 finished resources across 5 platforms, kept as an Obsidian vault. The sibling `my-studies-code/` holds the code written alongside them, and the contract joining the two is specced at `../my-studies-code/docs/specs/study-repo-linkage/`.

## Policy

- Never add `devDependencies` or run `npm install` here. Obsidian indexes the whole vault folder and has no true ignore mechanism, so a `node_modules` tree degrades it. Add tooling as an `npx -y <pkg>@<pinned-version>` script instead.
- Never move or rename a note. The platform-first layout is frozen, and slugs are derived from it at migration time and then never change.
- Never add frontmatter to a note by hand. Story 6 of the linkage spec generates it for all 121 notes in one reviewable diff.
- Never introduce git submodules between this repo and `my-studies-code`. Reciprocal submodules were tried here and torn out; linkage is convention plus generation only.
- Keep both repos checked out as siblings under one parent. Relative cross-repo paths in note frontmatter resolve through it.
- Commit with a subject line only: single `-m`, no body, no trailers, for any author including agents.
- `main` is the only branch, local and remote. Do not create long-lived branches.

## Running and verifying

- No CI in either repo. Run `npm run lint` and `npm run format:check` yourself before committing.

## Conventions that differ from defaults

- Unresolved `[[wikilinks]]` are backlog markers for planned notes, never broken links. There are none today.
- `.gitattributes` pins `text=auto eol=lf` and the index is 100 percent LF. Do not reintroduce CRLF, whatever `core.autocrlf` reports locally.

## Known pitfalls

- Never infer from file or commit dates whether a course was finished. Timestamps show only that nothing is happening, never why. `status` is human-authored; `stalled` is derived and never stored.

<!-- /bmad:context -->
