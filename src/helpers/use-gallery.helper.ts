import { $, Signal } from "@builder.io/qwik";

export function useGallery(
  photos: string[],
  currentPhoto: Signal<string | null>,
) {
  const getCurrentPhotoIndex = $(() => {
    return photos.findIndex((value) => currentPhoto.value === value);
  });
  const goLeft = $(async () => {
    const currentPhotoIndex = await getCurrentPhotoIndex();
    currentPhoto.value =
      photos[(currentPhotoIndex > 0 ? currentPhotoIndex : photos.length) - 1];
  });
  const goRight = $(async () => {
    const currentPhotoIndex = await getCurrentPhotoIndex();
    currentPhoto.value =
      photos[currentPhotoIndex + 1 < photos.length ? currentPhotoIndex + 1 : 0];
  });
  return { goLeft, goRight };
}
