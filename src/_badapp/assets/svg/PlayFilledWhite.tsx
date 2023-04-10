import * as React from "react";

function PlayFilledWhite({ ...props }) {
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
        d="M227.778 112.6L41.598 2.133C39.323.8 36.982 0 34.307 0c-7.29 0-13.241 6-13.241 13.333H21v229.334h.067C21.067 250 27.019 256 34.308 256c2.742 0 5.016-.933 7.49-2.267L227.778 143.4A19.963 19.963 0 00235 128c0-6.2-2.809-11.667-7.222-15.4z"
        fill="#fff"
      />
    </svg>
  );
}

export default PlayFilledWhite;
