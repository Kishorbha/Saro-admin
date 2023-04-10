import * as React from "react";

function StopCircleOutlineWhite({ ...props }) {
  const clip0_115_396 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_396})`}>
        <path
          d="M127.999 0A128 128 0 10256 127.999 128.14 128.14 0 00127.999 0zm102.885 127.999a102.377 102.377 0 01-21.829 63.297L64.704 46.946a102.83 102.83 0 01166.18 81.053zm-205.77 0a102.363 102.363 0 0121.831-63.295l144.351 144.351a102.833 102.833 0 01-166.181-81.056z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id={clip0_115_396}>
          <path fill="#fff" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default StopCircleOutlineWhite;
