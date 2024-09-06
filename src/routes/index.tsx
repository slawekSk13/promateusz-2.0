import { component$ } from "@builder.io/qwik";
import { DocumentHead, RequestEventLoader } from "@builder.io/qwik-city";

export const onGet = ({ redirect }: RequestEventLoader) => {
  throw redirect(302, "/pl/");
};

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Promateusz",
  meta: [
    {
      name: "description",
      content: "Promateusz - IVBV Mountain Guide Mateusz Zabłocki",
    },
  ],
};
