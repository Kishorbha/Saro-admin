import * as React from "react";
import { useId } from "react";

function DevilHeadOutlineGradient({ ...props }) {
  const paint0_linear_124_29 = useId();

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
        d="M238.403 0s-25.729 38.353-68.28 42.574a19.289 19.289 0 01-7.475-.65A120.967 120.967 0 00128 36.547a120.965 120.965 0 00-34.648 5.379 19.291 19.291 0 01-7.475.65C43.323 38.35 17.597 0 17.597 0S3.779 26.496 5.087 47.667c.327 19.524 7.112 37.838 20.768 55.868a103.318 103.318 0 00-6.99 62.681c4.866 25.262 18.424 48.046 38.343 64.433C77.126 247.036 102.159 256 128 256s50.874-8.964 70.792-25.351c19.919-16.387 33.477-39.171 38.343-64.433a103.319 103.319 0 00-6.99-62.675c13.649-18.03 20.441-36.343 20.768-55.868C252.221 26.496 238.403 0 238.403 0zm-12.792 47.246c-.241 14.93-6.07 29.278-17.818 43.854a17.26 17.26 0 00-4.14 9.32 17.232 17.232 0 001.846 10.023c7.95 16.528 10.242 33.629 6.814 50.851-3.733 19.538-14.197 37.166-29.588 49.847a86.072 86.072 0 01-54.724 19.619 86.07 86.07 0 01-54.723-19.619c-15.391-12.681-25.856-30.309-29.59-49.847-3.426-17.222-1.135-34.323 6.814-50.851A17.236 17.236 0 0048.214 91.1C36.469 76.53 30.636 62.177 30.395 47.246v-1.181c15.155 9.829 32.019 19.104 52.52 21.509a44.78 44.78 0 0017.802-1.569A95.417 95.417 0 01128 61.687a95.414 95.414 0 0127.283 4.324 44.777 44.777 0 0017.801 1.568c20.502-2.404 37.365-11.68 52.521-21.509l.006 1.176z"
        fill={`url(#${paint0_linear_124_29})`}
      />
      <defs>
        <linearGradient
          id={paint0_linear_124_29}
          x1={164.81}
          y1={57.845}
          x2={45.2866}
          y2={181.318}
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

export default DevilHeadOutlineGradient;
