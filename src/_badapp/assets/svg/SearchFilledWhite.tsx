import * as React from "react";

function SearchFilledWhite({ ...props }) {
  const clip0_115_320 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_320})`}>
        <path
          d="M119.45 221.514a110.145 110.145 0 0064.096-20.478 13.428 13.428 0 003.002 4.577l46.438 46.438a13.482 13.482 0 1019.066-19.066l-46.439-46.438a13.476 13.476 0 00-3.277-2.413 110.301 110.301 0 0027.871-73.377C230.207 49.685 180.521 0 119.45 0 58.38 0 8.692 49.685 8.692 110.757S58.377 221.514 119.45 221.514z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id={clip0_115_320}>
          <path fill="currentColor" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchFilledWhite;
