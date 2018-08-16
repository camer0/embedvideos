// let h = document.createElement("div")
// h.innerText = "yeet"
// document.documentElement.appendChild(h)
let url = 'https://library.iit.edu/hours'
var el = document.createElement('html');
Snekfetch.get("https://library.iit.edu/hours").then((r) => {
  el.innerHTML = r.body
  let text = document.createElemnt("div")
  text.innerText = el.getElementsByClassName("clear")[0].children[0].innerText
  document.documentElement.appendChild(text)
})
