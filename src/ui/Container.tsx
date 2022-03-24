import { FunctionComponent } from "preact";

const Container: FunctionComponent = ({ children }) => {
  return <div className="w-full px-4 md:px-10">{children}</div>;
};

export default Container;
