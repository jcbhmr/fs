import type FileEntry from "./FileEntry.js";

export default function take(
  value: "exclusive" | "shared",
  file: FileEntry
): "success" | "failure" {
  // To take a lock with a value of "exclusive" or "shared" on a given file entry file:

  // 3. If value is "exclusive":
  if (value === "exclusive") {
    // 1. If lock is "open":
    if (file.lock === "open") {
      // 1. Set lock to "taken-exclusive".
      file.lock = "taken-exclusive";

      // 2. Return "success".
      return "success";
    }
  }

  // 4. If value is "shared":
  if (value === "shared") {
    // 1. If lock is "open":
    if (file.lock === "open") {
      // 1. Set lock to "taken-shared".
      file.lock = "taken-shared";

      // 2. Set count to 1.
      file.sharedLockCount = 1;

      // 3. Return "success".
      return "success";
    }

    // 2. Otherwise, if lock is "taken-shared":
    else if (file.lock === "taken-shared") {
      // 1. Increase count by 1.
      file.sharedLockCount++;

      // 2. Return "success".
      return "success";
    }
  }

  // 5. Return "failure".
  return "failure";
}
