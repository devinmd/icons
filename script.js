// vars
var iconcontainer = document.querySelector("#iconcontainer");

function init() {
  // sort icons list
  icons.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  // generate icon boxes
  generate();
}

// generate icon boxes
function generate() {
  for (let i = 0; i < icons.length; i++) {
    // for each icon
    let div = createElement("div", { class: "svgbox" });
    let img = createElement("img", { src: `assets/${icons[i].src}.svg` });
    let name = createElement("p", { innerhtml: icons[i].name });

    //
    div.append(img);
    div.append(name);
    iconcontainer.append(div);
  }
}

// search
function iconSearch(query) {
  query = query.toLowerCase()
  for (let i = 0; i < icons.length; i++) {
    // hide all icons
    document.querySelectorAll(".svgbox")[i].style.display = "none";
  }

  for (let i = 0; i < icons.length; i++) {
    for (let t = 0; t < icons[i]["tags"].length; t++) {
      if (icons[i]["tags"][t].includes(query)) {
        // match
        // condition: if any tags contain the query string inside
        console.log(icons[i]["tags"][t]);
        document.querySelectorAll(".svgbox")[i].style.display = null;
      }
    }
  }
}

// start
init();

// helpers
function createElement(type, params) {
  let elem = document.createElement(type);

  if (params.innerhtml) {
    elem.innerHTML = params.innerhtml;
  }
  if (params.value) {
    elem.value = params.value;
  }
  if (params.placeholder) {
    elem.placeholder = params.placeholder;
  }
  if (params.src) {
    elem.src = params.src;
  }
  if (params.class) {
    elem.className = params.class;
  }
  if (params.contenteditable) {
    elem.contentEditable = params.contenteditable;
  }
  if (params.type) {
    elem.type = params.type;
  }
  if (params.title) {
    elem.title = params.title;
  }
  if (params.hide == true) {
    elem.style.display = "none";
  }

  return elem;
}
