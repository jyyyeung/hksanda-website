import { ObjectId } from "mongoose";

export interface Syllabus {
  id: ObjectId;
  level: string;
  syllabus?: string[];
}
