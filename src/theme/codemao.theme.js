import Blockly from "blockly";

let codemaoTheme = Blockly.Theme.defineTheme("codemao", {
  base: Blockly.Themes.Zelos,
  blockStyles: {
    controller: {
      colourPrimary: "#68cdff",
      colourTertiary: "#5db8e5",
    },
    calculation: {
      colourPrimary: "#feae8a",
      colourTertiary: "#e49c7c",
    },
    fx: {
      colourPrimary: "#f88767",
      colourTertiary: "#df795c",
    },
    utility: {
      colourPrimary: "#00afc3",
      colourTertiary: "#009daf",
    },
    variable: {
      colourPrimary: "#ffbb55",
      colourTertiary: "#e5a84c",
    },
    list: {
      colourPrimary: "#f9cc37",
      colourTertiary: "#e0b731",
    },
    dictionary: {
      colourPrimary: "#a073ff",
      colourTertiary: "#9067e5",
    },
    color: {
      colourPrimary: "#2bc9a7",
      colourTertiary: "#19b693",
    },
    function: {
      colourPrimary: "#5ab45b",
      colourTertiary: "#5ab45b",
    },
    dom: {
      colourPrimary: "#a073ff",
      colourTertiary: "#a073ff",
    },
    crypto: {
      colourPrimary: "#5574f8",
      colourTertiary: "#5574f8",
    },
  },
  categoryStyles: {
    controller: {
      colour: "#01adff",
    },
    calculation: {
      colour: "#f0aa8b",
    },
    fx: {
      colour: "#f88767",
    },
    utility: {
      colour: "#5ab45b",
    },
    variable: {
      colour: "#ffbb55",
    },
    list: {
      colour: "#ff9c37",
    },
    dictionary: {
      colour: "#2bc9a7",
    },
    color: {
      colour: "#2bc9a7",
    },
    function: {
      colour: "#5ab45b",
    },
    dom: {
      colour: "#a073ff",
    },
    crypto: {
      colour: "#5574f8"
    },
    lodash: {
      colour: "#5098fc"
    },
    qrcode: {
      colour: "#c367f9"
    },
    axios: {
      colour: "#5a29e4"
    },
    utils: {
      colour: "#14b390"
    },
    vi: {
      colour: "#f88767"
    },
    permission: {
      colour: "#a073ff"
    },
    build: {
      colour: "#a073ff"
    },
    block: {
      colour: "#a073ff"
    },
    render: {
      colour: "#a073ff"
    },
    http: {
      colour: "#3d92ef"
    },
    pedometer: {
      colour: "#3d92ef"
    },
    antd: {
      colour: "#3d92ef"
    },
  },
});

export default codemaoTheme;
