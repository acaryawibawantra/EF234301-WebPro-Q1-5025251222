# Quiz 1 — Personal Website

A simple static personal website for **EF234301 Web Programming — Quiz 1**.
It introduces the student, their hometown **Denpasar, Bali**, local food, and tourist places.

Built with plain **HTML**, **Tailwind CSS**, and a small amount of **vanilla JavaScript** — no frameworks, no backend.

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
quiz1/
├── index.html          Homepage
├── profile/index.html  Profile page
├── hometown/index.html Hometown page
├── food/index.html     Local food page
├── tourist/index.html  Tourist places page
├── assets/
│   ├── images/         Site images (PNG)
│   └── icons/          Favicon
├── js/script.js        Mobile navigation toggle
├── src/input.css       Tailwind source (colors, fonts, small components)
├── dist/output.css     Compiled Tailwind output (generated)
└── package.json
```

## Commands

```bash
npm install        # install Tailwind CSS
npm run build      # compile src/input.css -> dist/output.css
npm run dev        # recompile automatically while editing
```

To preview the site with the correct `/quiz1/...` routes, serve the **parent folder**
(the folder that contains `quiz1/`), not the `quiz1` folder itself:

```bash
cd ..
python3 -m http.server 8000
```

Then open <http://localhost:8000/quiz1/>.

## Before submitting

* Replace the placeholder boxes on the **Profile** page with your own bio, education, interests, and skills.
