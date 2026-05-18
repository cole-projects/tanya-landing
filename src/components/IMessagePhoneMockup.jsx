import { useCallback, useEffect, useRef, useState } from "react";
import { CHAT_MOCK_CONTACT, CHAT_MOCK_MESSAGES } from "../content/chatMock.js";

/** Waveform bar heights (relative) for voice-note styling */
const WAVE_BARS = [4, 7, 5, 9, 6, 8, 5, 7, 4, 6, 8, 5, 9, 6, 7, 5, 8, 6];

function formatMmSs(seconds) {
  if (!Number.isFinite(seconds)) return null;
  const s = Math.floor(seconds);
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

function VoiceNoteBubble({ durationLabel, audioSrc }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [displayDur, setDisplayDur] = useState(durationLabel);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !audioSrc) return;
    const onMeta = () => {
      const f = formatMmSs(el.duration);
      if (f) setDisplayDur(f);
    };
    el.addEventListener("loadedmetadata", onMeta);
    return () => el.removeEventListener("loadedmetadata", onMeta);
  }, [audioSrc]);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el || !audioSrc) return;
    if (el.paused) {
      void el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [audioSrc]);

  const inner = (
    <>
      <span className="iphone-mockup__voice-play" aria-hidden>
        {playing ? (
          <span className="iphone-mockup__voice-pause-icon" />
        ) : (
          <span className="iphone-mockup__voice-play-icon" />
        )}
      </span>
      <div className="iphone-mockup__voice-wave" aria-hidden>
        {WAVE_BARS.map((h, i) => (
          <span key={i} style={{ height: `${h}px` }} />
        ))}
      </div>
      <span className="iphone-mockup__voice-dur">{displayDur}</span>
      <span className="sr-only">Voice message, {displayDur}</span>
    </>
  );

  if (!audioSrc) {
    return <div className="iphone-mockup__voice">{inner}</div>;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        className="iphone-mockup__voice iphone-mockup__voice--btn"
        onClick={toggle}
        aria-label={playing ? "Pause voice message" : "Play voice message"}
      >
        {inner}
      </button>
    </>
  );
}

/** Stylized smartphone + Messages-style thread (not an Apple screenshot). */
export default function IMessagePhoneMockup() {
  const { name, subtitle, avatarSrc, avatarAlt } = CHAT_MOCK_CONTACT;

  return (
    <div
      className="iphone-mockup iphone-mockup--half mx-auto mt-7 w-full max-w-[min(100%,304px)] sm:max-w-[316px]"
      aria-label="Preview of texting Tanya in a messages-style chat"
    >
      <div className="iphone-mockup__chassis">
        <div className="iphone-mockup__rails iphone-mockup__rails--left" aria-hidden>
          <span className="iphone-mockup__paddle iphone-mockup__paddle--mute" />
          <span className="iphone-mockup__rail-gap" />
          <span className="iphone-mockup__paddle iphone-mockup__paddle--vol-up" />
          <span className="iphone-mockup__rail-gap iphone-mockup__rail-gap--tight" />
          <span className="iphone-mockup__paddle iphone-mockup__paddle--vol-down" />
        </div>
        <div className="iphone-mockup__bezel">
          <div className="iphone-mockup__screen">
            <div className="iphone-mockup__island" aria-hidden />

            <div className="iphone-mockup__status">
              <span className="iphone-mockup__time">11:11</span>
              <div className="iphone-mockup__status-icons" aria-hidden>
                {/* Signal — tiny dot + 3 ascending bars (.nll pattern) */}
                <svg width="21" height="14" viewBox="0 0 18 12" fill="none">
                  <rect x="0"   y="9.5" width="2.5" height="2.5" rx="0.5" fill="#0a0a0a"/>
                  <rect x="4"   y="6"   width="2.5" height="6"   rx="0.5" fill="#0a0a0a"/>
                  <rect x="8"   y="3"   width="2.5" height="9"   rx="0.5" fill="#0a0a0a"/>
                  <rect x="12"  y="0"   width="2.5" height="12"  rx="0.5" fill="#0a0a0a"/>
                </svg>
                {/*
                  Wi-Fi: three concentric stroked arcs only (no dot / triangle base).
                  Shared center (10, 20); equal angular span; bold rounded caps.
                */}
                <svg
                  className="iphone-mockup__wifi-icon"
                  width="30"
                  height="14"
                  viewBox="0 9.4 20 9.2"
                  fill="none"
                >
                  <path
                    d="M 8.193 17.42 A 3.15 3.15 0 0 1 11.807 17.42"
                    stroke="#0a0a0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 6.386 14.839 A 6.3 6.3 0 0 1 13.614 14.839"
                    stroke="#0a0a0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 4.58 12.259 A 9.45 9.45 0 0 1 15.42 12.259"
                    stroke="#0a0a0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                {/* Battery — gray outline, black fill inside, gray nub */}
                <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                  <rect x="0.75" y="0.75" width="24"  height="12.5" rx="3.2" stroke="#a0a0a0" strokeWidth="1.5"/>
                  <rect x="2.5"  y="2.5"  width="19.5" height="9"   rx="2"   fill="#0a0a0a"/>
                  <rect x="25.5" y="4.5"  width="3"    height="5"   rx="1.3" fill="#a0a0a0"/>
                </svg>
              </div>
            </div>

            <div className="iphone-mockup__nav">
              <span className="iphone-mockup__chevron" aria-hidden />
              <div className="iphone-mockup__nav-center">
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  className="iphone-mockup__nav-avatar"
                  width={46}
                  height={46}
                  decoding="async"
                />
                <div className="iphone-mockup__nav-text">
                  <span className="iphone-mockup__nav-name">{name}</span>
                  <span className="iphone-mockup__nav-sub">{subtitle}</span>
                </div>
              </div>
              {/* Video call icon */}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden>
                <rect x="0.5" y="2.5" width="17" height="15" rx="3" stroke="#007aff" strokeWidth="1.6"/>
                <path d="M18 7l8-4v14l-8-4V7z" fill="#007aff"/>
              </svg>
            </div>

            <div className="iphone-mockup__chat">
              <p className="iphone-mockup__date-pill">Today 11:10 AM</p>
              <ul className="iphone-mockup__bubbles" role="list">
                {CHAT_MOCK_MESSAGES.map((m, i) => {
                  const kind = m.kind ?? "text";

                  if (kind === "typing" && m.from === "coach") {
                    return (
                      <li key={i} className="iphone-mockup__row iphone-mockup__row--recv">
                        <div className="iphone-mockup__bubble iphone-mockup__bubble--recv iphone-mockup__typing">
                          <span /><span /><span />
                        </div>
                      </li>
                    );
                  }

                  if (kind === "voice" && m.from === "coach") {
                    return (
                      <li
                        key={i}
                        className="iphone-mockup__row iphone-mockup__row--recv"
                      >
                        <div className="iphone-mockup__recv-stack">
                          <VoiceNoteBubble
                            durationLabel={m.durationLabel ?? "0:21"}
                            audioSrc={m.audioSrc}
                          />
                          {m.transcript ? (
                            <p className="iphone-mockup__bubble iphone-mockup__bubble--recv iphone-mockup__bubble--transcript">
                              {m.transcript}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    );
                  }

                  const isUser = m.from === "user";
                  return (
                    <li
                      key={i}
                      className={
                        isUser
                          ? "iphone-mockup__row iphone-mockup__row--sent"
                          : "iphone-mockup__row iphone-mockup__row--recv"
                      }
                    >
                      <p
                        className={
                          isUser
                            ? "iphone-mockup__bubble iphone-mockup__bubble--sent"
                            : "iphone-mockup__bubble iphone-mockup__bubble--recv"
                        }
                      >
                        {m.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="iphone-mockup__rails iphone-mockup__rails--right" aria-hidden>
          <span className="iphone-mockup__paddle iphone-mockup__paddle--power" />
        </div>
      </div>
    </div>
  );
}
