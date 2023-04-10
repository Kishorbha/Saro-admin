import * as React from "react";

function CrossFilledRed({ ...props }) {
  const clip0_115_442 = React.useId();
  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_442})`}>
        <path
          d="M189.2 0l-61.194 61.194L66.8 0 0 66.8l61.194 61.194L0 189.2 66.8 256l61.206-61.194L189.2 256l66.8-66.8-61.194-61.206L256 66.8 189.2 0z"
          fill="#640D0D"
        />
      </g>
      <defs>
        <clipPath id={clip0_115_442}>
          <path fill="#fff" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CrossFilledRed;
