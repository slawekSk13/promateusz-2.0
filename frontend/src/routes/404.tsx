import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { Locale } from "~/paths/types/locale.types";

export default component$(() => {
  const {
    params: { locale },
  } = useLocation();
  return <div>{NOT_FOUND_MESSAGE[locale as Locale]}</div>;
});

const NOT_FOUND_MESSAGE: Record<Locale, string> = {
  en: `You seem to be lost... Be sure it won't happen in mountains`,
  pl: "Wygląda na to, że się zgubiłeś... Zadbajmy, żeby nie przydarzyło się to w górach ",
};
