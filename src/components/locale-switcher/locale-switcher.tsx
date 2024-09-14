import { component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import styles from "./locale-switcher.module.css";

export default component$(() => {
  const nav = useNavigate();
  const {
    url: { pathname },
    params: { locale },
  } = useLocation();

  const nextLocale = locale === "en" ? "pl" : "en";

  return (
    <button
      class={styles.LocaleSwitcher}
      onClick$={async () => {
        await nav(pathname.replace(locale, nextLocale));
      }}
    >
      {nextLocale.toLocaleUpperCase()}
    </button>
  );
});
