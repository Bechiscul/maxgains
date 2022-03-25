import { FunctionComponent, JSX } from "preact";

export interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Container: FunctionComponent<ContainerProps> = ({
  className,
  ...rest
}) => {
  return <div className={`container ${className}`} {...rest} />;
};

export default Container;
