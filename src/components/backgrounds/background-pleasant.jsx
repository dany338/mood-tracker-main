import clsx from "clsx";
import styles from "./backgrounds.module.css";

export default function BackgroundPleasant({ isActive = false }) {
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
        <g clip-path="url(#clip0_0_6)">
          <rect
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            width="460"
            height="430"
            fill="white"
          />
          <rect
            className={clsx({
              [styles["hide--background"]]: !isActive,
              [styles["show--background"]]: isActive,
            })}
            width="462"
            height="430.592"
            fill="url(#paint0_linear_0_6)"
          />
          <path
            data-name="mountain2"
            className={clsx(
              {
                [styles.hide]: !isActive,
                [styles.show]: isActive,
              },
              styles.fbtt,
              styles.delay1
            )}
            style={{ transitionDelay: "1s" }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M539.693 296.82C539.693 296.82 467.355 250.917 412.717 250.917C340.444 250.917 292.122 313.521 233.66 313.521C165.525 313.521 156.951 295.431 118.743 295.431C64.7428 295.431 -6.52936 329.353 -44.1166 317.11C-74.4489 307.23 -110.965 287.275 -110.965 287.275V454.835L539.693 464.906V296.82Z"
            fill="url(#paint1_linear_0_6)"
          />
          <path
            data-name="mountain1"
            className={clsx(
              {
                [styles.hide]: !isActive,
                [styles.show]: isActive,
              },
              styles.fbtt
            )}
            style={{ transitionDelay: "0.75s" }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-100.373 408.686C-100.373 408.686 -97.0731 303.191 -22.2702 286.696C43.1315 276.886 93.5547 353.026 152.036 353.026C220.194 353.026 252.316 308.838 318.49 308.838C366.755 308.838 413.884 347.255 479.609 333.938C625.594 304.36 550.503 299.285 550.503 299.285V466.969L-100.373 477.047V408.686Z"
            fill="url(#paint2_linear_0_6)"
          />
          <ellipse
            data-name="sun"
            className={clsx(
              {
                [styles.hide]: !isActive,
                [styles.show]: isActive,
              },
              styles.fttb
            )}
            style={{ transitionDelay: "1.25s" }}
            cx="375.515"
            cy="101.935"
            rx="38.0811"
            ry="38.1941"
            fill="url(#paint3_linear_0_6)"
          />
          <path
            data-name="bush"
            className={clsx(
              {
                [styles.hide]: !isActive,
                [styles.show]: isActive,
              },
              styles.fbtt,
              styles.delay1
            )}
            style={{ transitionDelay: "0.5s" }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-5.04388 415.773C-5.04388 415.773 26.3615 373.345 51.0083 369.074C75.6551 364.802 89.2963 406.161 89.2963 406.161C89.2963 406.161 100.836 404.352 107.103 406.161C113.371 407.971 118.334 415.773 118.334 415.773C118.334 415.773 126.317 390.85 159.465 390.85C192.613 390.85 209.454 424.521 209.454 424.521C209.454 424.521 220.488 415.773 231.979 415.773C243.469 415.773 256.476 424.521 256.476 424.521C256.476 424.521 264.593 390.85 298.841 390.85C333.089 390.85 347.699 419.424 347.699 419.424C347.699 419.424 361.536 410.648 374.982 410.648C388.428 410.648 404.473 419.424 404.473 419.424C404.473 419.424 408.975 391.703 429.003 375.364C449.031 359.025 492.638 369.074 492.638 369.074L516.491 381.695V513.47H-5.04388V415.773Z"
            fill="url(#paint4_linear_0_6)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_0_6"
            x1="0"
            y1="0"
            x2="0"
            y2="430.592"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A2E9FF" />
            <stop offset="0.552083" stop-color="#DDFDFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_6"
            x1="539.693"
            y1="250.917"
            x2="539.693"
            y2="464.906"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AAF3FA" />
            <stop offset="1" stop-color="#D5FAFD" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_6"
            x1="-100.373"
            y1="285.823"
            x2="-100.373"
            y2="477.047"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7EDEE7" />
            <stop offset="1" stop-color="#B5F1F5" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_0_6"
            x1="375.515"
            y1="63.741"
            x2="375.515"
            y2="140.129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEFFCA" />
            <stop offset="0.9999" stop-color="white" />
            <stop offset="1" stop-color="#FEFFCA" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_0_6"
            x1="-5.04388"
            y1="365.247"
            x2="-5.04388"
            y2="513.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4297A8" />
            <stop offset="1" stop-color="#77C8D3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
