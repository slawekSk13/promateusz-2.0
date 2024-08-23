import { component$, Slot } from "@builder.io/qwik";
import styles from "./main.module.css";

export default component$(() => {
  return (
    <main class={styles.Main}>
      <Slot />
    </main>
  );
});
