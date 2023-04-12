import * as React from "react";

function TickCircleFilledGradient({ ...props }) {
  const paint0_linear_115_398 = React.useId();
  const clip0_115_398 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_398})`}>
        <path
          d="M255 128C255 57.86 198.14 1 128 1S1 57.86 1 128s56.86 127 127 127 127-56.86 127-127z"
          fill="#fff"
        />
        <path
          d="M128.006 0A128.001 128.001 0 10256 128.006 128.006 128.006 0 00128.006 0zm75.212 96.858l-77.682 91.532a14.784 14.784 0 01-20.46 2.025l-49.244-38.943a14.795 14.795 0 01-5.52-9.89 14.797 14.797 0 0123.876-13.326l38.033 30.09 68.43-80.641a14.804 14.804 0 0115.813-4.513 14.804 14.804 0 0110.221 12.882 14.806 14.806 0 01-3.467 10.784z"
          fill={`url(#${paint0_linear_115_398})`}
        />
      </g>
      <defs>
        <linearGradient
          id={paint0_linear_115_398}
          x1={-11.4098}
          y1={87.5362}
          x2={266.793}
          y2={168.284}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E07FAD" />
          <stop offset={0.031} stopColor="#D47BAC" />
          <stop offset={0.154} stopColor="#AA6CA8" />
          <stop offset={0.266} stopColor="#8B61A5" />
          <stop offset={0.36} stopColor="#795AA3" />
          <stop offset={0.427} stopColor="#7258A2" />
          <stop offset={0.528} stopColor="#7465AB" />
          <stop offset={0.717} stopColor="#7B88C3" />
          <stop offset={0.97} stopColor="#85C0E9" />
          <stop offset={1} stopColor="#86C7EE" />
        </linearGradient>
        <clipPath id={clip0_115_398}>
          <path fill="#fff" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default TickCircleFilledGradient;
