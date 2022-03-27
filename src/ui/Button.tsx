import { FunctionComponent, JSX, ComponentType, ComponentChild } from "preact";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ className, ...props }) => {
  const buttonClassNames = "bg-emerald-500 px-4 h-10 rounded text-white";
  return <button {...props} className={buttonClassNames} />;
};

interface IconButtonProps
  extends Omit<JSX.HTMLAttributes<HTMLButtonElement>, "className" | "icon"> {
  icon?: ComponentType<JSX.SVGAttributes<SVGElement>>;
  render?: ComponentChild;
}

const IconButton: FunctionComponent<IconButtonProps> = ({ icon, ...rest }) => {
  const Icon = icon;
  if (Icon) {
    return (
      <button {...rest}>
        <Icon />
      </button>
    );
  }

  return <></>;
};

export { ButtonProps, IconButtonProps, IconButton };

export default Button;
