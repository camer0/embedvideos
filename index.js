// let h = document.createElement("div")
// h.innerText = "yeet"
// document.documentElement.appendChild(h)
let url = 'https://library.iit.edu/hours'
var el = document.createElement('html');
Snekfetch.get("https://library.iit.edu/hours").then((r) => {
  el.innerHTML = r.body
  let text = document.createElement("section")
  text.innerHTML = el.getElementsByClassName("block-content content")[1].parentElement.innerHTML
  document.documentElement.appendChild(text)
  console.log('done')
  document.getElementsByClassName("page-hide bump-right")[0].innerHTML = ""
})
