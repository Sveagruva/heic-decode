import libheif_init from "./libheif-wasm";
import lib from "./lib.js";

const libheif = libheif_init();
const decode = lib(libheif);

const b2i = (bin) => {
  const res = new Uint32Array(bin.length / 4);
  let idx = 0;
  for (let i = 0; i < bin.length; i += 4) {
    const n = (bin[i] << 24) | (bin[i + 1] << 16) | (bin[i + 2] << 8) | bin[i + 3];
    res[idx++] = n;
  }
  return res;
};

export const decodeHEIC = async (buffer) => {
  const images = await decode.all({ buffer });
  const res = [];
  for (const image of images) {
    const img = await image.decode();
    //img.data = b2i(img.data);
    res.push(img);
  }
  return res;
};
