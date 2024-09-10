import { ResourceCtx } from "@builder.io/qwik";
import { readdirSync } from "fs";
import { server$ } from "@builder.io/qwik-city";

export const PICTURES_PATH = "/pictures/";

export const getPicturesFromFolder = server$(function (
  folderName: "logos/" | "photos/",
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
