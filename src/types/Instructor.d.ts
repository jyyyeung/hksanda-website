import { ObjectId } from "mongoose";

export interface Instructor {
  id: ObjectId;
  name: String;
  strengths?: String;
  certificates: String[];
  experiences: String[];
}
