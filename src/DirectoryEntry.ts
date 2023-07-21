import type FileEntry from "./FileEntry.js";

export default interface DirectoryEntry {
  children: Set<FileEntry | DirectoryEntry>;

  /**
   * A file system entry entry should be contained in the children of at most
   * one directory entry, and that directory entry is also known as entry’s
   * parent. A file system entry's parent is null if no such directory entry
   * exists.
   * @see https://fs.spec.whatwg.org/#entry-parent
   */
  parent: DirectoryEntry | null;
}
