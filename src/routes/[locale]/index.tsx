import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Main from "~/components/main/main";
import { fetchData, parseStoryToContent } from "~/helpers/use-data.helper";
import type { AboutAttributes } from "~/routes/[locale]/about/about.types";
export const useTrips = routeLoader$(async (requestEvent) => {
  return parseStoryToContent(
    await fetchData<AboutAttributes>("about", requestEvent),
  );
});

export default component$(() => {
  const data = useTrips();

  return (
    <>
      {data.value.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  );
});
