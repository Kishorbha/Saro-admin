import * as React from "react";

function AngledArrowFilledWhite({ ...props }) {
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
        d="M192.708 149.063s-27.148 10.77-70.61 65.868V215c3.624-2.624 62.762-44.261 133.902-29.684C255.401 152.49 235.816 75.843 169.106 41c0 0-.049 0 0 0 .864 1.331 34.74 53.758 35.29 83.823 0 0-93.809-119.44-174.594-58.985-53.206 39.845-18.947 104.225-18.947 104.225 33.306-81.767 108.316-75.139 181.853-21z"
        fill="#fff"
      />
    </svg>
  );
}

export default AngledArrowFilledWhite;
