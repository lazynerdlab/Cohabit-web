import { Icon } from "./IconType";

const DeliverIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.995 11.4515L5.94749 14.4682L12.2942 7.21483L11.0392 6.11816L5.71916 12.1982L3.00499 10.1265L1.995 11.4515ZM18.1275 7.21483L16.8725 6.11816L11.565 12.184L10.9375 11.6823L9.89583 12.984L11.7683 14.4823L18.1275 7.21483Z"
        // fill="#71DD37"
      />
    </svg>
  );
};

export default DeliverIcon;
