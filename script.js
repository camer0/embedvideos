var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("url");

//  var link=document.createElement('meta');
//  link.setAttribute("property", "og:video")
//  link.content=c;
//  document.getElementsByTagName('head')[0].appendChild(link);


document.write(<meta property="og:video" content="https://instagram.fbna1-2.fna.fbcdn.net/vp/b96d561ff247da07ae684cc65c658503/5B67D11B/t50.12441-16/37827313_2189647474651558_4767199933319074744_n.mp4">)

