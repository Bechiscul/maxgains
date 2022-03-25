import { FunctionalComponent } from "preact";

import { Link, Route, Router } from "./Router";

import "preact/devtools";

import AppBar from "./components/AppBar";
import Exercises from "./pages/Exercises";

const App: FunctionalComponent = () => (
  <>
    <Router>
      <div className="h-[calc(100vh-64px)]">
        <Route path="/exercises" element={<Exercises />} />
      </div>
      <div className="fixed w-screen">
        <AppBar />
      </div>
    </Router>
  </>
);

export default App;
