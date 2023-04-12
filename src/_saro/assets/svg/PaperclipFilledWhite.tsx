import * as React from "react";

function PaperclipFilledWhite({ ...props }) {
  const clip0_115_281 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clip0_115_281})`}>
        <path
          d="M246 120.637L134.425 225.866C120.755 238.758 102.217 246 82.886 246c-19.33 0-37.87-7.242-51.538-20.134C17.679 212.975 10 195.491 10 177.26c0-18.232 7.679-35.716 21.348-48.608l111.576-105.23C152.036 14.829 164.395 10 177.283 10c12.887 0 25.246 4.828 34.358 13.422 9.112 8.595 14.233 20.251 14.233 32.405s-5.121 23.81-14.233 32.405L99.944 193.462c-4.556 4.297-10.736 6.712-17.18 6.712-6.443 0-12.622-2.415-17.179-6.712-4.556-4.297-7.116-10.126-7.116-16.202 0-6.078 2.56-11.906 7.116-16.203l103.077-97.1"
          stroke="currentColor"
          strokeWidth={21}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.8}
        />
      </g>
      <defs>
        <clipPath id={clip0_115_281}>
          <path fill="currentColor" d="M0 0H256V256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PaperclipFilledWhite;
