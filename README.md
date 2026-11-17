# Kamuguti Sacco website
Static site (HTML + CSS only). No build step.

## Put it on GitHub Pages
1. Create a GitHub repo, then upload everything in this folder (index.html, style.css, assets/).
2. Repo > Settings > Pages > Deploy from a branch > main, folder / (root).
3. Your site goes live at https://USERNAME.github.io/REPO/

## Connect your .ke domain
1. In Settings > Pages > Custom domain, enter your domain (e.g. kamugutisacco.co.ke) and save. Tick Enforce HTTPS once available.
2. At your domain registrar's DNS settings, add a CNAME record: www -> USERNAME.github.io
3. For the bare domain, add A records pointing to the addresses listed in GitHub's current docs ("Managing a custom domain for GitHub Pages").
4. Allow a few hours for DNS to update.

## Edit before launch
- Paybill, phone, email, address, hours (search for 000000 and 0700)
- Social links (search for YOUR_)
- Replace the striped photo boxes with real photos (see comments in index.html). Resize to about 1200px wide and under 200 KB each.
