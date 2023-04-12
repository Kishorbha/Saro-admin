import * as React from "react";

function HeartBrokenFilledBlack({ ...props }) {
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
        d="M243.537 45.5c-21.188-30.233-53.776-32.312-69.398-29.663a68.85 68.85 0 00-16.084 4.797L124.769 58.97l36.441 21.343L124 146.591l30.035 39.591L143.402 238c52.185-33.288 146.54-126.283 100.135-192.5z"
        fill="#231F20"
      />
      <path
        d="M95.478 148.348L129 88.904 87.878 64.927l28.618-32.823a70.6 70.6 0 00-34.383-16.268c-15.675-2.645-48.36-.569-69.612 29.62C-35.701 113.937 67.506 211.092 118.355 241l10.156-49.3-33.033-43.352z"
        fill="#231F20"
      />
    </svg>
  );
}

export default HeartBrokenFilledBlack;
