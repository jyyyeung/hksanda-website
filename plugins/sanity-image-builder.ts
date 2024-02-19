import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config);
  function urlFor(source: SanityImageSource) {
    if (!source) return undefined;
    return builder.image(source).auto("format");
  }
  return {
    provide: { urlFor },
  };
});
