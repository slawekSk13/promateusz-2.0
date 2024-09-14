import { component$ } from "@builder.io/qwik";
import {
  fileNameToAlt,
  PICTURES_PATH,
} from "~/helpers/get-pictures-from-folder";
import styles from "./gallery.module.css";
import { Locale, useLocale } from "~/helpers/use-locale.helper";

export const Gallery = component$<{
  photos: string[];
  title?: Record<Locale, string>;
  onPhotoClick: (path: string) => void;
}>(({ photos, title, onPhotoClick }) => {
  const locale = useLocale();
  return (
    <div class={styles.Gallery}>
      {title && (
        <h2 class={styles.Title} key={locale}>
          {title[locale]}
        </h2>
      )}
      {photos.map((path) => (
        <div class={styles.Wrapper} key={path}>
          <img
            src={`${PICTURES_PATH}${path}`}
            alt={fileNameToAlt(path)}
            title={fileNameToAlt(path)}
            class={styles.Photo}
            onClick$={() => onPhotoClick(path)}
          />
        </div>
      ))}
    </div>
  );
});
