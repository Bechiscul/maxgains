import { FunctionalComponent } from "preact";

import { Link, Router } from "./Router";

import "preact/devtools";

const App: FunctionalComponent = () => (
  <>
    <Router>
      <Link path="/hello-world">Hello World!</Link>
      <Link path="/hello-world2">Hello World 2!</Link>
    </Router>
  </>
);

export default App;
