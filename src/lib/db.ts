import Database from "better-sqlite3";
import { join } from "path";

const db = new Database(join(process.cwd(), "codeshelf.db"));

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS snippets (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo      TEXT    NOT NULL,
    descripcion TEXT    NOT NULL,
    lenguaje    TEXT    NOT NULL,
    codigo      TEXT    NOT NULL,
    tags        TEXT    NOT NULL DEFAULT '[]',
    publico     INTEGER NOT NULL DEFAULT 0,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )
`);

export { db };
