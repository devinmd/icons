//
var icons = [];
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
  { name: "Arrows Inward", src: "arrows/arrows_in_2", tags: ["arrow"] },
  { name: "Arrows Up", src: "arrows/arrows_up", tags: ["arrow"] },
  { name: "Arrows Up", src: "arrows/arrows_up_1", tags: ["arrow"] },
  { name: "Arrows Right", src: "arrows/arrows_right", tags: ["arrow"] },
  { name: "Arrows Right", src: "arrows/arrows_right_1", tags: ["arrow"] },
  { name: "Arrows Left", src: "arrows/arrows_left", tags: ["arrow"] },
  { name: "Arrows Left", src: "arrows/arrows_left_1", tags: ["arrow"] },
  { name: "Arrows Outward", src: "arrows/arrows_out", tags: ["arrow"] },
  { name: "Arrows Outward", src: "arrows/arrows_out_1", tags: ["arrow"] },
  { name: "Arrows Outward", src: "arrows/arrows_out_2", tags: ["arrow"] },
  { name: "Arrows Left-Right", src: "arrows/arrows_left_right", tags: ["arrow"] },
  { name: "Arrows Left-Right", src: "arrows/arrows_left_right_1", tags: ["arrow"] },
  { name: "Arrows Up-Down", src: "arrows/arrows_up_down", tags: ["arrow"] },
  { name: "Arrows Up-Down", src: "arrows/arrows_up_down_1", tags: ["arrow"] },
  { name: "Caret Down", src: "arrows/caret_down", tags: ["arrow"] },
  { name: "Caret Down", src: "arrows/caret_down_1", tags: ["arrow"] },
  { name: "Caret Down", src: "arrows/caret_down_2", tags: ["arrow"] },
  { name: "Caret Right", src: "arrows/caret_right", tags: ["arrow"] },
  { name: "Caret Right", src: "arrows/caret_right_1", tags: ["arrow"] },
  { name: "Caret Right", src: "arrows/caret_right_2", tags: ["arrow"] },
  { name: "Caret Right", src: "arrows/caret_right_3", tags: ["arrow"] },
  { name: "Caret Right", src: "arrows/caret_right_4", tags: ["arrow"] },
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
  { name: "Box", src: "boxed/box", tags: ["boxed"] },
  { name: "Check", src: "boxed/check", tags: ["boxed"] },
  { name: "Code", src: "boxed/code", tags: ["boxed"] },
  { name: "Columns", src: "boxed/columns", tags: ["boxed"] },
  { name: "Divider", src: "boxed/divider", tags: ["boxed"] },
  { name: "Grid", src: "boxed/grid", tags: ["boxed"] },
  { name: "Heading", src: "boxed/heading", tags: ["boxed"] },
  { name: "Heading", src: "boxed/heading_1", tags: ["boxed"] },
  { name: "Image", src: "boxed/image", tags: ["boxed"] },
  { name: "Line", src: "boxed/line", tags: ["boxed"] },
  { name: "Lines", src: "boxed/lines", tags: ["boxed"] },
  { name: "List", src: "boxed/list", tags: ["boxed"] },
  { name: "List", src: "boxed/list_1", tags: ["boxed"] },
  { name: "Text", src: "boxed/text", tags: ["boxed"] },
  { name: "X", src: "boxed/x", tags: ["boxed"] },
  { name: "Arrow", src: "boxed/arrow_up", tags: ["boxed"] },
  { name: "Plus", src: "boxed/plus", tags: ["boxed"] },
  { name: "Arrow", src: "boxed/arrow_right", tags: ["boxed"] },

];

//
// box icons
var boxes = [
  { name: "Boxes", src: "boxes/boxes_four", tags: ["boxes"] },
  { name: "Boxes Plus", src: "boxes/boxes_plus", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_three", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_three_1", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_three_2", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_three_3", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_three_4", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_two", tags: ["boxes"] },
  { name: "Boxes", src: "boxes/boxes_two_1", tags: ["boxes"] },
  { name: "Boxes X", src: "boxes/boxes_x", tags: ["boxes"] },
];

//
// circular icons
var circular = [
  { name: "Arrow Circle", src: "circular/arrow_circle", tags: ["circular", "arrow"] },
  { name: "Check Circle", src: "circular/check_circle", tags: ["circular"] },
  { name: "Circle ", src: "circular/circle", tags: ["circular"] },
  { name: "Circe Circle", src: "circular/circle_circle", tags: ["circular"] },
  { name: "Circle Circle", src: "circular/circle_circle_1", tags: ["circular"] },
  { name: "Play Circle", src: "circular/play_circle", tags: ["circular"] },
  { name: "Plus Circle", src: "circular/plus_circle", tags: ["circular"] },
  { name: "Square Circle", src: "circular/square_circle", tags: ["circular"] },
  { name: "Square Circle", src: "circular/square_circle_1", tags: ["circular"] },
  { name: "X Circle", src: "circular/x_circle", tags: ["circular"] },
];

//
// computer icons
var computer = [
  { name: "CPU", src: "computer/cpu", tags: ["computer"] },
  { name: "GPU", src: "computer/gpu", tags: ["computer"] },
  { name: "Keyboard", src: "computer/keyboard", tags: ["computer"] },
  { name: "Monitor", src: "computer/monitor", tags: ["computer"] },
  { name: "Mouse", src: "computer/mouse", tags: ["computer"] },
  { name: "Phone", src: "computer/phone", tags: ["computer"] },
  { name: "Phone", src: "computer/phone_1", tags: ["computer"] },
  { name: "RAM", src: "computer/ram", tags: ["computer"] },
  { name: "Speaker", src: "computer/speaker", tags: ["computer"] },
  { name: "Laptop", src: "computer/laptop", tags: ["computer"] },
  { name: "Server", src: "computer/computer", tags: ["computer"] },
  { name: "Server", src: "computer/computer_1", tags: ["computer"] },
  { name: "Servers", src: "computer/computers", tags: ["computer"] },
  { name: "Servers", src: "computer/computers_1", tags: ["computer"] },
];

//
// dot icons
var dots = [
  { name: "Dot", src: "dots/dot", tags: ["dot", "dots"] },
  { name: "Dots", src: "dots/dot_grid", tags: ["dot", "dots"] },
  { name: "Dots", src: "dots/dots", tags: ["dot", "dots"] },
];

//
// file & folder icons
var file_folder = [
  { name: "File", src: "file_folder/file", tags: ["file"] },
  { name: "File Plus", src: "file_folder/file_plus", tags: ["file"] },
  { name: "File Up", src: "file_folder/file_up", tags: ["file"] },
  {
    name: "File Check",
    src: "file_folder/file_check",
    tags: ["file"],
  },

  { name: "File Text", src: "file_folder/file_text", tags: ["file"] },
  { name: "Folder", src: "file_folder/folder", tags: ["folder"] },
  { name: "Folder Plus", src: "file_folder/folder_plus", tags: ["folder"] },
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
// align icons
var align = [
  { name: "Align Center", src: "align/align_center", tags: ["align"] },
  { name: "Align Justify", src: "align/align_justify", tags: ["align"] },
  { name: "Align Left", src: "align/align_left", tags: ["align"] },
  { name: "Align Right", src: "align/align_right", tags: ["align"] },
  { name: "Align Left", src: "align/align_left_1", tags: ["align"] },
  { name: "Align Right", src: "align/align_right_1", tags: ["align"] },
  { name: "Align Top", src: "align/align_top", tags: ["align"] },
  { name: "Align Bottom", src: "align/align_bottom", tags: ["align"] },
];

//
// unsorted icons
var unsorted = [
  { name: "Text", src: "text", tags: ["text"] },

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
    tags: ["circles"],
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
    name: "Pen Disabled",
    src: "pen_no",
    tags: ["pen", "write", "edit"],
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
    tags: ["lock", "unlock", "padlock"],
  },
  {
    name: "Lock Small",
    src: "lock_small",
    tags: ["lock", "unlock", "padlock"],
  },
  {
    name: "User",
    src: "user",
    tags: ["person", "account", "user"],
  },
  {
    name: "Video",
    src: "video",
    tags: ["video", "media"],
  },
  {
    name: "X",
    src: "x",
    tags: ["x", "cancel", "delete", "remove"],
  },

  {
    name: "Check",
    src: "check",
    tags: ["check", "complete", "ok", "good", "yes", "confirm", "correct"],
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
  },*/
];
