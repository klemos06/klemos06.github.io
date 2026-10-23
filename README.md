# Keegan Lemos — engineering portfolio

A static portfolio for GitHub Pages. No build step or package installation.

## Files

- `index.html`: homepage, experience, about, and contact
- Eight project pages: hardware, embedded systems, and design-team work
- `site.css` and `site.js`: responsive layout, mobile navigation, and image viewer
- `assets/`: board renders, full schematic PDFs, schematic previews, and PCB portfolio

## Preview

From this directory, run `python -m http.server 8000`, then open `http://localhost:8000`.

## Publish to the existing repository

Copy these files into the root of `klemos06/klemos06.github.io`, preserving the existing `resume.pdf`. Commit and push to the branch used by GitHub Pages. The existing résumé link points to that public PDF; this update does not replace it.

## Editing

The site is ordinary HTML. Edit a page directly; styles and interactions are shared. Board images and the original, uncropped schematics are shown together on their project pages. School projects use typographic thumbnails rather than invented project photos.

Content is based on the supplied master résumé, PCB schematics, and the original public website. The SUBC control-loop work is explicitly marked as ongoing.
