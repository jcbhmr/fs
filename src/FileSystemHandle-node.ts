const path = new WeakMap<FileSystemHandle, string>();
const key = Symbol("FileSystemHandle.key");
class FileSystemHandle {
  #name: string;
  #kind: "file" | "directory";
  constructor(
    k: symbol = undefined!,
    name: string,
    kind: "file" | "directory",
    path_: string
  ) {
    if (k !== key) {
      throw new TypeError("Illegal constructor");
    }

    this.#name = name;
    this.#kind = kind;
    path.set(this, path_);
  }

  get name(): string {
    return this.#name;
  }
  get kind(): "file" | "directory" {
    return this.#kind;
  }

  async isSameEntry(other: FileSystemHandle): Promise<boolean> {
    return path.get(this)! === path.get(other)!;
  }
}

export default FileSystemHandle;
export { key };
