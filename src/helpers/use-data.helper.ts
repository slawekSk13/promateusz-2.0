import type { RequestEventLoader } from "@builder.io/qwik-city";
import type { ApiPath } from "~/paths/types/api-paths.types";

export async function fetchData<T>(
  path: ApiPath,
  requestEvent: RequestEventLoader,
) {
  const locale = requestEvent.params.locale;
  const apiToken = requestEvent.env.get("API_TOKEN");
  const myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const rawResponse = await (
    await fetch(
      `https://api.storyblok.com/v2/cdn/stories?cv=1724417760&starts_with=${path}${locale ? `&language=${locale}` : ""}&token=${apiToken}`,
      requestOptions,
    )
  ).json();

  return rawResponse.stories as {
    name: string;
    created_at: string;
    published_at: string;
    id: number;
    uuid: string;
    content: T;
    slug: string;
    full_slug: string;
    sort_by_date: object;
    position: number;
    tag_list: unknown[];
    is_startpage: boolean;
    parent_id: number;
    meta_data: Record<string, unknown> | null;
    group_id: string;
    first_published_at: string;
    release_id: number | null;
    lang: string;
    path: string | null;
    alternates: unknown[];
    default_full_slug: string | null;
    translated_slugs: string[] | null;
  }[];
}

export function parseStoryToContent(
  data: { content: { body: { content: string }[] } }[],
): string[] {
  return data
    ? data[0]?.content.body.map((paragraph) => paragraph.content)
    : [];
}
