import { ResourceCtx } from "@builder.io/qwik";
import { readdirSync } from "fs";
import { server$ } from "@builder.io/qwik-city";

export const PICTURES_PATH = "/pictures/";

export const getPicturesFromFolder = server$(function (
  folderName: "logos/" | `photos/${string}/`,
  cleanup: ResourceCtx<string[]>["cleanup"],
): string[] {
  const controller = new AbortController();
  cleanup(() => controller.abort());
  return readdirSync(`./public${PICTURES_PATH}${folderName}`).map(
    (filePath) => folderName + filePath,
  );
});

export function fileNameToAlt(fileName: string): string {
  const chunks = fileName.split("/");
  return chunks[chunks.length - 1].replace(/\.\S+/, "").replaceAll("_", " ");
}

export function getAuthor(fileName: string | null) {
  if (!fileName) return;
  const chunks = fileName.split("aut");
  console.log(fileName);
  console.log(chunks[1]?.replace("_", " "));
  return chunks[1]?.replace("_", " ").replace(/\.\S+/, "");
}
