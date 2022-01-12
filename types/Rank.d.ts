import { ObjectId } from "mongoose";
export interface Rank {
  id: ObjectId;
  name?: String;
  awardees?: Array<String>;
}
