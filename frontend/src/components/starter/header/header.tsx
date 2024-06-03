import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import LocaleSwitcher from "~/components/locale-switcher";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <LocaleSwitcher />
        <label>
          Theme
          <input name={"theme"} type={"checkbox"} class={"theme-switch"} />
        </label>
      </div>
    </header>
  );
});
