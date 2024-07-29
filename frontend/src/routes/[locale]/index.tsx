import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchData } from "~/helpers/use-data.helper";
import type { TripsAttributes } from "~/paths/types/trips.types";
export const useTrips = routeLoader$(async (requestEvent) => {
  return await fetchData<TripsAttributes>("/trips", requestEvent);
});

export default component$(() => {
  const data = useTrips();

  return (
    <>
      <ul>
        {data.value.map((d) => (
          <li key={d.id}>
            {d.id}:
            <ol>
              {Object.keys(d.attributes).map((key) => (
                <li key={d.attributes[key as keyof TripsAttributes]}>
                  {key}: {d.attributes[key as keyof TripsAttributes]}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </>
  );
});
