// Tiny tests using Node's built-in test runner (no extra dependencies).
// Run with: make test   (or: npm test)
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const guide = JSON.parse(readFileSync(new URL("../content/guide.json", import.meta.url)));

test("guide has a title and sections", () => {
  assert.ok(guide.title);
  assert.ok(guide.sections.length > 0);
});

test("every section has a unique id and a title", () => {
  const ids = guide.sections.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const s of guide.sections) assert.ok(s.title, `section ${s.id} needs a title`);
});

test("all links use https", () => {
  for (const l of guide.links) assert.match(l.href, /^https:\/\//);
});
