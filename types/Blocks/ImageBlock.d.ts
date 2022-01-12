import { Base } from "./Base";
export interface ImageBlock extends Base {
  images: Array<string>;
  onLeft?: boolean;
  noPreview?: boolean;
}
