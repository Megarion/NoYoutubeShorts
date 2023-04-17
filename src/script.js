let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
    }
}).observe(document, {subtree: true, childList: true});

function onUrlChange() {
    start();
}

function autoRedirect(){
    let redirect = lastUrl;
    window.location.replace(redirect.replace(/shorts\//, 'watch?v='));
}

function start(){
    if (lastUrl.startsWith("https://www.youtube.com/shorts")) {
        autoRedirect();
    }
}

start();