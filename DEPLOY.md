# amogujennifer.com — how to publish and how to edit

Plain HTML/CSS/JS. No build step. Every page is a file you can open and edit.

    index.html        home
    experience.html   seats + education
    venture.html      SEYA
    notes.html        what I'm learning
    now.html          Spotify + pods + off the clock
    colophon.html     how this was made (the Recalc reflection)
    styles.css        all styling (colors at the top, dark theme under [data-theme="dark"])
    main.js           clock, dark toggle, scroll reveals, folder tilt, ticker
    assets/           resume PDF + SEYA photos
    CNAME             tells GitHub Pages which domain this is

## Preview locally

    cd ~/amogujennifer.com && python3 -m http.server 4610
    open http://localhost:4610

## Publish (GitHub Pages, free, ~10 min one time)

1. Sign in to GitHub in the terminal with YOUR account (not Integrusrocks):

       gh auth logout
       gh auth login

2. Create the repo and push:

       cd ~/amogujennifer.com
       gh repo create amogujennifer.com --public --source=. --push

3. Turn on Pages: GitHub → repo → Settings → Pages → Source "Deploy from a branch",
   branch `main`, folder `/ (root)`, Save. Under "Custom domain" type amogujennifer.com,
   Save, and tick "Enforce HTTPS" once it's available (can take a few minutes).

4. Point the domain. The domain was bought through Lovable (registrar is Name.com),
   so DNS lives in Lovable:
   Lovable → Workspace settings → Workspace domains → amogujennifer.com → Configure → DNS records.
   Delete the existing A record for `@` that points at Lovable (185.158.133.1), then add:

       Type   Host   Answer
       A      @      185.199.108.153
       A      @      185.199.109.153
       A      @      185.199.110.153
       A      @      185.199.111.153
       CNAME  www    <your-github-username>.github.io

   Records with a lock icon are Lovable's own and can't be edited. If the `@` A record is locked,
   use the "Nameservers" section instead and point the domain at a free Cloudflare DNS zone,
   then add the same records there.

5. Wait 5–30 minutes, then check https://amogujennifer.com. Old Lovable site can be
   unpublished afterwards (Lovable → project → Publish → Unpublish).

## Edit later

Change a file, then:

    cd ~/amogujennifer.com && git add -A && git commit -m "update" && git push

GitHub Pages redeploys in about a minute. Or open this folder in Claude Code and ask.
