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
    text: "Hey Tanya, how do i relax without feeling guilty or lazy?",
  },
  {
    from: "coach",
    kind: "voice",
    durationLabel: "0:18",
    audioSrc: "/tanya-voice-note.mp3",
  },
  {
    from: "coach",
    kind: "typing",
  },
];
