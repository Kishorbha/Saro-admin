import * as React from "react";

function SendFilledWhite({ ...props }) {
  const clip0_115_326 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_326})`}>
        <path
          d="M116.033 89.284s-18.484 42.018-14.16 159.658c0 .061.071.092.092 0 2.054-6.805 26.052-145.864 154.035-205.027C225.193 14.707 113.261-16.448.065 32.929c0 0-.082 0-.061.05 2.28.165 80.355-3.801 111.655 36.013 0 0 21.76-25.16 88.129-25.16-.011.032-57.055 9.409-83.755 45.452z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id={clip0_115_326}>
          <path fill="currentColor" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SendFilledWhite;
