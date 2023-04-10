import * as React from "react";

function HeartFilledBlack({ ...props }) {
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
        d="M243.502 43.094c-21.245-30.022-53.842-31.56-69.595-29.457-17.393 2.323-34.07 13.206-45.907 22.924-11.837-9.718-28.514-20.6-45.907-22.924-15.753-2.104-48.354-.565-69.595 29.457-48.46 68.48 56.155 165.799 106.679 194.953l.051.03L128 243l8.772-4.923.051-.03c50.524-29.154 155.139-126.473 106.679-194.953z"
        fill="#231F20"
      />
    </svg>
  );
}

export default HeartFilledBlack;
