import * as React from "react";

function Blank({ ...props }) {
  const pattern0 = React.useId();
  const image0_115_448 = React.useId();

  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill={`url(#${pattern0})`} d="M0 0H256V256H0z" />
      <defs>
        <pattern
          id={pattern0}
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref={`#${image0_115_448}`} />
        </pattern>
        <image
          id={image0_115_448}
          width={1}
          height={1}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

export default Blank;
