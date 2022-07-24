var batteryTags = [
  "power",
  "charge",
  "battery",
  "electronnic",
  "electricity",
  "energy",
  "charger",
  "charging",
];

var boxTags = ["boxes", "box", "layout", "block", "blocks"];

var gridTags = ["grid", "split", "layout", "row", "column", "sheet", "chart"];

var icons = [
  {
    name: "CPU",
    src: "cpu",
    tags: ["cpu", "computer", "pc", "electronics", "processing"],
  },

  {
    name: "GPU",
    src: "gpu",
    tags: [
      "gpu",
      "computer",
      "pc",
      "electronics",
      "processing",
      "graphics",
      "graphical",
    ],
  },
  {
    name: "Monitor",
    src: "monitor",
    tags: ["monitor", "tv", "display", "computer", "pc", "device"],
  },
  { name: "File", src: "files_folder/file", tags: ["file", "document"] },
  {
    name: "Text File",
    src: "files_folder/file_text",
    tags: ["file", "text", "document"],
  },
  {
    name: "Credit Card",
    src: "creditcard",
    tags: ["payment", "pay", "card", "credit", "creditcard", "money", "bank"],
  },
  {
    name: "Speaker",
    src: "speaker",
    tags: ["sound", "audio", "noise", "speaker", "device", "computer"],
  },
  {
    name: "Bug",
    src: "bug",
    tags: [
      "bug",
      "insect",
      "programming",
      "debug",
      "debugging",
      "critter",
      "roach",
      "beetle",
      "coding",
      "develop",
      "developing",
      "developer",
      "code",
      "programmer",
      "issue",
      "problem",
    ],
  },
  {
    name: "Code",
    src: "code",
    tags: [
      "programming",
      "coding",
      "develop",
      "developing",
      "developer",
      "code",
      "programmer",
    ],
  },
  {
    name: "Bug Circle",
    src: "bug_circle",
    tags: [
      "bug",
      "insect",
      "circle",
      "circular",
      "programming",
      "debug",
      "code",
      "debugging",
      "critter",
      "roach",
      "beetle",
      "coding",
      "develop",
      "developing",
      "developer",
      "programmer",
      "issue",
      "problem",
    ],
  },
  {
    name: "Phone",
    src: "phone",
    tags: ["phone", "iphone", "mobile", "device", "computer"],
  },
  {
    name: "Battery 100%",
    src: "battery/battery100",
    tags: batteryTags,
  },
  {
    name: "Battery 75%",
    src: "battery/battery75",
    tags: batteryTags,
  },
  {
    name: "Battery 50%",
    src: "battery/battery50",
    tags: batteryTags,
  },
  {
    name: "Battery 25%",
    src: "battery/battery25",
    tags: batteryTags,
  },
  {
    name: "Battery 10%",
    src: "battery/battery10",
    tags: batteryTags,
  },
  {
    name: "Battery 0%",
    src: "battery/battery0",
    tags: batteryTags,
  },
  {
    name: "Clock",
    src: "clock",
    tags: ["clock", "time"],
  },
  {
    name: "RAM",
    src: "ram",
    tags: ["ram", "memory", "computer", "pc", "electronics"],
  },

  {
    name: "X",
    src: "x",
    tags: ["x", "close", "exit", "cross", "no", "cancel", "none", "error"],
  },
  {
    name: "X Circle",
    src: "x_circle",
    tags: [
      "x",
      "close",
      "exit",
      "cross",
      "no",
      "cancel",
      "none",
      "error",
      "circular",
      "circle",
    ],
  },
  {
    name: "Arrow",
    src: "arrows/arrow1",
    tags: ["arrow"],
  },
  {
    name: "Long Arrow",
    src: "arrows/arrowlong1",
    tags: ["arrow"],
  },
  {
    name: "Caret 1",
    src: "arrows/caret1",
    tags: ["caret", "arrow"],
  },
  {
    name: "Caret 2",
    src: "arrows/caret2",
    tags: ["caret", "arrow"],
  },
  {
    name: "Caret 1 Double",
    src: "arrows/caret3",
    tags: ["caret", "arrow"],
  },
  {
    name: "Caret 2 Double",
    src: "arrows/caret4",
    tags: ["caret", "arrow"],
  },
  {
    name: "Caret 1 Triple",
    src: "arrows/caret5",
    tags: ["caret", "arrow"],
  },
  {
    name: "Caret 2 Triple",
    src: "arrows/caret6",
    tags: ["caret", "arrow"],
  },
  {
    name: "Slider",
    src: "slider",
    tags: ["slider", "toggle", "switch", "input"],
  },
  {
    name: "Mouse",
    src: "mouse",
    tags: [
      "mouse",
      "pointer",
      "click",
      "device",
      "computer",
      "peripheral",
      "pc",
      "button",
      "input",
      "cursor",
      "point",
    ],
  },
  {
    name: "Folder",
    src: "files_folder/folder",
    tags: ["folder", "files", "directory", "library"],
  },
  {
    name: "Folder Add",
    src: "files_folder/folder_plus",
    tags: ["folder", "files", "directory", "library", "plus", "add", "new"],
  },

  {
    name: "File Add",
    src: "files_folder/file_plus",
    tags: ["plus", "add", "file", "document", "new"],
  },

  {
    name: "Shapes",
    src: "shapes",
    tags: [
      "box",
      "game",
      "games",
      "random",
      "shapes",
      "items",
      "blocks",
      "things",
      "block",
      "triangle",
      "diamond",
      "square",
      "circle",
    ],
  },
  {
    name: "Boxes",
    src: "boxes/boxes4",
    tags: boxTags,
  },
  {
    name: "Boxes",
    src: "boxes/boxes3",
    tags: boxTags,
  },
  {
    name: "Boxes",
    src: "boxes/boxes3_1",
    tags: boxTags,
  },
  {
    name: "Add Box",
    src: "boxes/box_add",
    tags: ["boxes", "box", "layout", "block", "blocks", "add", "new", "plus"],
  },
  {
    name: "Boxes Tall",
    src: "boxes/boxestall2",
    tags: boxTags,
  },

  {
    name: "Boxes Tall",
    src: "boxes/boxestall3",
    tags: boxTags,
  },

  {
    name: "Boxes Wide",
    src: "boxes/boxeswide2",
    tags: boxTags,
  },

  {
    name: "Boxes Wide",
    src: "boxes/boxeswide3",
    tags: boxTags,
  },

  {
    name: "Grid 2x2",
    src: "grid/grid2x2",
    tags: gridTags,
  },
  {
    name: "Grid 1x2",
    src: "grid/grid1x2",
    tags: gridTags,
  },
  {
    name: "Grid 2x1",
    src: "grid/grid2x1",
    tags: gridTags,
  },
  {
    name: "Grid 3x1",
    src: "grid/grid3x1",
    tags: gridTags,
  },
  {
    name: "Grid 1x3",
    src: "grid/grid1x3",
    tags: gridTags,
  },
  {
    name: "Grid 4x1",
    src: "grid/grid4x1",
    tags: gridTags,
  },
  {
    name: "Grid 1x4",
    src: "grid/grid1x4",
    tags: gridTags,
  },
  {
    name: "Grid 3x3",
    src: "grid/grid3x3",
    tags: gridTags,
  },
  {
    name: "Grid 4x4",
    src: "grid/grid4x4",
    tags: gridTags,
  },

  {
    name: "Image",
    src: "image",
    tags: ["image", "photo", "photograph", "picture", "media"],
  },

  {
    name: "Video",
    src: "video",
    tags: ["video", "media"],
  },

  {
    name: "Pen",
    src: "pen",
    tags: ["edit", "pen", "pencil", "write"],
  },

  {
    name: "Pen Edit",
    src: "pen_edit",
    tags: ["edit", "pen", "pencil", "write"],
  },

  {
    name: "User",
    src: "user",
    tags: ["user", "account", "person"],
  },

  {
    name: "Oval",
    src: "oval",
    tags: ["oval"],
  },
  {
    name: "Circle",
    src: "circle",
    tags: ["circle", "circular"],
  },
  {
    name: "Play Circle",
    src: "play_circle",
    tags: ["circle", "play", "media", "video", "circular"],
  },
  {
    name: "House",
    src: "house",
    tags: ["house", "home", "living", "live"],
  },
  {
    name: "Align Left",
    src: "align_left",
    tags: ["text", "left", "align"],
  },
  {
    name: "Align Right",
    src: "align_right",
    tags: ["text", "right", "align"],
  },
  {
    name: "Align Center",
    src: "align_center",
    tags: ["text", "center", "align"],
  },
  {
    name: "Align Justify",
    src: "align_justify",
    tags: ["text", "justify", "align"],
  },
  {
    name: "Text",
    src: "text",
    tags: ["text", "words", "type", "typing"],
  },
];
