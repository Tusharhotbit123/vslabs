import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 px-4 py-2   text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
