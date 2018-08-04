var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("url");
document.getElementsByTagName('head')[0].appendChild(`<meta property="og:video" content="${c}">`);
