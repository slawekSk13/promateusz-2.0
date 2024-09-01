import { useLocation } from "@builder.io/qwik-city";

export function useLocale(): Locale {
  const {
    params: { locale: paramsLocale },
  } = useLocation();
  return locale.includes(paramsLocale as Locale)
    ? (paramsLocale as Locale)
    : DEFAULT_LOCALE;
}

export const locale = ["en", "pl"] as const;
export type Locale = (typeof locale)[number];

const DEFAULT_LOCALE = "pl";
