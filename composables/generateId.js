import { nanoid } from "nanoid";

export default function (key) {
  return nanoid() + key;
}
