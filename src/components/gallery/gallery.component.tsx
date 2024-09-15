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
  links: Record<Locale, string>[];
}>(({ photos, title, links, onPhotoClick }) => {
  const locale = useLocale();
  return (
    <div class={styles.Gallery} id={title?.["en"]}>
      {title && (
        <div class={styles.Title} key={locale}>
          <h2>{title[locale]}</h2>
          <div class={styles.Links}>
            {links.map((l) => (
              <a href={`#${l.en}`} key={JSON.stringify(l)}>
                {l[locale]}
              </a>
            ))}
          </div>
        </div>
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
