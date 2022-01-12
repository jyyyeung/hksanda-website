import { Base } from "./Base";

export interface TextBlock extends Base {
  paragraphs?: Array<string>;
  h1?: String;
  h2?: String;
  h3?: String;
  list?: Array<string>;
  buttons?: Array<string>;
}
