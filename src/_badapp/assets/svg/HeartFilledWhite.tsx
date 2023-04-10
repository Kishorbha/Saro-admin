import * as React from "react";

function HertFilledWhite({ ...props }) {
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
        d="M243.503 43.095c-21.246-30.023-53.847-31.562-69.597-29.457C156.514 15.96 139.837 26.843 128 36.56c-11.837-9.718-28.514-20.6-45.906-22.924-15.75-2.104-48.351-.565-69.596 29.458-48.46 68.479 56.156 165.792 106.678 194.952l.053.03L128 243l8.771-4.923.052-.03c50.523-29.155 155.139-126.473 106.68-194.952z"
        fill="#fff"
      />
    </svg>
  );
}

export default HertFilledWhite;
