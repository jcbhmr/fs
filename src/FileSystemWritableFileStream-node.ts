import { createWriteStream } from "node:fs";
import { Writable } from "node:stream";

const key = Symbol("new FileSystemWritableFileStream()");
class FileSystemWritableFileStream extends WritableStream {
  // @ts-ignore
  constructor(k: symbol = undefined!, path: string) {
    if (k !== key) {
      throw new TypeError("Illegal constructor");
    }

    const stream = createWriteStream(path);
    const o = Writable.toWeb(stream) as FileSystemWritableFileStream;
    Object.setPrototypeOf(o, new.target.prototype);

    

    return o;
  }

  async write(data: FileSystemWriteChunkType): Promise<void> {
    const writer = this.getWriter();
    await writer.write(data);
  }
  async seek(position: number): Promise<void> {
    const writer = this.getWriter();
    await writer.seek(position);
  }
  async truncate(size: number): Promise<void> {
    const writer = this.getWriter();
    await writer.truncate();
  }
}

export default FileSystemWritableFileStream;
export { key };
