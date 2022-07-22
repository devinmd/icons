// vars
var iconcontainer = document.querySelector("#iconcontainer");

function init() {
  // sort icons list
  icons.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  // url params
  let params = new URLSearchParams(document.location.search);

  // generate icon boxes
  generate();

  // do search from url params
  if (params.get("search")) {
    let searchParam = params.get("search");
    document.querySelector("#mainIconSearch").value = searchParam.toString();
    iconSearch(searchParam);
  }
}

// generate icon boxes
function generate() {
  for (let i = 0; i < icons.length; i++) {
    // for each icon
    let div = createElement("div", { class: "svgbox box" });
    let img = createElement("img", { src: `icons/${icons[i].src}.svg` });
    let name = createElement("p", { innerhtml: icons[i].name });

    //
    div.append(img);
    div.append(name);
    iconcontainer.append(div);
  }
}

// search
function iconSearch(query) {
  query = query.toLowerCase();
  window.history.pushState("", "", `?search=${query}`);

  for (let i = 0; i < icons.length; i++) {
    // hide all icons
    document.querySelectorAll(".svgbox")[i].style.display = "none";
    document.querySelector("#noMatchingIcons").style.display = null;
  }

  let count = 0;

  for (let i = 0; i < icons.length; i++) {
    for (let t = 0; t < icons[i]["tags"].length; t++) {
      if (icons[i]["tags"][t].includes(query)) {
        // match
        // condition: if any tags contain the query string inside
        document.querySelectorAll(".svgbox")[i].style.display = null;
        document.querySelector("#noMatchingIcons").style.display = "none";
        count += 1;
      }
    }
  }
  if(count == 0){
    // no matches
    document.querySelector("#noMatchingIcons").style.display = null;

  }
}

// start
init();
