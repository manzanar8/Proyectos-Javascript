let browser, es_chrome, es_firefox, es_opera, es_edg, es_exp, es_safari, es_android, es_mobile, es_ios, element, nameBrowser;
element = navigator.userAgent.toLowerCase();

es_chrome = element.indexOf('chrome');
es_firefox = element.indexOf('firefox');
es_opera = element.indexOf('opr');
es_edg = element.indexOf('edg');
es_exp = element.indexOf('trident');
es_safari = element.indexOf('safari');
es_android = element.indexOf('android');
es_mobile = element.indexOf('mobile');
es_ios = element.indexOf('os');



if (es_safari > -1 && es_chrome === -1 && es_mobile === -1) {
    browser = "safa";
    nameBrowser = "Safari";
} else if (es_firefox > -1 && es_mobile === -1) {
    browser = "fire";
    nameBrowser = "Firefox";
} else if (es_opera > -1 && es_mobile === -1) {
    browser = "oper";
    nameBrowser = "Opera";
} else if (es_edg > -1 && es_mobile === -1) {
    browser = "edge";
    nameBrowser = "Microsoft Edge";
} else if (es_chrome > -1 && es_safari > -1 && es_mobile === -1) {
    browser = "chro";
    nameBrowser = "Chrome";
} else if (es_android > -1 && es_mobile > -1 && es_ios === -1) {
    browser = "moba";
    nameBrowser = "Mobile Android";
} else if (es_safari > -1 && es_mobile > -1 && es_ios > -1) {
    browser = "mobi";
    nameBrowser = "Mobile IOS";
} else if (es_exp > -1 && es_mobile === -1) {
    browser = "expl";
    nameBrowser = "Microsoft Explorer";
}

let e = document.getElementById(browser);
e.classList.add("used");
e.classList.remove("no-used");
document.getElementById('bws_name').innerHTML = nameBrowser;

console.log("Vnavi:", navigator.userAgent);