import { ObjectId } from "mongoose";

export interface Session {
  id: ObjectId;
  title: string;
  type: string;
  classroom?: string;
  time: string;
  students: string;
  location?: string;
  mapQuery?: string;
}
