# mehediessence.github.io

Personal website of Mehedi Hasan, a software engineer working on software and systems security.

Live at **https://mehediessence.github.io**

## Content

- `data/news.ts`: news and highlights. Use `YYYY-MM-DD`, or `YYYY-MM` when the exact day is unknown
- `data/projects.ts`: research and side projects
- `data/publications.ts`: papers
- `components/Home/Now.vue`: the `now.txt` block on the home page
- `public/.well-known/security.txt`: security contact ([RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)). Renew `Expires` yearly

## Tech stack

Nuxt 3, Vue, Tailwind CSS, Nuxt UI and Nuxt Content, deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
yarn install
yarn dev        # http://localhost:3000
yarn generate   # static build
```
