import { PROFILE_PHOTO_ALT } from "./brand.js";

/**
 * Hero chat preview. Use kind: "voice" | "text".
 * Replace with real session lines when ready.
 */
export const CHAT_MOCK_CONTACT = {
  name: "Tanya",
  subtitle: "TanyaTalk",
  avatarSrc: "/tanya-who.png",
  avatarAlt: PROFILE_PHOTO_ALT,
};

export const CHAT_MOCK_MESSAGES = [
  {
    from: "user",
    kind: "text",
    text: "Hey Tanya, I know what I need to do. I just can't make myself do it.",
  },
  {
    from: "coach",
    kind: "voice",
    durationLabel: "0:18",
  },
  {
    from: "coach",
    kind: "typing",
  },
];
