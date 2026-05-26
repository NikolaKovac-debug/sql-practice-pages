# sql.js vendor files

Place the fixed-version sql.js runtime files here before deploying the pure frontend SQL practice page:

- `sql-wasm.js`
- `sql-wasm.wasm`

Recommended source: the official npm package tarball for a pinned version of `sql.js`.

The Web version intentionally loads these files from this local directory instead of a runtime CDN. This keeps the deployed page static and avoids silently executing third-party code from a remote host each time a learner opens the page.

