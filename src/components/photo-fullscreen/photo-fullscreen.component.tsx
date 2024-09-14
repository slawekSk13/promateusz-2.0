import { $, component$, Signal, useSignal } from "@builder.io/qwik";
import { Icon } from "~/components/icon/icon.component";
import {
  fileNameToAlt,
  getAuthor,
  PICTURES_PATH,
} from "~/helpers/get-pictures-from-folder";
import styles from "./photo-fullscreen.module.css";

export const PhotoFullscreen = component$<{
  goLeft: () => void;
  goRight: () => void;
  currentPhoto: string | null;
  modalRef: Signal<HTMLDialogElement | undefined>;
}>(({ goLeft, goRight, modalRef, currentPhoto }) => {
  const startPoint =
    useSignal<Pick<TouchList[number], "clientY" | "clientX">>();
  const author = getAuthor(currentPhoto);
  return (
    <dialog
      class={styles.Modal}
      ref={modalRef}
      onKeyDown$={async ({ key }) => {
        if (!currentPhoto) return;
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
        if (diffX > 80) {
          await goRight();
          startPoint.value = { clientX, clientY };
        } else if (diffX < -80) {
          await goLeft();
          startPoint.value = { clientX, clientY };
        }
      }}
    >
      <div class={styles.IconWrapper}>
        <Icon icon={"close"} onClick={$(() => modalRef.value?.close())} />
      </div>
      {currentPhoto && (
        <>
          <img
            src={`${PICTURES_PATH}${currentPhoto}`}
            alt={fileNameToAlt(currentPhoto)}
            title={fileNameToAlt(currentPhoto)}
            class={styles.Fullscreen}
          />
          {author && <span class={styles.Author}>Fot. {author}</span>}
        </>
      )}
    </dialog>
  );
});
