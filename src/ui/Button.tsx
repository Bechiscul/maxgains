import { FunctionComponent, JSX, ComponentType, ComponentChild } from "preact";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ className, ...props }) => {
  const buttonClassNames = "bg-emerald-500 px-4 h-10 rounded text-white";
  return <button {...props} className={buttonClassNames} />;
};

export default Button;
