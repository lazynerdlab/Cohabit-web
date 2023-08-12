import { Icon } from "./IconType";

const DoneIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="28.0184"
        cy="28.0184"
        r="28"
        transform="rotate(0.0376019 28.0184 28.0184)"
        fill="#1AD48E"
      />
      <path
        d="M20.0184 28.0132L26.0144 34.0171L36.0223 22.0237"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DoneIcon;
