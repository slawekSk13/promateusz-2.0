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
  return readdirSync(`./public${PICTURES_PATH}${folderName}`);
});

export function fileNameToAlt(fileName: string): string {
  return fileName.replace(".png", "").replaceAll("_", " ");
}
