import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchData } from "~/helpers/use-data.helper";
import { useReplaceLink } from "~/helpers/use-replace-link.helper";
import styles from "./offer.module.css";

type OfferAttributes = { body: { description: string; type: string }[] };

export const useOffer = routeLoader$(async (requestEvent) => {
  const data = await fetchData<OfferAttributes>("offer", requestEvent);
  return data[0]?.content.body.map(({ description, type }) => ({
    description: description.split("\n"),
    type,
  }));
});

export default component$(function () {
  const data = useOffer();

  return (
    <div class={styles.Offer}>
      {data.value.map((offer) => (
        <div key={offer.type}>
          <h2>{offer.type}</h2>
          {offer.description.map((p) => (
            <p key={p} dangerouslySetInnerHTML={useReplaceLink(p)} />
          ))}
        </div>
      ))}
    </div>
  );
});
