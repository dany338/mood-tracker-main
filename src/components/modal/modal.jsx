import clsx from "clsx";
import styles from "./modal.module.css";
import Image from "next/image";

export default function Modal({ showModal = false, updateMood, closeModal }) {
  return (
    <div className={clsx(styles.modal, { [styles["modal--open"]]: showModal })}>
      <div className={styles["modal__curtain"]} onClick={() => closeModal()} />
      <div className={styles["modal__container"]}>
        {/* Head Controls  */}
        <div className={styles["modal__head"]}>
          <button
            className={styles["modal__close_button"]}
            onClick={() => closeModal()}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.6463 12.7068L5.427 18.9271C5.42699 18.9271 5.42698 18.9271 5.42697 18.9271C5.38001 18.974 5.31633 19.0004 5.24993 19.0004C5.18351 19.0004 5.11982 18.974 5.07286 18.9271C5.02589 18.8801 4.99951 18.8164 4.99951 18.75C4.99951 18.6836 5.02588 18.6199 5.07283 18.573C5.07284 18.573 5.07285 18.5729 5.07286 18.5729L11.2931 12.3536L11.6468 12L11.2931 11.6464L5.07286 5.42708C5.07285 5.42707 5.07284 5.42706 5.07283 5.42705C5.02588 5.38009 4.99951 5.31641 4.99951 5.25001C4.99951 5.18359 5.02589 5.1199 5.07286 5.07293C5.11982 5.02597 5.18351 4.99959 5.24993 4.99959C5.31633 4.99959 5.38001 5.02596 5.42697 5.07291C5.42698 5.07292 5.42699 5.07292 5.427 5.07293L11.6463 11.2932L11.9999 11.6469L12.3535 11.2932L18.5729 5.07293C18.5729 5.07292 18.5729 5.07292 18.5729 5.07291C18.6198 5.02596 18.6835 4.99959 18.7499 4.99959C18.8163 4.99959 18.88 5.02597 18.927 5.07293C18.974 5.1199 19.0003 5.18359 19.0003 5.25001C19.0003 5.31641 18.974 5.38009 18.927 5.42705C18.927 5.42706 18.927 5.42707 18.927 5.42708L12.7067 11.6464L12.3531 12L12.7067 12.3536L18.927 18.5729C18.927 18.5729 18.927 18.5729 18.927 18.573C18.9503 18.5962 18.9687 18.6238 18.9813 18.6542C18.9939 18.6846 19.0003 18.7171 19.0003 18.75C19.0003 18.7829 18.9939 18.8155 18.9813 18.8458C18.9687 18.8762 18.9503 18.9038 18.927 18.9271C18.9038 18.9503 18.8761 18.9688 18.8458 18.9814C18.8154 18.9939 18.7828 19.0004 18.7499 19.0004C18.717 19.0004 18.6845 18.9939 18.6541 18.9814C18.6237 18.9688 18.5961 18.9503 18.5729 18.9271C18.5729 18.9271 18.5729 18.9271 18.5729 18.9271L12.3535 12.7068L11.9999 12.3532L11.6463 12.7068Z"
                fill="#6C757D"
                stroke="#6C757D"
              />
            </svg>
          </button>
        </div>
        {/* Title  */}
        <h2 className={styles.heading}>What mood are you in today?</h2>
        {/* Mood Options  */}
        <div className={styles.options}>
          <button
            className={styles.mood}
            onClick={() => updateMood("pleasant")}
            type="button"
          >
            <Image
              src="/assets/pleasant.png"
              width={64}
              height={64}
              alt="Pleasant emoji"
            />
            <span>Pleasant</span>
          </button>
          <button
            className={styles.mood}
            onClick={() => updateMood("excited")}
            type="button"
          >
            <Image
              src="/assets/excited.png"
              width={64}
              height={64}
              alt="Excited emoji"
            />
            <span>Excited</span>
          </button>
          <button
            className={styles.mood}
            onClick={() => updateMood("sad")}
            type="button"
          >
            <Image
              src="/assets/sad.png"
              width={64}
              height={64}
              alt="Sad emoji"
            />
            <span>Sad</span>
          </button>
        </div>
      </div>
    </div>
  );
}
