import { component$, Signal, Slot, useSignal } from "@builder.io/qwik";
import styles from "./loader.module.css";

export const Loader = component$<{ isLoadingSignal?: Signal<boolean> }>(
  ({ isLoadingSignal = useSignal(true) }) =>
    isLoadingSignal.value ? (
      <div class={styles.Loader}>
        <Slot name={"over"} />
        <div class={styles.Wrapper}>
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
        <Slot name={"under"} />
      </div>
    ) : null,
);
