import { createWriteStream, openAsBlob } from "node:fs";
import { Writable } from "node:stream";
import FileSystemHandle, { path } from "./FileSystemHandle-node.js";

const file = new WeakMap<FileSystemFileHandle, File | null | undefined>();

class FileSystemFileHandle extends FileSystemHandle {
  // @ts-ignore
  constructor() {
    throw new TypeError("Illegal constructor");
  }

  async getFile(): Promise<File> {
    if (!file.get(this)) {
      const blob = await openAsBlob(path.get(this)!);
      const f = new File([blob], this.name, { type: blob.type });
      file.set(this, f);
    }
    return file.get(this)!;
  }

  async createWritable(
    options: FileSystemCreateWritableOptions = {}
  ): Promise<FileSystemWritableFileStream> {
    const stream = createWriteStream(path.get(this)!, {
      flags: options.keepExistingData ? "r+" : "w",
      encoding: "binary",
      autoClose: true,
    });
    const web = Writable.toWeb(stream);
    const o = Object.create(FileSystemWritableFileStream.prototype);
    writable.set(o, web);
    return o;
  }
}
