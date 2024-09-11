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
      {data.value.map((offer, offerIndex) => (
        <div key={offer.type}>
          <h2>{offer.type}</h2>
          {offer.description.map((p, i) => (
            <>
              <p key={p} dangerouslySetInnerHTML={useReplaceLink(p)} />
              {!offerIndex ? (
                <>
                  {i === 0 && (
                    <img
                      src="/pictures/guide_1.jpeg"
                      style={{ maxWidth: "100%" }}
                      alt={"Climbing"}
                      title={"Climbing"}
                    />
                  )}
                  {i === 2 && (
                    <div
                      style={{ display: "flex", gap: "10px" }}
                      key={p + "img"}
                    >
                      <img
                        src="/pictures/guide_4.jpeg"
                        style={{ maxWidth: "calc(33% - 20px / 3)" }}
                        alt={"Winter climbing"}
                        title={"Winter climbing"}
                      />
                      <img
                        src="/pictures/guide_2.jpeg"
                        style={{ maxWidth: "calc(33% - 20px / 3)" }}
                        alt={"Mountain climbing"}
                        title={"Mountain climbing"}
                      />
                      <img
                        src="/pictures/guide_3.jpeg"
                        style={{ maxWidth: "calc(33% - 20px / 3)" }}
                        alt={"Skitouring"}
                        title={"Skitouring"}
                      />
                    </div>
                  )}
                  {i === 4 && (
                    <img
                      src="/pictures/guide_7.jpg"
                      style={{ maxWidth: "100%" }}
                      alt={"Climbing"}
                      title={"Climbing"}
                    />
                  )}
                </>
              ) : (
                <>
                  {i === 1 && (
                    <div
                      style={{ display: "flex", gap: "10px" }}
                      key={p + "img"}
                    >
                      <img
                        src="/pictures/course_3.jpeg"
                        style={{ maxWidth: "calc(50% - 5px)" }}
                        alt={"Climbing course"}
                        title={"Climbing course"}
                      />{" "}
                      <img
                        src="/pictures/course_2.jpeg"
                        style={{ maxWidth: "calc(50% - 5px)" }}
                        alt={"Climbing course"}
                        title={"Climbing course"}
                      />
                    </div>
                  )}
                </>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
});
