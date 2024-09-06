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
    <footer class={styles.Footer}>
      <Resource
        value={logosSource}
        onResolved={(logos) =>
          logos.map((logo) => <Logo key={logo} folder={LOGOS} path={logo} />)
        }
      />
    </footer>
  );
});
