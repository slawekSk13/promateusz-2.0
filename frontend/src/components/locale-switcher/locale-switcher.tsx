import { component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import styles from "./locale-switcher.module.css";

export default component$(() => {
  const nav = useNavigate();
  const {
    url: { pathname },
    params: { locale },
  } = useLocation();

  const isEN = locale === "en";

  return (
    <button
      class={styles.LocaleSwitcher}
      onClick$={() => nav(pathname.replace(locale, isEN ? "pl" : "en"))}
    >
      {isEN ? "PL" : "GB"}
    </button>
  );
});
