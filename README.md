<div align="center">

# 🦷 Consultorio Digital DWI — Landing Page

### Landing page de marketing dirigida a odontólogos y clínicas dentales pequeñas

[![Astro](https://img.shields.io/badge/Framework-Astro_6-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)

> Sitio de presentación del SaaS **Consultorio Digital DWI**. Su objetivo es convertir visitantes
> (dentistas, secretarias, administradores de clínica) en leads a través del chat de Crisp.

</div>

---

## 🎯 Propósito y cliente objetivo

**¿A quién le hablamos?**
Odontólogos y su personal auxiliar que operan clínicas privadas pequeñas. Rechazan el software complejo y gestionan sus citas con agendas, WhatsApp y hojas de cálculo. Necesitan una solución rápida, intuitiva y sin curva de aprendizaje.

**¿Qué comunica esta landing?**
La página no tiene rutas adicionales — todo es una sola página scrollable con 3 secciones que siguen la narrativa: *Problema → Solución → Beneficios*, y el chat de Crisp actúa como CTA.

---

## 🚀 Stack

| Capa | Tecnología |
|------|-----------|
| **Framework** | [Astro 6](https://astro.build/) |
| **Estilos** | CSS vanilla con custom properties (sin frameworks) |
| **Chat / CTA** | [Crisp Chat](https://crisp.chat/) |

> Sin frameworks de UI (no React, no Tailwind). Solo Astro y CSS puro. Las librerías se agregarán solo cuando sean estrictamente necesarias.

---

## 📁 Estructura del proyecto

```
src/
├── layouts/
│   └── Layout.astro          ← Shell HTML global: lang, meta SEO, tokens CSS, Navbar, CrispChat
├── pages/
│   └── index.astro           ← Única página — importa y organiza las 3 secciones
└── components/
    ├── Navbar.astro           ← Navbar fija con smooth scroll y hamburger móvil
    ├── CrispChat.astro        ← Script de Crisp, condicional por ruta
    ├── PainPoints.astro       ← Sección 1: El Problema
    ├── Solution.astro         ← Sección 2: La Solución
    └── Benefits.astro         ← Sección 3: Beneficios + CTA final
```

### Tokens de diseño (CSS custom properties en `Layout.astro`)

Todas las secciones comparten las mismas variables. **No dupliques valores de color, spacing o tipografía — usa los tokens.**

| Token | Uso |
|-------|-----|
| `--color-primary` | Azul médico (`#1a6fbf`) — headings, énfasis, badges |
| `--color-accent` | Teal (`#0fa3a3`) — eyebrows, checkmarks secundarios |
| `--color-cta` | Verde (`#16a34a`) — todos los botones de acción |
| `--color-bg` | Gris muy claro (`#f8fafc`) — fondo de secciones impares |
| `--color-surface` | Blanco (`#ffffff`) — fondo de secciones pares |
| `--color-text-muted` | Gris medio (`#64748b`) — subtítulos, descripciones |

---

## 🗺️ Secciones y responsables

| Sección | Componente | Rama | Anclaje |
|---------|-----------|------|---------|
| Navbar global | `Navbar.astro` | `feat/navbar-global` | — |
| El Problema | `PainPoints.astro` | `feat/pain-points` | `#pain-points` |
| La Solución | `Solution.astro` | `feat/solution` | `#solution` |
| Beneficios + CTA | `Benefits.astro` | `feat/benefits` | `#benefits` |
| Crisp Chat | `CrispChat.astro` | `feat/crisp-chat` | — |

### Patrón de CTA (obligatorio en toda la landing)

Todos los botones de acción abren el chat de Crisp — **nunca** enlaces a formularios externos ni rutas nuevas:

```html
<button
  onclick="window.$crisp && window.$crisp.push(['do', 'chat:open'])"
  type="button"
>
  Texto del botón
</button>
```

### Activar Crisp en más páginas

En `Layout.astro`, modifica el array `crispPages`. Por defecto solo aparece en `/`:

```js
const crispPages = ['/'];        // solo landing
const crispPages = ['/', '/login']; // landing + login (ejemplo)
```

---

## 🌿 Flujo de trabajo (GitHub Flow)

**Regla de oro: nunca push directo a `main`. Todo entra por Pull Request.**

```bash
# 1. Asegúrate de tener main actualizado
git checkout main
git pull origin main

# 2. Trabaja en tu rama (ya creadas, solo jalás la tuya)
git checkout feat/pain-points   # o la que te corresponde

# 3. Commitea con mensajes descriptivos
git add src/components/PainPoints.astro
git commit -m "feat(pain-points): agrega copy final y reemplaza stat por dato real"

# 4. Sube tu rama
git push origin feat/pain-points

# 5. Abre PR hacia main en GitHub
```

### Ramas existentes

| Rama | Tarea principal |
|------|----------------|
| `feat/navbar-global` | Afinar logo, links y comportamiento del navbar |
| `feat/crisp-chat` | El script ya está; rama lista si se necesita ajustar |
| `feat/pain-points` | Reemplazar copy y stat de placeholder por contenido real |
| `feat/solution` | Reemplazar mockups de color por screenshots reales del producto |
| `feat/benefits` | Reemplazar métricas de placeholder por datos reales |

---

## ✅ TODOs marcados en el código

Busca `// TODO:` en cualquier componente para ver exactamente qué falta afinar:

```bash
grep -r "TODO" src/components/
```

Ejemplos de lo que encontrarás:
- Reemplazar emojis con íconos SVG oficiales
- Reemplazar datos de placeholder (73%, -60%, 15 min) con métricas reales
- Reemplazar mockups de gradiente con screenshots del producto terminado
- Agregar logo oficial en `Navbar.astro`
- Agregar enlace a demo/video en `Benefits.astro` cuando esté disponible

---

## ⚙️ Entorno de desarrollo

**1. Clona el repositorio:**

```bash
git clone https://github.com/SoyAri/consultorio-digital-landing
cd consultorio-digital-landing
```

**2. Instala dependencias:**

```bash
npm install
```

**3. Inicia el servidor de desarrollo:**

```bash
npm run dev
```

Navega a `http://localhost:4321/`.

> Si el servidor estaba corriendo mientras se modificaban archivos y ves errores de importación, reinícialo con `Ctrl+C` → `npm run dev`. Es un artefacto del hot-reload.

---

## 🛠️ Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Vista previa del build de producción |

---

## 🔗 Recursos

- [Repositorio principal del SaaS](https://github.com/SoyAri/consultorio-digitaldwi)
- [Documentación de Astro](https://docs.astro.build/)
- [Crisp Chat Dashboard](https://app.crisp.chat/)
