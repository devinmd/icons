//

function init() {
  //
}

init();




// helper functions
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
