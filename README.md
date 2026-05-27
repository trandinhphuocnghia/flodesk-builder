# Flodesk FE Home Assignment

A browser-based page builder where non-technical users can browse templates, customize them, and export as a static HTML page.

**Author:** Tran Dinh Phuoc Nghia
**Status:** Completed
**Submitted:** May 27, 2026

---

## Live Demo

🔗 [https://flodesk-builder-bice.vercel.app/]

---

## Tech Stack

- **React** + TypeScript
- **Vite** — bundler
- **Zustand** + persist — state management
- **@flodesk/grain** — design system

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
  components/   → UI components (editor, gallery, shared)
  constants/    → App constants (STORAGE_KEY)
  data/         → Hardcoded templates
  helpers/      → Style resolvers (exports: exportHTML; import:renderInternalElement; styles: resolveToHex, buildExportTextStyle)
  hooks/        → Custom hooks (useElementSelect)
  pages/        → Page components (GalleryPage, EditorPage)
  stores/       → Zustand store + slices
  types/        → TypeScript types
  utils/        → Export + download utilities (sanitize: escapeHTML, isSafeUrl)
```

---

## Features

- [ ] Template Gallery
- [ ] Page Settings
- [ ] Element Settings
- [ ] Real-time Preview
- [ ] Export Static HTML
- [ ] Auto-save to LocalStorage

---

## Planning Document

🔗 [View full planning doc](https://docs.google.com/document/d/1lszNqTcN-pQBEX0gCchfamVDr2Pt8rfz6yU94DmRAsw/edit?tab=t.0#heading=h.t7p40hwj0sgs)

---
