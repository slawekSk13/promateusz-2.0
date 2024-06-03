import type { RequestEventLoader } from "@builder.io/qwik-city";
import type { ApiPath } from "~/paths/types/api-paths.types";

export async function fetchData<T extends Record<string, string | number>>(
  path: ApiPath,
  requestEvent: RequestEventLoader,
) {
  const locale = requestEvent.params.locale;
  const authorizationValue = `Bearer c931297e79780666ebf2cad2f2ede25ac50a2a447eed0de78662375e6d273ffd7d613b95c373d7e2f66843ee0dcb4cc389b5db81366560114d237b16213f5cc4a90b9cecb629c52bee6d26a7422286a9929d5085d1f3af3f7e809733c6921e401d2676961295aaaa493e7a028783dffedaf5a40f6b4b63e3080f809fcaad2296`;
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

  return (await rawResponse.json()).data as {
    id: string;
    attributes: T;
  }[];
}
