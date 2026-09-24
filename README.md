# Sathish Kumar — Portfolio

A modern React + TypeScript portfolio designed for GitHub Pages and Google Search Console verification.

## Run locally

```bash
npm install
npm run dev
```

## Before publishing

Update these placeholders:

- `YOUR_EMAIL@example.com` in `src/App.tsx`
- `YOUR_LINKEDIN` in `src/App.tsx`
- `YOUR_GITHUB_USERNAME` in `src/App.tsx`
- `YOUR_GOOGLE_VERIFICATION_CODE` in `index.html`

## GitHub Pages

The current `vite.config.ts` assumes the repository is named `portfolio`:

```ts
base: '/portfolio/'
```

If your repository is named `<username>.github.io`, change it to:

```ts
base: '/'
```

Then push to `main`, open repository **Settings → Pages**, and choose **GitHub Actions** as the source.

## Search Console

After GitHub Pages is live, add the deployed URL as a URL-prefix property in Google Search Console. Use the HTML-tag verification method and replace `YOUR_GOOGLE_VERIFICATION_CODE` in `index.html`.
