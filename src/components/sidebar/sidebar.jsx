"use client";

import { useRouter } from "next/navigation";
import styles from "./sidebar.module.css";
import MoodPreview from "./mood-preview";

export default function Sidebar({ moodList = [], setShowModal, children }) {
  const router = useRouter();

  const updateSelectedMood = (newMood) => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('mood', newMood);

    router.push(newUrl.toString());
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    router.push("/api/auth/signout");
  }

  return (

      <div className={styles.sidebar} suppressHydrationWarning>
        <div className={styles["sidebar__list"]}>
          <div className={styles.scrollable}>
            {moodList.map(({ mood, date }, index) => (
              <MoodPreview
                key={`mood-preview-${date}-${mood}-${index}`}
                mood={mood}
                date={date}
                updateSelectedMood={updateSelectedMood}
              />
            ))}
            {children}
            <button
              className={styles["sidebar__add_button"]}
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </div>
        <div className={styles["sidebar__footer"]}>
          <button
            className={styles["sidebar__add_button"]}
            onClick={() => setShowModal((current) => !current)}
          >
            Log Mood
          </button>
        </div>
      </div>
  );
}
