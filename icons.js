// vars
var iconcontainer = document.querySelector("#iconcontainer");

function init() {
  icons = icons.concat(arrows, battery, boxed, boxes, circular, computer, dots, file_folder, grid, align, unsorted);
  // sort icons list
  icons.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  // icon count
  document.querySelector("#iconCount").innerHTML = icons.length + " Icons";

  // url params
  let params = new URLSearchParams(document.location.search);

  // generate all icons
  for (let i = 0; i < icons.length; i++) {
    generate(icons[i]);
  }

  // do search from url params
  if (params.get("search")) {
    let searchParam = params.get("search");
    document.querySelector("#mainIconSearch").value = searchParam.toString();
    iconSearch(searchParam);
  }
}

// generate icon box from icon list
function generate(icon) {
  let div = createElement("div", { class: "svgbox box" });
  let img = createElement("img", { src: `./svgs/${icon.src}.svg` });
  let name = createElement("p", { innerhtml: icon.name });
  div.append(img);
  div.append(name);
  iconcontainer.append(div);
}

// search
function iconSearch(query) {
  document.querySelector("#mainIconSearch").value = query;
  document.title = "Icons" + (query == "" ? "" : " - " + query);
  query = query.toLowerCase().replace(/ /g, "");
  window.history.pushState("", "", `?search=${query}`);

  let queryArr = query.split(",");

  console.log(queryArr);

  // unused atm
  let count = 0;

  // remove all displayed icons
  iconcontainer.innerHTML = "";

  // if it's a match, generate that icon
  for (let i = 0; i < icons.length; i++) {
    // for each icon
    if (queryArr[0] == "") {
      generate(icons[i]);
      count += 1;
    } else {
      eachtag: for (let t = 0; t < icons[i]["tags"].length; t++) {
        // for each tag
        for (let q = 0; q < queryArr.length; q++) {
          if (queryArr[q] != "") {
            // if isn't empty
            if (icons[i]["tags"][t].includes(queryArr[q])) {
              generate(icons[i]);
              count += 1;
              console.log(count + ' - "' + query + '" : ' + icons[i]["tags"][t] + " (" + icons[i]["name"] + ")");

              // break out of both loops to not get duplicate icons
              break eachtag;
            }
          }
        }
      }
    }
  }
  console.log(query);
  document.querySelector("#iconCount").innerHTML = query == "" ? count + " Icons" : count + (count == 1 ? " Icon" : " Icons") + ' Matching "' + query.replace(/,/g, '", "') + '"';
}

document.addEventListener("keyup", function (e) {
  e = e || window.event;
  // Add scripts here
  if (e.key == "/") {
    // focus search box
    document.querySelector("#mainIconSearch").focus();
  }
});

init();
