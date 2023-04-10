import * as React from "react";

function LoadingGradient({ ...props }) {
  const paint0_linear_124_15 = React.useId();
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
        d="M134.94 7A120.77 120.77 0 0086.202 17.21 120.715 120.715 0 0045.734 46.21l23.557 23.55a87.779 87.779 0 0150.195-28.096 87.806 87.806 0 0156.819 9.007 87.747 87.747 0 0139.033 42.241 87.687 87.687 0 014.476 57.327 87.721 87.721 0 01-32.003 47.782 87.798 87.798 0 01-54.733 17.709 87.792 87.792 0 01-53.948-19.972 87.722 87.722 0 01-29.984-49.074c23.951 2.025 52.721.888 52.721.888C55.558 133.268 31.545 92.44 31.545 92.44-13.502 133.27 2.92 201.86 2.92 201.86c3.744-21.893 9.431-36.116 14.442-45.046a120.985 120.985 0 0033.184 57.938 121.075 121.075 0 0058.876 31.529 121.115 121.115 0 0066.643-4.477 121.057 121.057 0 0054.124-39.121 120.946 120.946 0 0013.612-127.616 121.013 121.013 0 00-44.655-49.647A121.107 121.107 0 00134.945 7h-.005z"
        fill={`url(#${paint0_linear_124_15})`}
      />
      <defs>
        <linearGradient
          id={paint0_linear_124_15}
          x1={199.141}
          y1={30.5229}
          x2={72.3736}
          y2={226.281}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6DCEF5" />
          <stop offset={0.128} stopColor="#6FA1D7" />
          <stop offset={0.286} stopColor="#7270B7" />
          <stop offset={0.407} stopColor="#7351A3" />
          <stop offset={0.474} stopColor="#74469B" />
          <stop offset={0.549} stopColor="#7B499C" />
          <stop offset={0.662} stopColor="#9052A0" />
          <stop offset={0.799} stopColor="#B260A5" />
          <stop offset={0.953} stopColor="#E074AC" />
          <stop offset={1} stopColor="#F07BAF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LoadingGradient;
