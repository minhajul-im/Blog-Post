import { IconType } from '.';

const LocationIcon = ({ isDark }: IconType) => {
  return (
    <svg
      className={isDark ? 'text-white' : 'text-[#212a3b]'}
      strokeWidth="0"
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 384 512"
      height="30px"
      width="30px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
    </svg>
  );
};

export default LocationIcon;
