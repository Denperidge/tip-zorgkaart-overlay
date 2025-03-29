// Put all the javascript code here, that you want to execute in background.
browser.scripting.insertCSS({
    target: {tabId: ""},  // Do I need activeTab? that feels silly
    css: `
        body {
            background-color: red;
        }
    `
})
