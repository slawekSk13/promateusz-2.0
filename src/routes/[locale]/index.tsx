import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchData, parseStoryToContent } from "~/helpers/use-data.helper";
import type { AboutAttributes } from "~/routes/[locale]/about/about.types";

export const useAbout = routeLoader$(async (requestEvent) =>
  parseStoryToContent(await fetchData<AboutAttributes>("about", requestEvent)),
);

export default component$(() => {
  const data = useAbout();

  return (
    <div
      style={{
        paddingInline: "min(60px, 5vw)",
      }}
    >
      {data.value.map((p, i) => (
        <>
          <p key={p}>{p}</p>
          {i === 1 && (
            <img
              src="/pictures/mz_ivbv.jpeg"
              style={{ maxWidth: "100%" }}
              alt={"Mateusz"}
              title={"Mateusz"}
            />
          )}
          {i === 3 && (
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                src="/pictures/st.jpeg"
                style={{ maxWidth: "calc(50% - 5px)" }}
                alt={"Skitouring"}
                title={"Skitouring"}
              />{" "}
              <img
                src="/pictures/winter.jpeg"
                style={{ maxWidth: "calc(50% - 5px)" }}
                alt={"Winter mountaineering"}
                title={"Winter mountaineering"}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
});
