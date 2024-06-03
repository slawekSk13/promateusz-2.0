import { component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  const {
    url: { pathname },
    params: { locale },
  } = useLocation();

  const isEN = locale === "en";

  return (
    <button onClick$={() => nav(pathname.replace(locale, isEN ? "pl" : "en"))}>
      {isEN ? "PL" : "GB"}
    </button>
  );
});
