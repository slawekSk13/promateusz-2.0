import {
  $,
  component$,
  Resource,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import { getPicturesFromFolder } from "~/helpers/get-pictures-from-folder";
import { Gallery } from "~/components/gallery/gallery.component";
import { PhotoFullscreen } from "~/components/photo-fullscreen/photo-fullscreen.component";
import { useLocale } from "~/helpers/use-locale.helper";

export default component$(() => {
  const winterPhotosSource = useResource$(({ cleanup }) =>
    getPicturesFromFolder("photos/winter/", cleanup),
  );
  const trainingPhotosSource = useResource$(({ cleanup }) =>
    getPicturesFromFolder("photos/training/", cleanup),
  );
  const summerPhotosSource = useResource$(({ cleanup }) =>
    getPicturesFromFolder("photos/summer/", cleanup),
  );

  const allPhotos = useSignal<string[]>([]);
  const fullscreenPhoto = useSignal<string | null>(null);
  const modalRef = useSignal<HTMLDialogElement>();

  const mergePhotos = (photos: string[]) =>
    (allPhotos.value = [...allPhotos.value, ...photos]);

  const onPhotoClick = $((path: string) => {
    fullscreenPhoto.value = path;
    modalRef.value?.showModal();
  });

  const getCurrentPhotoIndex = $(() => {
    return allPhotos.value.findIndex(
      (value) => fullscreenPhoto.value === value,
    );
  });

  const goLeft = $(async () => {
    const fullscreenPhotoIndex = await getCurrentPhotoIndex();
    fullscreenPhoto.value =
      allPhotos.value[
        (fullscreenPhotoIndex > 0
          ? fullscreenPhotoIndex
          : allPhotos.value.length) - 1
      ];
  });

  const goRight = $(async () => {
    const fullscreenPhotoIndex = await getCurrentPhotoIndex();
    fullscreenPhoto.value =
      allPhotos.value[
        fullscreenPhotoIndex + 1 < allPhotos.value.length
          ? fullscreenPhotoIndex + 1
          : 0
      ];
  });

  return (
    <>
      <Resource
        value={summerPhotosSource}
        onResolved={(photos) => {
          mergePhotos(photos);
          return (
            <Gallery
              photos={photos}
              onPhotoClick={onPhotoClick}
              title={TITLES.summer}
              links={Object.values(TITLES).filter(
                (t) => t.en !== TITLES.summer.en,
              )}
            />
          );
        }}
      />
      <Resource
        value={winterPhotosSource}
        onResolved={(photos) => {
          mergePhotos(photos);
          return (
            <Gallery
              photos={photos}
              onPhotoClick={onPhotoClick}
              title={TITLES.winter}
              links={Object.values(TITLES).filter(
                (t) => t.en !== TITLES.winter.en,
              )}
            />
          );
        }}
      />
      <Resource
        value={trainingPhotosSource}
        onResolved={(photos) => {
          mergePhotos(photos);
          return (
            <Gallery
              photos={photos}
              onPhotoClick={onPhotoClick}
              title={TITLES.training}
              links={Object.values(TITLES).filter(
                (t) => t.en !== TITLES.training.en,
              )}
            />
          );
        }}
      />
      <PhotoFullscreen
        goLeft={goLeft}
        goRight={goRight}
        currentPhoto={fullscreenPhoto.value}
        modalRef={modalRef}
      />
    </>
  );
});

const TITLES = {
  winter: { pl: "Zima", en: "Winter" },
  summer: { pl: "Lato", en: "Summer" },
  training: { pl: "Kursy", en: "Training" },
};
