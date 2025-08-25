import React from "react";

export const DownArrow = ({
  className = "w-4 h-4",
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M5 8l7 11 7-11H5z" />
  </svg>
);
