import type { RequestEventLoader } from "@builder.io/qwik-city";
import type { ApiPath } from "~/paths/types/api-paths.types";

export async function fetchData<T extends Record<string, string | number>>(
  path: ApiPath,
  requestEvent: RequestEventLoader,
) {
  const locale = requestEvent.params.locale;
  const apiKey = requestEvent.env.get("STRAPI_API_KEY");
  const authorizationValue = `Bearer ${apiKey}`;
  const myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Authorization", authorizationValue);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const rawResponse = await fetch(
    `http://localhost:1337/api${path}${locale ? `?locale=${locale}` : ""}`,
    requestOptions,
  );

  return ((await rawResponse.json()).data || []) as {
    id: string;
    attributes: T;
  }[];
}
