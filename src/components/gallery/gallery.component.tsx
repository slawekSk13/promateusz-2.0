import { $, component$, useSignal } from "@builder.io/qwik";
import {
  fileNameToAlt,
  PICTURES_PATH,
} from "~/helpers/get-pictures-from-folder";
import styles from "./gallery.module.css";
import { Icon } from "~/components/icon/icon.component";
import { useGallery } from "~/helpers/use-gallery.helper";

export const Gallery = component$<{ photos: string[] }>(({ photos }) => {
  const fullscreenPhoto = useSignal<string | null>(null);
  const modalRef = useSignal<HTMLDialogElement>();
  const startPoint =
    useSignal<Pick<TouchList[number], "clientY" | "clientX">>();

  const { goLeft, goRight } = useGallery(photos, fullscreenPhoto);
  return (
    <div class={styles.Gallery}>
      {photos.map((path) => (
        <div class={styles.Wrapper} key={path}>
          <img
            src={`${PICTURES_PATH}${path}`}
            alt={fileNameToAlt(path)}
            title={fileNameToAlt(path)}
            class={styles.Photo}
            onClick$={() => {
              fullscreenPhoto.value = path;
              modalRef.value?.showModal();
            }}
          />
        </div>
      ))}
      <dialog
        class={styles.Modal}
        ref={modalRef}
        onKeyDown$={async ({ key }) => {
          if (!fullscreenPhoto.value) return;
          if (key === "ArrowLeft") {
            await goLeft();
          } else if (key === "ArrowRight") {
            await goRight();
          }
        }}
        onTouchStart$={({ touches }) => {
          const { clientX, clientY } = touches[0];
          startPoint.value = { clientX, clientY };
        }}
        onTouchMove$={async ({ touches }) => {
          if (!startPoint.value) return;
          const { clientX, clientY } = touches[0];
          const diffX = startPoint.value!.clientX - clientX;
          const diffY = startPoint.value!.clientY - clientY;
          if (Math.abs(diffY) > Math.abs(diffX)) return;
          if (diffX > 50) {
            await goRight();
            startPoint.value = { clientX, clientY };
          } else if (diffX < -50) {
            await goLeft();
            startPoint.value = { clientX, clientY };
          }
        }}
      >
        <div class={styles.IconWrapper}>
          <Icon
            icon={"close"}
            onClick={$(() => {
              fullscreenPhoto.value = null;
              modalRef.value?.close();
            })}
          />
        </div>
        {fullscreenPhoto.value && (
          <img
            src={`${PICTURES_PATH}${fullscreenPhoto.value}`}
            alt={fileNameToAlt(fullscreenPhoto.value)}
            title={fileNameToAlt(fullscreenPhoto.value)}
            class={styles.Fullscreen}
          />
        )}
      </dialog>
    </div>
  );
});
