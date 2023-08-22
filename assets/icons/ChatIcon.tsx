import { Icon } from "./IconType";

const ChatIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="32" fill="#202430" />
      <g clip-path="url(#clip0_197_23926)">
        <path
          d="M32.0001 44L27.2001 39.2H24.0001C22.7271 39.2 21.5062 38.6943 20.606 37.7941C19.7058 36.8939 19.2001 35.673 19.2001 34.4V24.8C19.2001 23.527 19.7058 22.3061 20.606 21.4059C21.5062 20.5057 22.7271 20 24.0001 20H40.0001C41.2732 20 42.4941 20.5057 43.3942 21.4059C44.2944 22.3061 44.8001 23.527 44.8001 24.8V34.4C44.8001 35.673 44.2944 36.8939 43.3942 37.7941C42.4941 38.6943 41.2732 39.2 40.0001 39.2H36.8001L32.0001 44Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26 31.334C29.3333 34.6673 34.6667 34.6673 38 31.334"
          stroke="#202430"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_197_23926">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChatIcon;
