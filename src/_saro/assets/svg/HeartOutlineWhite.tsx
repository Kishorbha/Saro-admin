import * as React from "react";

function HeartOutlineWhite({ ...props }) {
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
        d="M183.839 30.26a61.3 61.3 0 0123.384 4.532 52.961 52.961 0 0122.932 18.67c9.052 12.79 11.619 27.34 7.845 44.474-4.935 22.417-20.573 48.169-45.218 74.474-23.385 24.957-48.459 43.513-64.132 52.56l-.655.365-.655-.368c-15.674-9.048-40.745-27.601-64.129-52.557C38.571 146.1 22.934 120.353 18 97.936c-3.773-17.135-1.207-31.683 7.845-44.474a52.956 52.956 0 0122.932-18.67 61.277 61.277 0 0123.381-4.531c2.596-.004 5.189.16 7.763.493 11.03 1.472 24.063 8.166 37.691 19.354L128 58.635l10.386-8.527c13.629-11.188 26.662-17.88 37.691-19.354a59.805 59.805 0 017.762-.493zm0-16.26a75.596 75.596 0 00-9.932.637C156.514 16.96 139.837 27.843 128 37.561c-11.837-9.718-28.514-20.601-45.907-22.924A75.61 75.61 0 0072.16 14c-17.141 0-42.225 5.451-59.663 30.094-48.46 68.479 56.155 165.799 106.679 194.953l.051.03L128 244l8.772-4.923.051-.03c50.524-29.154 155.139-126.474 106.679-194.953C226.065 19.454 200.98 14 183.839 14z"
        fill="#fff"
      />
    </svg>
  );
}

export default HeartOutlineWhite;