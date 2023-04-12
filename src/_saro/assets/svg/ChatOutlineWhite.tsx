import * as React from "react";

function ChatOutlineWhite({ ...props }) {
  const clip0_115_261 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_261})`}>
        <path
          d="M243.772 219.419c-44.154-35.888-39.071-67.015-38.628-69.295a102.455 102.455 0 005.023-31.788c0-56.218-45.209-101.79-100.977-101.79-55.767 0-100.976 45.572-100.976 101.789 0 56.218 45.209 101.791 100.976 101.791a99.981 99.981 0 0039.487-8.078c45.955 38.014 95.095 7.371 95.095 7.371z"
          stroke="currentColor"
          strokeWidth={13.8022}
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <clipPath id={clip0_115_261}>
          <path fill="currentColor" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChatOutlineWhite;
