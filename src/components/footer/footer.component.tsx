import { component$, Resource, useResource$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import { getPicturesFromFolder } from "~/helpers/get-pictures-from-folder";
import { Logo } from "~/components/logo/logo.component";

const LOGOS = "logos/";

export const Footer = component$(() => {
  const logosSource = useResource$(({ cleanup }) =>
    getPicturesFromFolder(LOGOS, cleanup),
  );

  return (
    <Resource
      value={logosSource}
      onResolved={(logos) => (
        <footer
          class={styles.Footer}
          style={{ "--promateusz-logos-count": logos.length }}
        >
          {logos.map((logo) => (
            <Logo key={logo} path={logo} />
          ))}
        </footer>
      )}
    />
  );
});
