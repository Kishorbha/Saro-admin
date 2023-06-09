import * as React from "react";

function CreateStoryFilledWhite({ ...props }) {
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
        d="M224.411 33H31.589a31.606 31.606 0 00-22.335 9.248A31.564 31.564 0 000 64.568v127.864a31.564 31.564 0 009.254 22.32A31.606 31.606 0 0031.589 224H224.41a31.606 31.606 0 0022.335-9.248 31.564 31.564 0 009.254-22.32V64.568a31.564 31.564 0 00-9.254-22.32A31.606 31.606 0 00224.411 33zm-26.488 128.908l-36.493 36.47L128 164.969l-33.43 33.409-36.493-36.47 33.43-33.408-33.43-33.408 36.493-36.47L128 92.031l33.43-33.409 36.493 36.47-33.43 33.408 33.43 33.408z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CreateStoryFilledWhite;
