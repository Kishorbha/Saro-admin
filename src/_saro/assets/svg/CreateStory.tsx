import * as React from "react";

function CreateStorySvg({ ...props }) {
  const paint0_linear_124_10 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M224.41 33H31.59a31.686 31.686 0 00-22.337 9.198A31.311 31.311 0 000 64.403v127.193a31.312 31.312 0 009.253 22.206A31.685 31.685 0 0031.59 223h192.82a31.685 31.685 0 0022.337-9.198A31.311 31.311 0 00256 191.596V64.403a31.31 31.31 0 00-9.253-22.205A31.686 31.686 0 00224.41 33zm-26.485 128.234l-36.494 36.279L128 164.28l-33.431 33.233-36.494-36.279L91.505 128l-33.43-33.234L94.57 58.486 128 91.72l33.431-33.233 36.494 36.279L164.495 128l33.43 33.234z"
        fill={`url(#${paint0_linear_124_10})`}
      />
      <defs>
        <linearGradient
          id={paint0_linear_124_10}
          x1={223.043}
          y1={55.6179}
          x2={56.275}
          y2={184.133}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6DCEF5" />
          <stop offset={0.128} stopColor="#6FA1D7" />
          <stop offset={0.286} stopColor="#7270B7" />
          <stop offset={0.407} stopColor="#7351A3" />
          <stop offset={0.474} stopColor="#74469B" />
          <stop offset={0.549} stopColor="#7B499C" />
          <stop offset={0.662} stopColor="#9052A0" />
          <stop offset={0.799} stopColor="#B260A5" />
          <stop offset={0.953} stopColor="#E074AC" />
          <stop offset={1} stopColor="#F07BAF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CreateStorySvg;
