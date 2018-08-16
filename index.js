// let h = document.createElement("div")
// h.innerText = "yeet"
// document.documentElement.appendChild(h)
let url = 'https://library.iit.edu/hours'

$.ajax({
  crossOrigin: true,
  url: url,
  success: function(data) {
    alert('yeah')
  }
});
