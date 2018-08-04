// var url_string = window.location.href
// var url = new URL(url_string);
// var c = url.searchParams.get("url");
// $('head').append(`<meta property="og:video" content="${c}">`);

 var link=document.createElement('meta');
 link.name="og:url";
 link.content=document.location;
 document.getElementsByTagName('head')[0].appendChild(link);
