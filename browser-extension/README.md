# Tipzo: browser extension

## How-to
### Installation
In the future, the extension will be provided on the Mozilla's add-on's & the Chrome web store.

Until then, you can do the following:
1. Download [tip-zorgkaart-overlay-***.zip file from the latest release](https://github.com/Denperidge/tip-zorgkaart-overlay/releases/latest)
2. 
    - *(Firefox)* Press `Load Temporary Add-on` in [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) 
    - *(Chrome)* Drag the zip file on top of [chrome://extensions](chrome://extensions) 


### Building from source
This requires [Node.js](https://nodejs.org/en) and [git](https://git-scm.com/) to be installed.
```bash
git clone https://github.com/Denperidge/tip-zorgkaart-overlay.git
cd tip-zorgkaart-overlay/browser-extension/

npm install
npm run build
```
That's it! The resulting zip can be found in `tip-zorgkaart-overlay/browser-extension/web-ext-artifacts/`.

### Development
This requires [Node.js](https://nodejs.org/) and [git](https://git-scm.com/) to be installed. Alongside that, Firefox and/or Chrome are needed to test the extension. Nix users can use the `nix-shell` in this directory (after cloning) to get these requirements.
```bash
git clone https://github.com/Denperidge/tip-zorgkaart-overlay.git
cd tip-zorgkaart-overlay/browser-extension/

npm install

# Run & hot-reload extension using Firefox
npm start
npm run start:ff
npm run start:firefox

# Run & hot-reload extension using Chrome
npm run start:chrome
npm run start:c
```

### Change data source
If you wish to use a different CSS source (currently `https://tipzo.neonpastel.net/extension.css`), change the entries in...
- [zorgkaart.css](zorgkaart.css)
- [details_page.js](details_page.js)
- [css_fallback](css_fallback.js)

## Explanation
### CSS fallback - External content scripts & Chrome
A real quick rundown:
- `content_scripts` refers to any CSS and JS that an extension wants to insert into specific webpages
    - Defined in [manifest.json](manifest.json)
    - Used to insert [zorgkaart.css](zorgkaart.css), [details_page.js](details_page.js), & [css_fallback.js](css_fallback.js)
    - Does **not** seem to allow external stylesheets; only what is included in the extension
- This is easy to solve in Firefox: [zorgkaart.css](zorgkaart.css) uses `@import url("https://tipzo.neonpastel.net/extension.css");`
- However, Chrome does *not* let the `@import` rule do its thing
    - *However*, JavaScript can be used to create a `<link rel="stylsheet" href="...">` element
        - **However**, this is wasted effort on Firefox, which is able to use only CSS
    - *Side note: This might be content security policy, Chrome's extension isolation or any number of things. If anyone knows a fix, PR's are more than welcome!*
- So: to check whether the external [extension.css](../webpage/src/extension.css.njk) has been loaded within zorgkaart.css, the `<title>` element will receive `background-position-x: 37%`
    - This is a *quite specific* value for a *majorly supported* attribute for a traditionally *invisible* element. This is to minimize accidental styling mishaps whilst keeping browser compatibility, page changes & CSS specifity rules in mind.
    - If the computed style of `<title>` matches that change, the `css_fallback` exits without putting in the effort of creating an additional element/request. Otherwise, create the `<link>`!
