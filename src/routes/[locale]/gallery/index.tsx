import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { getPicturesFromFolder } from "~/helpers/get-pictures-from-folder";
import { Gallery } from "~/components/gallery/gallery.component";

export default component$(() => {
  const photosSource = useResource$(({ cleanup }) =>
    getPicturesFromFolder("photos/", cleanup),
  );
  return (
    <Resource
      value={photosSource}
      onResolved={(photos) => <Gallery photos={photos} />}
    />
  );
});
