import { component$ } from "@builder.io/qwik";
import {
  fileNameToAlt,
  PICTURES_PATH,
} from "~/helpers/get-pictures-from-folder";
import styles from "./logo.module.css";

export const Logo = component$<{ folder: string; path: string }>(
  ({ path, folder }) => {
    return (
      <img
        src={`${PICTURES_PATH}${folder}${path}`}
        alt={fileNameToAlt(path)}
        title={fileNameToAlt(path)}
        class={styles.Logo}
        height={80}
      />
    );
  },
);
