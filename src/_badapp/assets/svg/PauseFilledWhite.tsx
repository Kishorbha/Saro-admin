import * as React from "react";

function PauseFilledWhite({ ...props }) {
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
        d="M107 247.867V8.067C107 3.6 103.4 0 98.867 0H51.133C46.6 0 43 3.6 43 8.067v239.8c0 4.466 3.6 8.133 8.133 8.133h47.734a8.08 8.08 0 008.133-8.133zM204.867 0h-47.734C152.667 0 149 3.6 149 8.067v239.8c0 4.466 3.6 8.133 8.133 8.133h47.734c4.466 0 8.133-3.6 8.133-8.133V8.067C213 3.6 209.4 0 204.867 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default PauseFilledWhite;
