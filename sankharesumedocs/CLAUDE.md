# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a LaTeX resume for Sankha Banerjee. It uses the PlushCV template (a two-column, one-page resume format) with a custom document class.

## Key Files

- `sankha.tex` — Main resume content. Uses `\documentclass[]{plushcv}` (mapped to `sankha.cls`).
- `sankha.cls` — Custom LaTeX class defining layout, fonts, colors, and commands.
- `sankha.md` — Full-length LinkedIn-style profile text used as source material for resume content.

## Build

**Must be compiled with XeLaTeX** (not pdflatex) due to `fontspec` usage for custom fonts:

```bash
xelatex sankha.tex
```

## Dependencies

The template expects these local asset directories (not currently in the repo):
- `fonts/` — Font files: `inter/`, `sourcesanspro/`, `officecodeprod/`
- `icons/main/` — PNG icons: `home.png`, `github.png`, `linkedin.png`, `mail.png`, `phone.png`

## Architecture Notes

- The `.cls` file defines all custom commands: `\namesection`, `\contactline`, `\runsubsection`, `\descript`, `\location`, `\sectionsep`, `\tightemize`
- Layout is a 70/30 two-column split using `minipage` environments
- Color scheme uses hex colors: title `#1D76E2`, primary `#2b2b2b`, headings `#6A6A6A`
- The resume is designed to fit on a single page; overflowing content will break the layout
