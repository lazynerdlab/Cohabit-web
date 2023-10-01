import { Icon } from "./IconType";

const ActiveBadge = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="12" height="12" rx="6" fill="white" />
      <circle cx="6.00006" cy="6.00098" r="4" fill="#71DD37" />
    </svg>
  );
};

export default ActiveBadge;
