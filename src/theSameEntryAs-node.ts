import type FileSystemEntry from "./FileSystemEntry-node.js";

export default function theSameEntryAs(
  a: FileSystemEntry,
  b: FileSystemEntry
): boolean {
  // A file system entry a is the same entry as a file system entry b if a is
  // equal to b, or if a and b are backed by the same file or directory on the
  // local file system.
  return a === b || a.backingPath === b.backingPath;
}
