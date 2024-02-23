import libheif_init from "https://code4fukui.github.io/libheif-js/libheif-wasm/libheif-bundle.mjs";
import lib from "./lib.js";

const libheif = libheif_init();
const decode = lib(libheif);

export const decodeHEIC = async (buffer) => {
  const images = await decode.all({ buffer });
  const res = [];
  for (const image of images) {
    res.push(await image.decode());
  }
  return res;
};
