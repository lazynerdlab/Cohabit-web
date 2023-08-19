import { Icon } from "./IconType";

const RateIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_182_15280)">
        <path
          d="M12 18.26L4.94698 22.208L6.52198 14.28L0.586975 8.792L8.61398 7.84L12 0.5L15.386 7.84L23.413 8.792L17.478 14.28L19.053 22.208L12 18.26Z"
          fill="#50E5B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_182_15280">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RateIcon;
