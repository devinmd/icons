var icons = [
  { "name": "CPU", "src": "cpu", "tags": ['cpu', 'computer', 'pc', 'electronics', 'processing'] },
  { "name": "Monitor", "src": "monitor", "tags": ['monitor', 'tv', 'display', 'computer'] },
  { "name": "File", "src": "file", "tags": ['file'] },
  { "name": "Text File", "src": "file_text", "tags": ['file'] },
  { "name": "Credit Card", "src": "creditcard", "tags": ['payment', 'pay', 'audio', 'card', 'credit', 'creditcard', 'money', 'bank'] },
  { "name": "Speaker", "src": "speaker", "tags": ["sound", 'audio', 'noise', 'speaker'] },
  { "name": "Bug", "src": "bug", "tags": ["bug", 'insect', 'programming', 'debug', 'debugging', 'critter', 'roach', 'beatle', 'coding', 'develop', 'developing', 'developer', 'programmer', 'issue', 'problem'] },
  { "name": "Phone", "src": "phone", "tags": ["phone", 'iphone', 'mobile'] },
  { "name": "Battery 100%", "src": "battery100", "tags": ['battery', 'charge', 'energy', 'charger', 'charged'] },
  { "name": "Battery 75%", "src": "battery75", "tags": ['battery', 'charge', 'energy', 'charger', 'charged'] },
  { "name": "Battery 50%", "src": "battery50", "tags": ['battery', 'charge', 'energy', 'charger', 'charged'] },
  { "name": "Battery 25%", "src": "battery25", "tags": ['battery', 'charge', 'energy', 'charger', 'charged'] },
  { "name": "Battery 10%", "src": "battery10", "tags": ['battery', 'charge', 'energy', 'charger', 'charged'] },
  { "name": "Battery", "src": "battery", "tags": ['battery', 'charge', 'energy', 'charger', 'charged'] },
]

var content = document.querySelector('#content')

function init() {

  icons.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  generate()
}

function generate() {
  for (let i = 0; i < icons.length; i++) {
    let div = createElement('div', { 'class': 'svgbox' })
    let img = createElement('img', { 'src': `assets/${icons[i].src}.svg` })
    let name = createElement('p', { 'innerhtml': icons[i].name })
    div.append(img)
    div.append(name)
    content.append(div)
  }
}


init()



// helpers
function createElement(type, params) {
  let elem = document.createElement(type)

  if (params.innerhtml) {
    elem.innerHTML = params.innerhtml
  }
  if (params.value) {
    elem.value = params.value
  }
  if (params.placeholder) {
    elem.placeholder = params.placeholder
  }
  if (params.src) {
    elem.src = params.src
  }
  if (params.class) {
    elem.className = params.class
  }
  if (params.contenteditable) {
    elem.contentEditable = params.contenteditable
  }
  if (params.type) {
    elem.type = params.type
  }
  if (params.title) {
    elem.title = params.title
  }
  if (params.hide == true) {
    elem.style.display = 'none'
  }

  return (elem)
}