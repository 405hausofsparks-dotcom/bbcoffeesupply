# B&B Coffee Supply

Official website for **B&B Coffee Supply**, the wholesale coffee distribution
division of **Bombed & Burnt Coffee Co.** — veteran-founded in Moore, Oklahoma,
shipping fresh-roasted wholesale, bulk, and private-label coffee nationwide.

A fast, static, single-page marketing site. **No build step, no framework.**
Plain HTML5 + CSS3, with a small vanilla-JS layer for the mobile menu and
footer year. It can be hosted on any static host; this repo is set up for
**Cloudflare Pages**.

---

## Source of truth

- **GitHub** — master copy. All changes happen here via commits/PRs.
- **Cloudflare Pages** — the live site. Auto-deploys from `main`.
- **Nobody edits files directly on Cloudflare.** Edit locally → commit → push → it deploys.

---

## Project structure

```
.
├── index.html            # The full landing page
├── 404.html              # Branded not-found page
├── css/
│   └── style.css         # All styling
├── js/
│   └── main.js           # Progressive enhancement (mobile nav, footer year)
├── assets/
│   ├── images/           # Logos (PNG + WebP), Open Graph image
│   └── icons/            # Favicons, app icons, standalone SVG icons
├── robots.txt            # Crawler directives + sitemap pointer
├── sitemap.xml           # URL list for search engines
├── site.webmanifest      # PWA/icon metadata
├── _headers              # Cloudflare caching + security headers
└── README.md
```

---

## Before going live: remaining setup

The live domain, business email, and phone placeholders have been filled in:
the site now uses `bbcoffeesupply.com` and `wholesale@bbcoffeesupply.com`
throughout, and since no phone line is active yet, the contact section shows
"Phone support coming soon." instead of a placeholder number. A few optional
third-party integrations still need your own account IDs before they'll work:

| Placeholder | Where | Replace with |
|---|---|---|
| `YOUR_FORM_ID` | `index.html`, `private-label/index.html` contact forms | Your Formspree form ID (see below) |
| `G-XXXXXXXXXX` | `index.html` GA4 block | Your GA4 Measurement ID |
| `PASTE-VERIFICATION-TOKEN-HERE` | `index.html` | Google Search Console token |

The business name and address (Bombed & Burnt Coffee Co. / B&B Coffee Supply,
328 SW 40th St, Moore, OK 73160) are already filled in.

### Contact form

The form posts to **Formspree** (free tier, no server needed):
1. Sign up at https://formspree.io and create a form.
2. Copy the form ID and paste it over `YOUR_FORM_ID` in `index.html`.
That's it — submissions arrive in your email. A honeypot field is already
included to reduce spam.

### Google Analytics 4

1. Create a GA4 property, copy the Measurement ID (`G-XXXXXXXXXX`).
2. In `index.html`, replace the ID and **uncomment** the two GA4 `<script>` blocks.

### Google Search Console

1. In Search Console, add your domain and choose **HTML tag** verification.
2. Paste the token into the `google-site-verification` meta tag in `index.html`.
3. After deploy, submit `https://www.bbcoffeesupply.com/sitemap.xml`.

---

## Local preview

No tooling required. Either open `index.html` in a browser, or serve the folder
so that root-absolute paths (`/css/...`, `/assets/...`) resolve correctly:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

---

## Deploy to Cloudflare Pages (connected to GitHub)

One-time setup:

1. Push this repo to GitHub (see below).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
3. Authorize GitHub and pick this repository.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`
5. **Save and Deploy.**

After that, **every push to `main` auto-deploys.** No manual uploads.

### Custom domain (Namecheap)

In the Pages project → **Custom domains** → add `yourdomain.com` and
`www.yourdomain.com`. Cloudflare shows the exact DNS records to set at
Namecheap (or prompts you to switch nameservers). SSL is issued automatically.

---

## Everyday workflow

```bash
# make edits, then:
git add -A
git commit -m "Describe the change"
git push
# Cloudflare builds and publishes within ~1 minute
```

---

© Bombed & Burnt Coffee Co. · B&B Coffee Supply. All rights reserved.
