import { readFile } from "node:fs/promises";

export async function importTextFile(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}
