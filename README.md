# heic-decode

> Decode HEIC images to extract raw pixel data.
> Works in NEXTJS

## Usage

```
npm install heic-decode-esm
```

```javascript
import convertHeic from "heic-decode-esm";

const data = await convertHeic.one({
  buffer: await fs.readFile("in.heic"),
});

console.log({
  width: data.width,
  height: data.height,
  buffer: data.buffer,
});

await fs.writeFile("out.png", data.buffer);

```

When the images are decoded, the return value is a plain object in the format of [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData). You can use this object to integrate with other imaging libraries for processing.

_Note that while the decoder returns a Promise, it does the majority of the work synchronously, so you should consider using a worker thread in order to not block the main thread in highly concurrent production environments._

## Dependencies

* libheif-wasm of [libheif-js](https://github.com/code4fukui/libheif-js/)
* [libheif](https://github.com/strukturag/libheif)

## Related

* [heic-cli](https://github.com/catdad-experiments/heic-cli) - convert heic/heif images to jpeg or png from the command line
* [heic-convert](https://github.com/catdad-experiments/heic-convert) - convert heic/heif images to jpeg and png
* [libheif-js](https://github.com/catdad-experiments/libheif-js) - libheif as a pure-javascript npm module
