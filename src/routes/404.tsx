import { component$ } from "@builder.io/qwik";
import { Loader } from "~/components/loader/loader.component";

export default component$(() => (
  <div class={"missing"}>
    <p>
      You seem to be lost... I'll make sure it won't happen in mountains /
      <br />
      Wygląda na to, że się zgubiłeś... Zadbam, żeby nie przydarzyło się to w
      górach
    </p>
    <Loader />
    <a href="/">Let's get back on track / Wróćmy na szlak</a>
  </div>
));
