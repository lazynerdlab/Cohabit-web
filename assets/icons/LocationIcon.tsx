import { Icon } from "./IconType";

const LocationIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 10.5005C15 9.11924 13.8808 8 12.5005 8C11.1192 8 10 9.11924 10 10.5005C10 11.8808 11.1192 13 12.5005 13C13.8808 13 15 11.8808 15 10.5005Z"
        stroke="#25324B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4995 21C11.301 21 5 15.8984 5 10.5633C5 6.38664 8.3571 3 12.4995 3C16.6419 3 20 6.38664 20 10.5633C20 15.8984 13.698 21 12.4995 21Z"
        stroke="#25324B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
