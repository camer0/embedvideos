// let h = document.createElement("div")
// h.innerText = "yeet"
// document.documentElement.appendChild(h)
let url = 'https://library.iit.edu/hours'
var el = document.createElement('html');
Snekfetch.get("https://library.iit.edu/hours").then((r) => {
  el.innerHTML = r.body
  let text = document.createElement("section")
  text.innerHTML = el.getElementById("block-iit-display-hours-hours").innerHTML
  document.documentElement.appendChild(text)
})
