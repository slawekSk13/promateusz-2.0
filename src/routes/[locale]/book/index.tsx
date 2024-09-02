import { component$, useSignal } from "@builder.io/qwik";
import { useLocale } from "~/helpers/use-locale.helper";
import { Loader } from "~/components/loader/loader.component";

export default component$(() => {
  const locale = useLocale();
  const isLoading = useSignal(true);
  return (
    <>
      <Loader isLoadingSignal={isLoading} />
      <iframe
        key={locale}
        src={`https://docs.google.com/forms/d/e/${locale === "pl" ? "1FAIpQLSd08UELNzkKCw0pcM5WUsUnfypWp1ztofGxLyUKSIBW3bNlSw" : "1FAIpQLScn6SpdSjxHSSIlek8VLiyvV7V41l0uwUV3YjF0GXR7ylImGw"}/viewform?embedded=true`}
        onLoad$={() => (isLoading.value = false)}
      />
    </>
  );
});
