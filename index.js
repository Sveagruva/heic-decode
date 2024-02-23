import libheif_init from "https://code4fukui.github.io/libheif-js/libheif-wasm/libheif-bundle.mjs";
import lib from "./lib.js";

const libheif = libheif_init();

const { one, all } = lib(libheif);

export default { one, all };
