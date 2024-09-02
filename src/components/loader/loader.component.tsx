import { component$, Signal } from "@builder.io/qwik";
import styles from "./loader.module.css";

export const Loader = component$<{ isLoadingSignal: Signal<boolean> }>(
  ({ isLoadingSignal }) =>
    isLoadingSignal.value ? (
      <div class={styles.Loader}>
        <div class={styles.Wrapper}>
          <div class={styles.Cloud} />
          <div class={styles.Cloud} />
          <div class={styles.Mountain} />
          <div class={[styles.Dash, styles.Dash1]} />
          <div class={[styles.Dash, styles.Dash2]} />
          <div class={[styles.Dash, styles.Dash3]} />
          <div class={[styles.Dash, styles.Dash4]} />
          <div class={[styles.Dash, styles.Dash5]} />
          <div class={[styles.Dash, styles.Dash6]} />
          <div class={[styles.Dash, styles.Dash7]} />
          <div class={[styles.Dash, styles.Dash8]} />
          <div class={[styles.Dash, styles.Dash9]} />
          <div class={[styles.Dash, styles.Dash10]} />
          <div class={styles.Flag} />
        </div>
      </div>
    ) : null,
);
