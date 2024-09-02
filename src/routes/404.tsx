import { component$ } from "@builder.io/qwik";
import { Locale, useLocale } from "~/helpers/use-locale.helper";
import { Loader } from "~/components/loader/loader.component";

export default component$(() => {
  const locale = useLocale();
  return (
    <div class={"missing"}>
      <p>
        You seem to be lost... Be sure it won't happen in mountains /<br />
        Wygląda na to, że się zgubiłeś... Zadbajmy, żeby nie przydarzyło się to
        w górach
      </p>
      <Loader />
      <a href="/">Let's get back on track / Wróćmy na szlak</a>
    </div>
  );
});

const NOT_FOUND_MESSAGE: Record<Locale, string> = {
  en: `You seem to be lost... Be sure it won't happen in mountains`,
  pl: "Wygląda na to, że się zgubiłeś... Zadbajmy, żeby nie przydarzyło się to w górach ",
};
