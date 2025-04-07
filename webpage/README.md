# Tipzo: webpage
Turning one big [JSON data pile](src/_data/fictionalTestData.json) into [a clean stylesheet](src/extension.css.njk), individual [rating JSON's](src/ratings.json.njk) and a [homepage](src/index.njk).

## How-to
### Clone & build locally
This requires [Node.js](https://nodejs.org/) and [git](https://git-scm.com/) to be installed. Nix users can use `nix-shell` in this directory (after cloning) to get Node.js.
```bash
git clone https://github.com/Denperidge/tip-zorgkaart-overlay.git
cd tip-zorgkaart-overlay/browser-extension/

npm install
npm run start  # Run dev server on localhost:8080
npm run build  # Build website to dist/
```
