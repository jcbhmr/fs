import type DirectoryEntry from "./DirectoryEntry.js";

export default interface FileEntry {
  binaryData: Uint8Array;
  modificationTimestamp: number;
  lock: "open" | "taken-exclusive" | "taken-shared";
  sharedLockCount: number;

  /**
   * A file system entry entry should be contained in the children of at most
   * one directory entry, and that directory entry is also known as entry’s
   * parent. A file system entry's parent is null if no such directory entry
   * exists.
   * @see https://fs.spec.whatwg.org/#entry-parent
   */
  parent: DirectoryEntry | null;
}
