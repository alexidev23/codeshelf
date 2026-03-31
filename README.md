# 📚 CodeShelf – Personal Snippet Manager

![Demo GIF](https://github.com/alexidev23/codeshelf/blob/main/assets/demo.gif)  
![Listado de Snippets](https://github.com/alexidev23/codeshelf/blob/main/assets/snippets-list.png)  
![Vista de Detalle](https://github.com/alexidev23/codeshelf/blob/main/assets/snippet-detail.png)  
![Generador de README](https://github.com/alexidev23/codeshelf/blob/main/assets/readme-generator.png)

> **CodeShelf** es un gestor personal de _snippets_ de código creado durante la hackathon **CubePath 2026** de midudev. Permite almacenar, organizar y buscar fragmentos de código de forma rápida y eficiente. Ademas te permite generar un README.md para tu proyecto.

---

## 🚀 Stack Tecnológico

| Tecnologie                        | Version / Emoji     |
| --------------------------------- | ------------------- |
| **Astro**                         | `⚛️ Astro 4`        |
| **Bun**                           | `🦀 Bun`            |
| **SQLite**                        | `🗄️ better-sqlite3` |
| **TailwindCSS**                   | `🎨 Tailwind`       |
| **OpenRouter + Gemini 2.0 Flash** | `🤖 AI Docs`        |
| **Lucide Icons**                  | `🔖 Lucide`         |

![Astro](https://img.shields.io/badge/Astro-4-000000?logo=astro)  
![Bun](https://img.shields.io/badge/Bun-1.1-222222?logo=bun)  
![SQLite](https://img.shields.io/badge/SQLite-3-07407E?logo=sqlite)  
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css) ![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-5B5B5B?logo=openrouter)

---

## ✨ Características Principales

- **💾 Guardado completo** de snippets con _título, descripción, lenguaje, tags personalizados_.
- **🔍 Búsqueda y filtrado** por lenguaje y tags.
- **🖌️ Syntax Highlighting** con el tema **One Dark Pro**. - **✏️ Edición y eliminación** mediante modales interactivos. - **📋 Copiar al portapapeles** con un solo click.
- **📄 Generador automático de README** usando IA (OpenRouter + Gemini 2.0 Flash).
- **🎨 UI oscura** con paleta `codeshelf-bg`, `codeshelf-cyan`, `codeshelf-purple` y **Lucide Icons**.
- **🗂️ CRUD completo** gestionado en `snippet.service.ts` con SQLite.
- **⚡️ SSR** con Astro y **Bun** como runtime para máxima velocidad.

---

## 🛠️ Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/alexidev23/codeshelf.git
cd codeshelf

# 2. Instala dependencias con Bun
bun install

# 3. Ejecuta la aplicación en modo desarrollo
bun dev
```

> La aplicación corre en `http://localhost:3000` por defecto.

---

## ⚙️ Configuración | Variable | Descripción | Default |

|----------|-------------|---------|
| `DATABASE_URL` | Ruta al archivo SQLite (`./data/snippets.db`) | `./data/snippets.db` |
| `OPENAI_API_KEY` | **Opcional**: clave para usar OpenRouter (si deseas generar README con IA) | _no requerida_ |

> Si no se define `OPENAI_API_KEY`, la generación de documentación está desactivada.

---

## 💡 Uso Básico

### 1. Crear un nuevo snippet

```bash
# En la UI, pulsa el botón "Nuevo Snippet"
# Completa: Título, Descripción, Lenguaje, Tags → Guarda
```

### 2. Buscar snippets

```bash
# Usa el campo de búsqueda superior
# Filtra por lenguaje o por tag (ej. "react" o "javascript")
```

### 3. Editar / Eliminar

- Haz click en el ícono de lápiz 🖉 en la lista para **editar**.
- Haz click en el ícono de basura 🗑️ para **eliminar**.

### 4. Generar README con IA

1. Abre el snippet que deseas documentar.
2. Pulsa el botón **“Generate README”**.
3. La aplicación enviará el contenido a OpenRouter y recibirá un README generado con **Gemini 2.0 Flash**.

> El resultado se muestra en un modal con opción a copiar.

---

## 📂 Estructura de Archivos Relevantes

```
src/
 ├─ components/          # Componentes Astro (UI)
 ├─ services/
 │    └─ snippet.service.ts   # CRUD con SQLite
 ├─ pages/
 │    └─ index.astro        # Vista principal
 └─ styles/
      └─ globals.css        # Tailwind base
public/
 └─ assets/               # Imágenes, GIFs, etc.
```

---

## 🔗 Repositorio

🔗 **[github.com/alexidev23/codeshelf](https://github.com/alexidev23/codeshelf)**

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas 🎉.

1. Haz un _fork_ del proyecto.
2. Crea una rama para tu feature (`git checkout -b feat/mi-nueva-funcionalidad`). 3. Commit y push tus cambios. 4. Abre un _Pull Request_.

> Por favor, sigue las convenciones de commit (`feat:`, `fix:`, `docs:`) y mantén el linting con `eslint` y `prettier`.

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT** – ver el archivo `LICENSE` para más detalles.

---

_¡Gracias por usar CodeShelf! 🚀_
