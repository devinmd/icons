//
var icons = []
//



//
// arrows
var arrows = [
  // arrows
  { name: "Arrow Right", src: "arrows/arrow_right", tags: ["arrow"] },
  { name: "Arrow Right", src: "arrows/arrow_right_long", tags: ["arrow"] },
  { name: "Arrows Down", src: "arrows/arrows_down", tags: ["arrow"] },
  { name: "Arrows Down", src: "arrows/arrows_down_1", tags: ["arrow"] },
  { name: "Arrows Inward", src: "arrows/arrows_in", tags: ["arrow"] },
  { name: "Arrows Inward", src: "arrows/arrows_in_1", tags: ["arrow"] },
  { name: "Arrows Up", src: "arrows/arrows_up", tags: ["arrow"] },
  { name: "Arrows Up", src: "arrows/arrows_up_1", tags: ["arrow"] },
  { name: "Arrows Right", src: "arrows/arrows_right", tags: ["arrow"] },
  { name: "Arrows Right", src: "arrows/arrows_right_1", tags: ["arrow"] },
  { name: "Arrows Left", src: "arrows/arrows_left", tags: ["arrow"] },
  { name: "Arrows Left", src: "arrows/arrows_left_1", tags: ["arrow"] },
  { name: "Arrows Outward", src: "arrows/arrows_out", tags: ["arrow"] },
  { name: "Arrows Outward", src: "arrows/arrows_out_1", tags: ["arrow"] },
  { name: "Arrows Left-Right", src: "arrows/arrows_left_right", tags: ["arrow"] },
  { name: "Arrows Up-Down", src: "arrows/arrows_up_down", tags: ["arrow"] },
  // carets
  { name: "Caret Down", src: "arrows/caret_down", tags: ["arrow", "caret"] },
  { name: "Caret Down", src: "arrows/caret_down_1", tags: ["arrow", "caret"] },
  { name: "Caret Down", src: "arrows/caret_down_2", tags: ["arrow", "caret"] },
  { name: "Caret Right", src: "arrows/caret_right", tags: ["arrow", "caret"] },
  { name: "Caret Right", src: "arrows/caret_right_1", tags: ["arrow", "caret"] },
  { name: "Caret Right", src: "arrows/caret_right_2", tags: ["arrow", "caret"] },
  { name: "Caret Right", src: "arrows/caret_right_3", tags: ["arrow", "caret"] },
  { name: "Caret Right", src: "arrows/caret_right_4", tags: ["arrow", "caret"] },
];

//
// batteries
var battery = [
  { name: "Battery 0%", src: "battery/battery0", tags: ["battery"] },
  { name: "Battery 10%", src: "battery/battery10", tags: ["battery"] },
  { name: "Battery 25%", src: "battery/battery25", tags: ["battery"] },
  { name: "Battery 50%", src: "battery/battery50", tags: ["battery"] },
  { name: "Battery 75%", src: "battery/battery75", tags: ["battery"] },
  { name: "Battery 100%", src: "battery/battery100", tags: ["battery"] },
];

//
// boxed icons
var boxed = [
  { name: "Divider", src: "boxed/divider_box", tags: ["boxed", "box", "block", "text", "divider"] },
  { name: "Heading", src: "boxed/heading_box", tags: ["boxed", "box", "block", "text", "heading"] },
  { name: "Text", src: "boxed/text_box", tags: ["boxed", "box", "text"] },
  { name: "Code", src: "boxed/code_box", tags: ["boxed", "box", "block", "code", "terminal"] },
  { name: "Plus", src: "boxed/plus_box", tags: ["boxed", "box", "block", "plus", "new", "add"] },
  { name: "Box", src: "boxed/box", tags: ["boxed", "box", "block"] },
];

//
// box icons
var boxes = [
  { name: "Boxes", src: "boxes/boxes_four", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes Plus", src: "boxes/boxes_plus", tags: ["boxes", "box", "block", "layout", "plus", "add", "new"] },
  { name: "Boxes", src: "boxes/boxes_three", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes", src: "boxes/boxes_three_1", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes", src: "boxes/boxes_three_2", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes", src: "boxes/boxes_three_3", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes", src: "boxes/boxes_three_4", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes", src: "boxes/boxes_two", tags: ["boxes", "box", "block", "layout"] },
  { name: "Boxes", src: "boxes/boxes_two_1", tags: ["boxes", "box", "block", "layout"] },
  {
    name: "Boxes X",
    src: "boxes/boxes_x",
    tags: ["boxes", "box", "block", "layout", "x", "delete", "remove", "cancel"],
  },
];

//
// circular icons
var circular = [
  { name: "Arrow Circle", src: "circular/arrow_circle", tags: ["circle", "circular", "arrow"] },
  {
    name: "Check Circle",
    src: "circular/check_circle",
    tags: ["circle", "circular", "check", "yes", "ok", "confirm", "correct", "round"],
  },
  { name: "Circle ", src: "circular/circle", tags: ["circle", "circular", "round"] },
  { name: "Circe Circle", src: "circular/circle_circle", tags: ["circle", "circular", "round"] },
  { name: "Circle Circle", src: "circular/circle_circle_1", tags: ["circle", "circular", "round"] },
  { name: "Play Circle", src: "circular/play_circle", tags: ["circle", "circular", "play", "round"] },
  { name: "Plus Circle", src: "circular/plus_circle", tags: ["circle", "circular", "plus", "new", "add", "round"] },
  { name: "Square Circle", src: "circular/square_circle", tags: ["circle", "circular", "square", "round"] },
  { name: "Square Circle", src: "circular/square_circle_1", tags: ["circle", "circular", "square", "round"] },
  {
    name: "X Circle",
    src: "circular/x_circle",
    tags: ["circle", "circular", "x", "cancel", "remove", "delete", "round"],
  },
];

//
// computer icons
var computer = [
  { name: "CPU", src: "computer/cpu", tags: ["computer", "cpu", "processor", "electronics", "electronic"] },
  {
    name: "GPU",
    src: "computer/gpu",
    tags: ["computer", "cpu", "processor", "electronics", "electronic", "graphic", "graphics"],
  },
  { name: "Keyboard", src: "computer/keyboard", tags: ["computer", "typing", "keyboard", "key", "keys"] },
  { name: "Monitor", src: "computer/monitor", tags: ["computer", "monitor", "tv", "display"] },
  { name: "Mouse", src: "computer/mouse", tags: ["computer", "mouse", "click", "scroll"] },
  { name: "Phone", src: "computer/phone", tags: ["computer", "phone", "mobile"] },
  { name: "RAM", src: "computer/ram", tags: ["computer", "ram", "memory"] },
  { name: "Speaker", src: "computer/speaker", tags: ["computer", "speaker", "audio", "sound", "noise"] },
];

//
// dot icons
var dots = [
  { name: "Dot", src: "dots/dot", tags: ["dot", "circle", "dots"] },
  { name: "Dots", src: "dots/dot_grid", tags: ["dot", "circle", "dots"] },
  { name: "Dots", src: "dots/dots", tags: ["dot", "circle", "dots"] },
];

//
// file & folder icons
var file_folder = [
  { name: "File", src: "file_folder/file", tags: ["file", "document"] },
  { name: "File Plus", src: "file_folder/file_plus", tags: ["file", "new", "add", "document", "plus"] },
  { name: "File Text", src: "file_folder/file_text", tags: ["file", "document", "text"] },
  { name: "Folder", src: "file_folder/folder", tags: ["folder"] },
  { name: "Folder Plus", src: "file_folder/folder_plus", tags: ["folder", "new", "add", "plus"] },
];

//
// grid icons
var grid = [
  { name: "Grid", src: "grid/grid", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_1", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_2", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_3", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_4", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_5", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_6", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_7", tags: ["grid"] },
  { name: "Grid", src: "grid/grid_8", tags: ["grid"] },
];

//
// text icons
var text = [
  { name: "Align Center", src: "text/align_center", tags: ["align", "text"] },
  { name: "Align Justify", src: "text/align_justify", tags: ["align", "text"] },
  { name: "Align Left", src: "text/align_left", tags: ["align", "text"] },
  { name: "Align Right", src: "text/align_right", tags: ["align", "text"] },
  { name: "Text", src: "text/text", tags: ["text"] },
];

//
// unsorted icons
var unsorted = [
  {
    name: "Align Left",
    src: "align_left",
    tags: ["align"],
  },
  {
    name: "Align Right",
    src: "align_right",
    tags: ["align"],
  },
  {
    name: "Align Top",
    src: "align_top",
    tags: ["align"],
  },
  {
    name: "Align Bottom",
    src: "align_bottom",
    tags: ["align"],
  },

  {
    name: "App Window",
    src: "app_window",
    tags: ["app", "application", "window", "container"],
  },
  {
    name: "Asterisk",
    src: "asterisk",
    tags: ["star", "asterisk"],
  },
  {
    name: "Bug",
    src: "bug",
    tags: ["bug"],
  },
  {
    name: "Circles",
    src: "circles",
    tags: ["circle", "circles"],
  },
  {
    name: "Clock",
    src: "clock",
    tags: ["clock", "time"],
  },
  {
    name: "Code",
    src: "code",
    tags: ["code"],
  },
  {
    name: "Code",
    src: "code_1",
    tags: ["code"],
  },
  {
    name: "Credit Card",
    src: "credit_card",
    tags: ["credit", "card", "credit card", "pay", "payment", "bank"],
  },
  {
    name: "Diamond",
    src: "diamond",
    tags: ["shapes", "diamond", "random", "object", "items", "thing", "objects", "things", "shape"],
  },
  {
    name: "House",
    src: "house",
    tags: ["house", "home", "live", "living"],
  },
  {
    name: "Image",
    src: "image",
    tags: ["image", "media", "photo", "photograph"],
  },
  {
    name: "Lock",
    src: "lock",
    tags: ["lock", "padlock"],
  },
  {
    name: "Oval",
    src: "oval",
    tags: ["object", "shape", "oval", "round"],
  },
  {
    name: "Pen",
    src: "pen",
    tags: ["pen", "write", "edit"],
  },
  {
    name: "Pen Write",
    src: "pen_edit",
    tags: ["pen", "write", "edit"],
  },
  {
    name: "Plus",
    src: "plus",
    tags: ["new", "plus", "add"],
  },
  {
    name: "Gift Box",
    src: "present",
    tags: ["present", "gift", "gift box"],
  },
  {
    name: "Shapes",
    src: "shapes",
    tags: [
      "shapes",
      "circle",
      "square",
      "diamond",
      "triangle",
      "random",
      "object",
      "items",
      "thing",
      "objects",
      "things",
      "shape",
    ],
  },
  {
    name: "Slider",
    src: "slider",
    tags: ["slider", "toggle", "switch"],
  },
  {
    name: "Trash",
    src: "trash",
    tags: ["delete", "remove", "trash"],
  },
  {
    name: "Unlock",
    src: "unlock",
    tags: ["lock", "unlock",'padlock'],
  },
  {
    name: "User",
    src: "user",
    tags: ["person", "account",'user'],
  },
  {
    name: "Video",
    src: "video",
    tags: ["video", "media"],
  },
  {
    name: "X",
    src: "x",
    tags: ["x", "cancel",'delete','remove'],
  },
  /*
  {
    name: "",
    src: "",
    tags: ["", ""],
  },
  {
    name: "",
    src: "",
    tags: ["", ""],
  },
  {
    name: "",
    src: "",
    tags: ["", ""],
  },*/
];
