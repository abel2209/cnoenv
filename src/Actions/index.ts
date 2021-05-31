import { EMAIL_CHANGED } from "./types";

export const emailChanged = (text: string) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};
