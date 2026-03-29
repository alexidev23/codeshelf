import { db } from "../lib/db";
import type { SnippetDB, Snippet } from "../types";

function mapSnippet(row: SnippetDB): Snippet {
  return {
    ...row,
    tags: JSON.parse(row.tags),
    publico: Boolean(row.publico),
  };
}

export function getAllSnippets(): Snippet[] {
  const rows = db
    .prepare(
      `
      SELECT id, titulo, descripcion, lenguaje, codigo, tags, publico, created_at
      FROM snippets
      ORDER BY created_at DESC
    `,
    )
    .all() as SnippetDB[];

  return rows.map(mapSnippet);
}

export function getRecentSnippets(limit = 6): Snippet[] {
  const rows = db
    .prepare(
      `
      SELECT id, titulo, descripcion, lenguaje, codigo, tags, publico, created_at
      FROM snippets
      ORDER BY created_at DESC
      LIMIT ?
    `,
    )
    .all(limit) as SnippetDB[];

  return rows.map(mapSnippet);
}

export function getSnippetById(id: number): Snippet {
  const snippet = db
    .prepare("SELECT * FROM snippets WHERE id = ?")
    .get(id) as SnippetDB;

  return mapSnippet(snippet);
}
