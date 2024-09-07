import libheif_init from "./libheif-wasm";
import lib from "./lib.js";

const libheif = libheif_init();

const { one, all } = lib(libheif);

export default { one, all };
