import type FileEntry from "./FileEntry.js";

export default function release(file: FileEntry): void {
  // To release a lock on a given file entry file:

  // 3. If lock is "taken-shared":
  if (file.lock === "taken-shared") {
    // 1. Decrease count by 1.
    file.sharedLockCount--;

    // 2. If count is 0, set lock to "open".
    if (file.sharedLockCount === 0) {
      file.lock = "open";
    }
  }

  // 4. Otherwise, set lock to "open".
  else {
    file.lock = "open";
  }
}
