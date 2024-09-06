import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchData, parseStoryToContent } from "~/helpers/use-data.helper";
import type { AboutAttributes } from "~/routes/[locale]/about/about.types";

export const useAbout = routeLoader$(async (requestEvent) => {
  return parseStoryToContent(
    await fetchData<AboutAttributes>("about", requestEvent),
  );
});

export default component$(() => {
  const data = useAbout();

  return (
    <div
      style={{
        paddingInline: "60px",
      }}
    >
      {data.value.map((p, i) => (
        <>
          <p key={p}>{p}</p>

          {i === 1 && (
            <img
              src="/pictures/mz_ivbv.jpeg"
              style={{ maxWidth: "100%" }}
              alt={"TODO"}
            />
          )}
        </>
      ))}
    </div>
  );
});
