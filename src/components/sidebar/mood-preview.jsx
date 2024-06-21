"use client";

import { useRef } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import styles from "./sidebar.module.css";

const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export default function MoodPreview({ mood, date, updateSelectedMood }) {
  const videoplayer = useRef();

  const localizedDate = new Date(date).toLocaleDateString("en-CA", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const localizedTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  })
    .format(new Date(date))
    .toLowerCase();

  return (
    <button
      className={styles.mood_preview}
      type="button"
      onClick={() => updateSelectedMood(mood)}
      onMouseEnter={() => videoplayer.current.play()}
    >
      <span>
        <Player
          ref={videoplayer}
          src={`/assets/animations/${mood}.json`}
          style={{ height: "48px", width: "48px" }}
        >
          <Controls />
        </Player>
      </span>
      <span className={styles.mood_content}>
        <span className={styles.mood_name}>{capitalizeFirstLetter(mood)}</span>
        <span className={styles.mood_date} suppressHydrationWarning>
          {localizedDate} at {localizedTime}
        </span>
      </span>
    </button>
  );
}
