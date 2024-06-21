import clsx from "clsx";
import styles from "./backgrounds.module.css";

export default function BackgroundExcited({ isActive = false }) {
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
        <g clipPath="url(#clip0_1_11)">
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
            fill="url(#paint0_linear_1_11)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.514 232.706H59.5428C70.95 232.706 80.1974 223.395 80.1974 211.91C80.1974 200.425 70.95 191.114 59.5428 191.114C56.1004 191.114 52.8548 191.962 50.0006 193.462C46.0263 181.855 35.0831 173.518 22.2056 173.518C5.97226 173.518 -7.18747 186.767 -7.18747 203.112C-7.18747 203.447 -7.18194 203.78 -7.17098 204.113C-11.9097 206.676 -15.1316 211.714 -15.1316 217.509C-15.1316 225.902 -8.37385 232.706 -0.0378044 232.706H22.2056C22.252 232.706 22.514 232.706 22.514 232.706H22.2056H22.514Z"
            fill="white"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.514 232.706H59.5428C70.95 232.706 80.1974 223.395 80.1974 211.91C80.1974 200.425 70.95 191.114 59.5428 191.114C56.1004 191.114 52.8548 191.962 50.0006 193.462C46.0263 181.855 35.0831 173.518 22.2056 173.518C5.97226 173.518 -7.18747 186.767 -7.18747 203.112C-7.18747 203.447 -7.18194 203.78 -7.17098 204.113C-11.9097 206.676 -15.1316 211.714 -15.1316 217.509C-15.1316 225.902 -8.37385 232.706 -0.0378044 232.706H22.2056C22.252 232.706 22.514 232.706 22.514 232.706H22.2056H22.514Z"
            fill="url(#paint1_linear_1_11)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-41.864 319.651C-41.864 319.651 20.8848 280.259 68.28 280.259C130.973 280.259 172.889 333.983 223.602 333.983C282.705 333.983 290.143 318.458 323.285 318.458C370.128 318.458 431.952 347.568 464.557 337.062C490.868 328.584 522.544 311.459 522.544 311.459V455.252L-41.864 463.894V319.651Z"
            fill="url(#paint2_linear_1_11)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M535.089 443.849C535.089 443.849 532.114 349.862 464.682 335.166C405.724 326.426 360.269 394.26 307.549 394.26C246.107 394.26 217.151 354.892 157.496 354.892C113.987 354.892 71.5015 389.119 12.2526 377.255C-119.349 350.903 -51.6568 346.382 -51.6568 346.382V495.774L535.089 504.753V443.849Z"
            fill="url(#paint3_linear_1_11)"
          />
          <ellipse
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            cx="390.647"
            cy="52.1059"
            rx="31.0197"
            ry="31.3647"
            fill="url(#paint4_linear_1_11)"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M427.726 109.271H381.097C366.733 109.271 355.088 97.5726 355.088 83.1424C355.088 68.7123 366.733 57.0143 381.097 57.0143C385.432 57.0143 389.519 58.0796 393.113 59.9637C398.118 45.3815 411.898 34.9059 428.114 34.9059C448.556 34.9059 465.128 51.553 465.128 72.0882C465.128 72.5091 465.121 72.9283 465.107 73.3458C471.074 76.5663 475.132 82.8957 475.132 90.177C475.132 100.722 466.622 109.271 456.125 109.271H428.114C428.056 109.271 427.726 109.271 427.726 109.271H428.114H427.726Z"
            fill="white"
          />
          <path
            className={clsx({
              [styles.hide]: !isActive,
              [styles.show]: isActive,
            })}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M427.726 109.271H381.097C366.733 109.271 355.088 97.5726 355.088 83.1424C355.088 68.7123 366.733 57.0143 381.097 57.0143C385.432 57.0143 389.519 58.0796 393.113 59.9637C398.118 45.3815 411.898 34.9059 428.114 34.9059C448.556 34.9059 465.128 51.553 465.128 72.0882C465.128 72.5091 465.121 72.9283 465.107 73.3458C471.074 76.5663 475.132 82.8957 475.132 90.177C475.132 100.722 466.622 109.271 456.125 109.271H428.114C428.056 109.271 427.726 109.271 427.726 109.271H428.114H427.726Z"
            fill="url(#paint5_linear_1_11)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_11"
            x1="-124.204"
            y1={0}
            x2="-124.204"
            y2="1081.52"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0677083" stopColor="#FF8CD1" />
            <stop offset="0.828125" stopColor="#FFE05B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_11"
            x1="80.1974"
            y1="173.518"
            x2="80.1974"
            y2="232.706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_11"
            x1="-41.864"
            y1="280.259"
            x2="-41.864"
            y2="463.894"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB022" />
            <stop offset={1} stopColor="#FFD6BE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_11"
            x1="535.089"
            y1="334.388"
            x2="535.089"
            y2="504.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FED54C" />
            <stop offset={1} stopColor="#FEDD3A" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_11"
            x1="359.627"
            y1="20.7412"
            x2="359.627"
            y2="83.4706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FED54C" />
            <stop offset={1} stopColor="#FEDD3A" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_11"
            x1="355.088"
            y1="34.9059"
            x2="355.088"
            y2="109.271"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
