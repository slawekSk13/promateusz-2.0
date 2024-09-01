import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler, routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Main from "~/components/main/main";
import { fetchData } from "~/helpers/use-data.helper";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useContact = routeLoader$(async (requestEvent) => {
  return (
    await fetchData<{ mail: string; phone: number }>("book", requestEvent)
  )[0]?.content;
});

export default component$(() => {
  return (
    <>
      <Header />
      <Main>
        <Slot />
      </Main>
    </>
  );
});
