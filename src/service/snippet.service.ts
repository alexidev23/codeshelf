import { db } from "../lib/db";
import type { SnippetDB, Snippet, CreateSnippetInput } from "../types";

// Función para mapear el resultado de la base de datos al formato que usamos en la UI
function mapSnippet(row: SnippetDB): Snippet {
  return {
    ...row,
    tags: JSON.parse(row.tags),
    publico: Boolean(row.publico),
  };
}

// Obtener todos los snippets
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

// Obtener hasta un cierto número de snippets recientes (ej: para la página principal)
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

// Obtener snippet por ID
export function getSnippetById(id: number): Snippet {
  const snippet = db
    .prepare("SELECT * FROM snippets WHERE id = ?")
    .get(id) as SnippetDB;

  return mapSnippet(snippet);
}

// Crear nuevo snippet
export function createSnippet(data: CreateSnippetInput) {
  const query = db.prepare(`
    INSERT INTO snippets (titulo, descripcion, lenguaje, codigo, tags)
    VALUES (?, ?, ?, ?, ?)
  `);

  return query.run(
    data.titulo,
    data.descripcion,
    data.lenguaje,
    data.codigo,
    JSON.stringify(data.tags),
  );
}

// Actualizar snippet
export function updateSnippet(id: number, data: SnippetDB) {
  const query = db.prepare(`
    UPDATE snippets
    SET titulo = ?, 
        descripcion = ?, 
        lenguaje = ?, 
        codigo = ?, 
        tags = ?
    WHERE id = ?
  `);

  return query.run(
    data.titulo,
    data.descripcion,
    data.lenguaje,
    data.codigo,
    data.tags,
    id,
  );
}

// Eliminar snippet
export function deleteSnippet(id: number) {
  const query = db.prepare(`
    DELETE FROM snippets
    WHERE id = ?
  `);

  const result = query.run(id);

  return result.changes > 0;
}
