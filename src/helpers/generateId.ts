import { nanoid } from "nanoid";

export default function (key: string | number): string {
  return nanoid() + key;
}
