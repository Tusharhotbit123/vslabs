import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 px-4 py-2 text-white bg-black rounded-xl transition ${className}`}
    >
      {children}
    </button>
  );
};
