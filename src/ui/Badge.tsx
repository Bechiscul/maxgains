import { FunctionComponent } from "preact";

const Badge: FunctionComponent = ({ children }) => (
  <p className="py-1 px-2 bg-emerald-400 text-xs text-center text-white font-bold rounded-md">
    {children}
  </p>
);

export default Badge;
