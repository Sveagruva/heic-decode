import { decodeHEIC } from "./decodeHEIC.js";

export const HEIC = {
  decode: decodeHEIC,
  encode: () => {
    throw new Error("not supported yet");
  },
};
