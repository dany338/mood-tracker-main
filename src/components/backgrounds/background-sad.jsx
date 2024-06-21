import clsx from "clsx";
import styles from "./backgrounds.module.css";

export default function BackgroundSad({ isActive = false }) {
  return (
    <div
      className={clsx(styles["background"], {
        [styles["background--active"]]: isActive,
      })}
    >
      {/*  */}
      <svg
        className={clsx(styles["background-gradiant"])}
        viewBox="0 0 460 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_3)">
          <rect
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            width={460}
            height={430}
            fill="white"
          />
          <rect
            className={clsx({
              [styles["hide--background"]]: !isActive,
              [styles["show--background"]]: isActive,
            })}
            width={912}
            height={850}
            fill="url(#paint0_linear_1_3)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M133.857 277.661C28.0058 233.868 -83.7276 366.588 -83.7276 366.588L-9.63657 471.773H516.026L518.005 378.514C518.005 378.514 498.418 375.967 490.753 374.177C374.711 347.088 241.111 322.035 133.857 277.661Z"
            fill="url(#paint1_linear_1_3)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M748.5 332.436C1022.21 330.665 1007 422.268 1007 422.268V567.509H-81L-75.8576 429.275C-75.8576 429.275 181.442 441.643 269.377 429.275C439.935 405.285 628.099 333.215 748.5 332.436Z"
            fill="url(#paint2_linear_1_3)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8424 213.112H52.2629C63.7909 213.112 73.1361 202.961 73.1361 190.439C73.1361 177.917 63.7909 167.766 52.2629 167.766C48.7842 167.766 45.5042 168.691 42.6198 170.326C38.6035 157.672 27.5444 148.582 14.5307 148.582C-1.87447 148.582 -15.1735 163.027 -15.1735 180.847C-15.1735 181.212 -15.1679 181.576 -15.1568 181.938C-19.9456 184.733 -23.2016 190.225 -23.2016 196.543C-23.2016 205.694 -16.3724 213.112 -7.94813 213.112H14.5307C14.5776 213.112 14.8424 213.112 14.8424 213.112H14.5307H14.8424Z"
            fill="url(#paint3_linear_1_3)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M462.481 156.715H396.456C376.116 156.715 359.627 139.058 359.627 117.276C359.627 95.4949 376.116 77.8374 396.456 77.8374C402.594 77.8374 408.381 79.4454 413.47 82.2894C420.557 60.2784 440.069 44.4659 463.031 44.4659C491.976 44.4659 515.441 69.5938 515.441 100.591C515.441 101.226 515.431 101.859 515.411 102.489C523.861 107.35 529.605 116.904 529.605 127.895C529.605 143.812 517.556 156.715 502.692 156.715H463.031C462.948 156.715 462.481 156.715 462.481 156.715H463.031H462.481Z"
            fill="url(#paint4_linear_1_3)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            opacity="0.9"
            d="M114.987 91.6433H146.726C156.503 91.6433 164.43 83.0278 164.43 72.4001C164.43 61.7724 156.503 53.1569 146.726 53.1569C143.775 53.1569 140.993 53.9415 138.547 55.3291C135.14 44.5895 125.76 36.8742 114.722 36.8742C100.808 36.8742 89.5283 49.1347 89.5283 64.2588C89.5283 64.5687 89.5331 64.8775 89.5425 65.185C85.4807 67.5569 82.7191 72.2184 82.7191 77.581C82.7191 85.3474 88.5114 91.6433 95.6566 91.6433H114.722C114.762 91.6433 114.987 91.6433 114.987 91.6433H114.722H114.987Z"
            fill="url(#paint5_linear_1_3)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1={0}
            y1={0}
            x2={0}
            y2={850}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#195BD1" />
            <stop offset={1} stopColor="#97A3FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_3"
            x1="217.139"
            y1="266.796"
            x2="217.139"
            y2="471.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5F83ED" />
            <stop offset={1} stopColor="#1F42A7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_3"
            x1={463}
            y1="345.722"
            x2={463}
            y2="567.509"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5F83ED" />
            <stop offset={1} stopColor="#1F42A7" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_3"
            x1="73.1361"
            y1="148.582"
            x2="73.1361"
            y2="213.112"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_3"
            x1="359.627"
            y1="44.4659"
            x2="359.627"
            y2="156.715"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_3"
            x1="164.43"
            y1="36.8742"
            x2="164.43"
            y2="91.6433"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <clipPath id="clip0_1_3">
            <rect width={460} height={430} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
