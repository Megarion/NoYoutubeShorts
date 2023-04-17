let element = document.querySelector(".ytp-transparent");
if (window.CustomEvent) {
    element.dispatchEvent(new CustomEvent('contextmenu'));
} else if (document.createEvent) {
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('contextmenu', true, false);
    element.dispatchEvent(ev);
} else { // Internet Explorer
    element.fireEvent('oncontextmenu');
}
let option = document.querySelector(".ytp-menuitem");
option.click();
element.click();