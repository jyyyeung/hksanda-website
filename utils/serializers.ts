import { Serializers } from '@nuxtjs/sanity/dist/runtime/components/sanity-content';
import { CarouselType, MasonryType, OrderedList, TextElement, View, YoutubeSection, YoutubeType } from '#components';
export default <Serializers>{
  types: {
    // youtube: defineAsyncComponent({
    //   loadingComponent: () => import('@/components/SkeletonYoutubeType.vue'),
    //   loader: () => import('@/components/YoutubeType.vue'),
    // }),
    carousel: CarouselType,
    masonry: MasonryType,
    view: View,
    "video-group": YoutubeSection,
    // youtube: YoutubeType,

  },
  // marks: {
  //   // link: Link,
  //   // internalLink: Link,
  //   underline: 'u',
  //   'strike-through': 's',
  // },
  // marks: TextElement,
  styles: {
    // normal: 'p',
    normal: TextElement,
    h1: TextElement,
    h2: TextElement,
    h3: TextElement,
    small: TextElement,
  },
  listItem: TextElement
}
