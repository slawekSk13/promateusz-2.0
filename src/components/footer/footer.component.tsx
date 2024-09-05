import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export const Footer = component$(() => (
  <footer class={styles.Footer}>
    <img
      src={"/pictures/szkola_gorska.png"}
      alt={"Szkoła Górska 5+"}
      class={styles.Logo}
      height={80}
    />
    <img
      src={"/pictures/ivbv.png"}
      alt={"IVBV"}
      class={styles.Logo}
      height={80}
    />
    <img
      src={"/pictures/logo.png"}
      alt={"Promateusz"}
      class={styles.Logo}
      height={80}
    />
    <img
      src={"/pictures/pspw.png"}
      alt={"PSPW"}
      class={styles.Logo}
      height={80}
    />
    <img
      src={"/pictures/pza.png"}
      alt={"PZA"}
      class={styles.Logo}
      height={80}
    />
  </footer>
));
