import { HEIC } from "./HEIC.js";

//const fn = "./temp/0003.heic";
const fn = "./temp/IMG_0103.HEIC";
const buffer = await Deno.readFile(fn);
const images = await HEIC.decode(buffer);
console.log(images);
