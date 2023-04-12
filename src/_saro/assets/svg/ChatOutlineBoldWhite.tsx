import * as React from "react";

function ChatOutlineBoldWhite({ ...props }) {
  const clip0_115_272 = React.useId();
  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_272})`}>
        <path
          d="M238.551 216.173c-42.497-34.669-37.604-64.739-37.178-66.942a99.314 99.314 0 004.835-30.709c0-54.308-43.513-98.334-97.188-98.334-53.675 0-97.188 44.026-97.188 98.334s43.513 98.334 97.188 98.334a95.91 95.91 0 0038.005-7.804c44.231 36.723 91.526 7.121 91.526 7.121z"
          stroke="currentColor"
          strokeWidth={20.25}
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <clipPath id={clip0_115_272}>
          <path fill="currentColor" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChatOutlineBoldWhite;
