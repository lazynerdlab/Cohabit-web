import { Icon } from "./IconType";

const BackIcon = ({ className, onClick }: Icon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_728_2005)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.66675 20.0002C6.66675 19.0797 7.41294 18.3335 8.33341 18.3335H31.6667C32.5872 18.3335 33.3334 19.0797 33.3334 20.0002C33.3334 20.9206 32.5872 21.6668 31.6667 21.6668H8.33341C7.41294 21.6668 6.66675 20.9206 6.66675 20.0002Z"
          fill="#25324B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.1549 18.8217C7.80578 18.1708 8.86105 18.1708 9.51193 18.8217L19.5119 28.8217C20.1628 29.4725 20.1628 30.5278 19.5119 31.1787C18.8611 31.8295 17.8058 31.8295 17.1549 31.1787L7.1549 21.1787C6.50403 20.5278 6.50403 19.4725 7.1549 18.8217Z"
          fill="#25324B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5119 8.82165C20.1628 9.47253 20.1628 10.5278 19.5119 11.1787L9.51193 21.1787C8.86105 21.8295 7.80578 21.8295 7.1549 21.1787C6.50403 20.5278 6.50403 19.4725 7.1549 18.8217L17.1549 8.82165C17.8058 8.17078 18.8611 8.17078 19.5119 8.82165Z"
          fill="#25324B"
        />
      </g>
      <defs>
        <clipPath id="clip0_728_2005">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackIcon;
