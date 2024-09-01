import { component$, useSignal, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import LocaleSwitcher from "~/components/locale-switcher/locale-switcher";
import styles from "./header.module.css";
import { Locale, useLocale } from "~/helpers/use-locale.helper";
import { useContact } from "~/routes/layout";
import { Icon } from "~/components/icon/icon.component";

export default component$(() => {
  const {
    url: { pathname },
  } = useLocation();
  const locale = useLocale();
  const {
    value: { mail, phone },
  } = useContact();
  const isOpen = useSignal(false);

  const toggleIsOpen = $(() => (isOpen.value = !isOpen.value));

  return (
    <header>
      <img
        src={"/pictures/logo.png"}
        alt={"Logo"}
        class={styles.Logo}
        height={80}
        onClick$={toggleIsOpen}
      />
      <div class={[styles.Header, { [styles.Open]: isOpen.value }]}>
        <ul>
          {FE_PATHS.map(({ path, label }, i) => (
            <li key={path}>
              <a
                href={`/${locale}/${path}`}
                class={{
                  [styles.ActivePath]: isCurrentPath(path, pathname),
                  [styles.Decoration]: !!i,
                }}
              >
                {label[locale]}
              </a>
            </li>
          ))}
        </ul>
        <div class={styles.ContactData}>
          <a href={`tel:+${phone}`}>+{phone}</a>
          <a href={`https://wa.me/${phone}`} target="_blank">
            <Icon icon={"whatsapp"} />
          </a>
          <Icon
            icon="copy"
            onClick={$(() => navigator.clipboard.writeText(`+${phone}`))}
          />
        </div>
        <div class={styles.ContactData}>
          <a href={`mailto:${mail}`}>{mail}</a>
          <Icon
            icon="copy"
            onClick={$(() => navigator.clipboard.writeText(mail))}
          />
        </div>
        <LocaleSwitcher callback={toggleIsOpen} />
        <Icon icon="close" onClick={toggleIsOpen} />
      </div>
    </header>
  );
});

type FrontendPath =
  | ""
  | "offer"
  | "safety"
  | "book"
  | "testimonials"
  | "photos";

const FE_PATHS: { label: Record<Locale, string>; path: FrontendPath }[] = [
  { path: "", label: { en: "About me", pl: "O mnie" } },
  { path: "offer", label: { en: "Offer", pl: "Oferta" } },
  { path: "book", label: { en: "Book", pl: "Zarezerwuj" } },
  // { path: "photos", label: { en: "Photos", pl: "Zdjęcia" } },
  // { path: "testimonials", label: { en: "Testimonials", pl: "Opinie" } },
  // { path: "safety", label: { en: "Safety", pl: "Bezpieczeństwo" } },
];

const isCurrentPath = (path: FrontendPath, pathName: string) => {
  if (path === "") {
    return ["/en/", "/pl/"].includes(pathName);
  } else {
    return pathName.includes(path);
  }
};
