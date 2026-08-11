# Modalina

Magazine archive with an animated, page-turning flipbook reader. Seven issues render live from their source PDFs (crop marks trimmed, print spreads split into single pages), plus a "Request a Copy" contact form.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Push to GitHub (jlimraffi/modalina)

```bash
git init
git add .
git commit -m "Modalina magazine site"
git branch -M main
git remote add origin https://github.com/jlimraffi/modalina.git
git push -u origin main
```

## Deploy to Heroku

```bash
heroku create modalina
git push heroku main
heroku open
```

Uses the Node buildpack automatically (`package.json` + `Procfile`). `server.js` serves the site statically and maps `/` to `Modalina.dc.html`.

## Contact form

Submissions are wired to Web3Forms → **marketing@raffiandco.com**. Set your access key in `Modalina.dc.html` (search for `WEB3FORMS_KEY`); until then the form falls back to opening the visitor's mail app.

## Notes

- `uploads/` holds the issue PDFs and cover images — these are large and drive the repo size.
- The reader renders each PDF in the browser on open (a few seconds per issue).
