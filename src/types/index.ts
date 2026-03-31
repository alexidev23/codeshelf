// types.ts

export const LANGUAGES = [
  { label: "JavaScript", color: "#F7DF1E" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Python", color: "#3776AB" },
  { label: "HTML", color: "#E34F26" },
  { label: "CSS", color: "#1572B6" },
  { label: "SQL", color: "#CC2927" },
  { label: "Rust", color: "#CE422B" },
  { label: "Go", color: "#00ADD8" },
  { label: "PHP", color: "#777BB4" },
  { label: "Java", color: "#ED8B00" },
  { label: "C#", color: "#239120" },
  { label: "C++", color: "#00599C" },
  { label: "Astro", color: "#FF5D01" },
  { label: "React", color: "#61DAFB" },
  { label: "Node.js", color: "#339933" },
];

// ===== tipo EXACTO de la base de datos =====
export interface SnippetDB {
  id: number;
  titulo: string;
  descripcion: string;
  lenguaje: string;
  codigo: string;
  tags: string; // JSON string
  publico: number;
  created_at: string;
}

// ===== tipo para usar en la UI =====
export interface Snippet {
  id: number;
  titulo: string;
  descripcion: string;
  lenguaje: string;
  codigo: string;
  tags: string[];
  publico: boolean;
  created_at: string;
}

// ===== snippet procesado para mostrar =====
export interface SnippetProcessed extends Snippet {
  htmlCodigo: string;
}

export interface CreateSnippetInput {
  titulo: string;
  descripcion: string;
  lenguaje: string;
  codigo: string;
  tags: string[];
}
