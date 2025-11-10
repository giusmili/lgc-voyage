# Travel Word - Next.js
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

Portage du site statique en application Next.js (App Router).

**Stack**
- Next.js 14, React 18, SweetAlert2
- CSS global repris de la version d’origine

**Arborescence**
- `nextjs-app/app/` (pages et layout)
- `nextjs-app/app/globals.css` (styles globaux)
- `nextjs-app/public/asset/*` (images)
- `nextjs-app/public/favicon/*` (icônes + manifest)

**Lancer en local**
- `cd nextjs-app`
- `npm install`
- `npm run dev` puis ouvrir `http://localhost:3000`

**Déploiement (Vercel – Dashboard)**
- Sur vercel.com → “Add New Project” → “Import Git Repository”.
- Project Settings → Root Directory = `nextjs-app/`.
- Framework: “Next.js” (auto), Build: `next build` (auto), Output: Next.js (auto).
- Déployer.

**Notes**
- Les anciens fichiers statiques (`index.html`, `css/`, `js/`, `asset/`, `favicon/`) ont été supprimés au profit de `nextjs-app/`.
- Déploiement CI (GitHub Actions) et `vercel.json` retirés selon votre préférence Dashboard.
- Maquette d’origine: https://giusmili.github.io/travel_word_project/

© Powered by GiusMili - 2021
