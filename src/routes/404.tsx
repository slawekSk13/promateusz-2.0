import { component$ } from "@builder.io/qwik";
import { Locale, useLocale } from "~/helpers/use-locale.helper";

export default component$(() => {
  const locale = useLocale();
  return <div>{NOT_FOUND_MESSAGE[locale]}</div>;
});

const NOT_FOUND_MESSAGE: Record<Locale, string> = {
  en: `You seem to be lost... Be sure it won't happen in mountains`,
  pl: "Wygląda na to, że się zgubiłeś... Zadbajmy, żeby nie przydarzyło się to w górach ",
};
