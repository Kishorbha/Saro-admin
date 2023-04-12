import * as React from "react";

function LeftArrowFilledWhite({ ...props }) {
  const clip0_115_2 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_2})`}>
        <path
          d="M143.973 38.56c8.82-8.82 8.82-23.123 0-31.945-8.822-8.82-23.124-8.82-31.946 0L6.615 112.027a22.54 22.54 0 00-4.901 7.326A22.536 22.536 0 000 128c0 3.063.61 5.983 1.714 8.647a22.54 22.54 0 004.901 7.326l105.412 105.412c8.822 8.82 23.124 8.82 31.946 0 8.82-8.821 8.82-23.124 0-31.946l-66.852-66.851h156.291C245.886 150.588 256 140.475 256 128c0-12.475-10.114-22.588-22.588-22.588H77.121l66.852-66.851z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id={clip0_115_2}>
          <path fill="currentColor" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LeftArrowFilledWhite;
