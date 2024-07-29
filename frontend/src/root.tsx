import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <title>Promateusz - Przewodnik IVBV</title>
        <RouterHead />
        <ServiceWorkerRegister />
        <script
          dangerouslySetInnerHTML={`(function() {
          function setTheme(theme) {
            document.documentElement.className = theme;
            localStorage.setItem('promateusz_theme', theme);
          }
          const theme = localStorage.getItem('promateusz_theme');
          console.log(theme);
          if (theme) {
            setTheme(theme);
          } else {
            setTheme('light');
          }
        })();
          window.addEventListener('load', function() {
          const themeSwitch = document.querySelector('[name="promateusz_theme"]');
          themeSwitch.checked = localStorage.getItem('promateusz_theme') === 'dark'? true: false;
        }
        );
      `}
        ></script>
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
