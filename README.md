# TPL Studios Website

UK-based web design agency website built with Astro and Tailwind CSS.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

The site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output is generated in the `dist/` directory.

## Deployment

The build outputs static HTML/CSS/JS files. Deploy the `dist/` folder to any static hosting provider (Hetzner VPS with Nginx, Netlify, Vercel, etc.).

### Nginx example

```nginx
server {
    listen 80;
    server_name tplstudios.com www.tplstudios.com;
    root /var/www/tplstudios/dist;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Contact Form

The contact form submits to Formspree. Update the form `action` URL in `src/pages/contact.astro` with your Formspree endpoint.

## Tech Stack

- **Framework**: Astro (static output)
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- **Animations**: Custom scroll reveals + canvas particle hero
- **Form**: Formspree
