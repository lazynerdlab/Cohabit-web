import { Icon } from "./IconType";

const PlusIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_872_1811)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99999 3.33301C10.4602 3.33301 10.8333 3.7061 10.8333 4.16634V15.833C10.8333 16.2932 10.4602 16.6663 9.99999 16.6663C9.53975 16.6663 9.16666 16.2932 9.16666 15.833V4.16634C9.16666 3.7061 9.53975 3.33301 9.99999 3.33301Z"
          fill="#010886"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.33334 10.0003C3.33334 9.54009 3.70644 9.16699 4.16668 9.16699H15.8333C16.2936 9.16699 16.6667 9.54009 16.6667 10.0003C16.6667 10.4606 16.2936 10.8337 15.8333 10.8337H4.16668C3.70644 10.8337 3.33334 10.4606 3.33334 10.0003Z"
          fill="#010886"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_1811">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
