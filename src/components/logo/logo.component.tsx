import { component$ } from "@builder.io/qwik";
import {
  fileNameToAlt,
  PICTURES_PATH,
} from "~/helpers/get-pictures-from-folder";
import styles from "./logo.module.css";

export const Logo = component$<{ path: string }>(({ path }) => {
  return (
    <img
      src={`${PICTURES_PATH}${path}`}
      alt={fileNameToAlt(path)}
      title={fileNameToAlt(path)}
      class={styles.Logo}
      height={80}
    />
  );
});
