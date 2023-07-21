import type DirectoryEntry from "./DirectoryEntry.js";
import type FileEntry from "./FileEntry.js";

type FileSystemEntry = FileEntry | DirectoryEntry;
export default FileSystemEntry;
