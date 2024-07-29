import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { Locale } from "~/paths/types/locale.types";
import LocaleSwitcher from "~/components/locale-switcher/locale-switcher";
import ThemeSwitcher from "~/components/theme-switcher/theme-switcher";
import styles from "./header.module.css";

export default component$(() => {
  const {
    url: { pathname },
    params: { locale },
  } = useLocation();

  return (
    <header class={styles.header}>
      <ul>
        {FE_PATHS.map(({ path, label }) => (
          <li key={path}>
            <a
              href={`/${locale}/${path}`}
              class={{ [styles.ActivePath]: pathname.includes(path) }}
            >
              {label[locale as Locale]}
            </a>
          </li>
        ))}
      </ul>
      <div class={styles.Switchers}>
        <LocaleSwitcher />
        <ThemeSwitcher />
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188-.503 1.837 1.885-.494.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978 4.946 4.946 0 0 0-1.456-3.522 4.946 4.946 0 0 0-3.521-1.46zm2.928 7.118c-.125.35-.723.668-1.01.711a2.044 2.044 0 0 1-.943-.059 8.51 8.51 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26-.074-.1-.61-.812-.61-1.548 0-.737.386-1.099.523-1.249a.552.552 0 0 1 .4-.186c.1 0 .199.001.287.005.092.004.215-.035.336.257.125.3.425 1.036.462 1.111.037.074.062.162.013.262-.05.101-.074.162-.15.25-.074.088-.157.195-.224.263-.075.074-.153.155-.066.305.088.149.388.64.832 1.037.572.51 1.055.667 1.204.743.15.074.237.063.325-.038.087-.101.374-.437.474-.586.1-.15.199-.125.337-.076.137.051.873.412 1.022.487.148.074.249.112.287.175.036.062.036.361-.088.711z"></path>
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-7.96 14.896h-.002a5.98 5.98 0 0 1-2.862-.729L6 18l.85-3.104a5.991 5.991 0 0 1 5.19-8.983 5.95 5.95 0 0 1 4.238 1.757 5.95 5.95 0 0 1 1.751 4.237 5.998 5.998 0 0 1-5.989 5.989z"></path>
          </g>
        </svg>
      </div>
    </header>
  );
});

const FE_PATHS: { path: string; label: Record<Locale, string> }[] = [
  { path: "about", label: { en: "About me", pl: "O mnie" } },
  { path: "offer", label: { en: "Offer", pl: "Oferta" } },
  { path: "safety", label: { en: "Safety", pl: "Bezpieczeństwo" } },
  { path: "contact", label: { en: "Contact", pl: "Kontakt" } },
];
