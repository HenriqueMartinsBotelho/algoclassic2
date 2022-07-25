import * as React from "react";
import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: any;
  className?: string;
  active?: boolean;
}

const Button = ({
  onClick,
  children,
  className,
  style,
  active,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        "text-base leading-tight  border rounded-lg py-2 px-4 bg-blue-500",
        {
          "bg-link border-4 border-indigo-600 border-link text-white hover:bg-link focus:bg-link active:bg-link":
            active,
          "bg-transparent bg-blue-400  text-secondary dark:text-secondary-dark bg-secondary-button dark:bg-secondary-button-dark hover:text-link focus:text-link border-transparent":
            !active,
        }
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
