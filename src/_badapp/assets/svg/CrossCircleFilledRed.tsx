import * as React from "react";

function CrossCircleFilledRed({ ...props }) {
  const clip0_115_46 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_46})`}>
        <path
          d="M256 128C256 57.308 198.692 0 128 0 57.308 0 0 57.307 0 128c0 70.692 57.307 128 128 128 70.692 0 128-57.308 128-128z"
          fill="#600"
        />
        <path
          d="M144.007 128l48.672-48.652A11.333 11.333 0 00184.661 60a11.34 11.34 0 00-8.017 3.32l-48.672 48.651L79.3 63.376a11.336 11.336 0 00-15.385.594 11.326 11.326 0 00-.594 15.378L111.936 128l-48.615 48.652a11.33 11.33 0 000 16.028 11.34 11.34 0 0016.035 0l48.616-48.652 48.672 48.652a11.338 11.338 0 0016.035 0 11.332 11.332 0 000-16.028L144.007 128z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id={clip0_115_46}>
          <path fill="#fff" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CrossCircleFilledRed;
