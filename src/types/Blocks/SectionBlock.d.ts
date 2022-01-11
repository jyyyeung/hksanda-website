import { ImageBlock } from "./ImageBlock";
import { TextBlock } from "./TextBlock";
import { Types } from "mongoose";
import { Base } from "./Base";

export interface Section extends Base {
  id: Types.ObjectId;
  endLine?: boolean;
  startLine?: boolean;
  text?: TextBlock;
  images?: ImageBlock;
}
