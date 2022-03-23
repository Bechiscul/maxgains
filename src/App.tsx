import { FunctionalComponent } from "preact";

import { Router, Route, Link } from "./Router";

import "preact/devtools";

const App: FunctionalComponent = () => (
  <>
    <Router>
      <Route path="/hello" element={<p>Hello World</p>} />
      <Route path="/error" element={<p>Page doesn't exist</p>}></Route>
      <Link url="http://localhost:5000/hello">Hello</Link>
      <Link url="http://localhost:5000/error">Error</Link>
    </Router>
  </>
);

export default App;
