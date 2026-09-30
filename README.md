# EF234301 Web Programming — Quiz 1

| **Name** | I Dewa Nyoman Acarya Wibawantra |
|---|---|
| **ID** | 5025251222 |
| **Task** | Quiz 1 — Personal Website |

A simple static personal website built with **HTML**, **Tailwind CSS**, and a small amount of **vanilla JavaScript**. It introduces me, my hometown **Denpasar, Bali**, local food, and tourist places.

## Pages

| Page | Route |
|---|---|
| Homepage | `/quiz1` |
| Profile | `/quiz1/profile` |
| Hometown | `/quiz1/hometown` |
| Local Food | `/quiz1/food` |
| Tourist Places | `/quiz1/tourist` |

## Project structure

```
├── quiz1/
│   ├── index.html           Homepage
│   ├── profile/index.html   Profile page
│   ├── hometown/index.html  Hometown page
│   ├── food/index.html      Local food page
│   ├── tourist/index.html   Tourist places page
│   ├── assets/
│   │   ├── images/          Site images
│   │   └── icons/           Favicon
│   ├── js/script.js         Mobile navigation toggle
│   ├── src/input.css        Tailwind source (colors, fonts, small components)
│   ├── dist/output.css      Compiled Tailwind output (committed)
│   └── package.json
├── vercel.json              Deployment config
└── README.md
```

## Commands

```bash
cd quiz1
npm install        # install Tailwind CSS
npm run build      # compile src/input.css -> dist/output.css
npm run dev        # recompile automatically while editing
```

To preview the site locally with the correct `/quiz1/...` routes, serve the **repo root**
(the folder that contains `quiz1/`), not the `quiz1` folder itself:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/quiz1/>.
