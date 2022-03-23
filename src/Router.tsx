// TODO(Bech): Matching

import { FunctionalComponent, createContext, JSX } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

class Location {
  public static fromUrl(url: URL, state?: object, key?: string) {
    const location = new Location();
    location.pathname = url.pathname;
    location.search = new URLSearchParams(url.search);
    location.hash = url.hash;
    location.state = state !== undefined ? state : null;
    location.key = key;
    return location;
  }

  public static fromPath(path: string, state?: object, key?: string) {
    const url = new URL(window.location.origin + path);
    return Location.fromUrl(url, state, key);
  }

  public static fromWindowLocation(state?: object, key?: string) {
    const url = new URL(window.location.toString());
    return Location.fromUrl(url, state, key);
  }

  public get url() {
    return new URL(
      window.location.origin + this.pathname + this.search + this.hash
    );
  }

  public pathname: string = "";
  public search: URLSearchParams = new URLSearchParams(undefined);
  public hash: string = "";
  public state: unknown = null;
  public key?: string = undefined;
}

interface HistoryState {
  index: number;
}

class History {
  public constructor(history: globalThis.History) {
    this.history = history;
  }

  public static fromWindowHistory() {
    return new History(window.history);
  }

  public pushState(nextLocation: Location) {
    const nextIndex = this.index + 1;
    const historyState = History._historyStateFromLocation(
      nextLocation,
      nextIndex
    );

    this.history.pushState(historyState, "", nextLocation.url);
  }

  public handlePopState(e: PopStateEvent) {
    console.log("popped");
  }

  private static _historyStateFromLocation(
    nextLocation: Location,
    nextIndex: number
  ): HistoryState {
    return {
      index: nextIndex,
    };
  }

  private history: globalThis.History;
  private index: number = 0;
}

const HistoryContext = createContext({
  pushState: (nextLocation: Location) => {},
});

export const Router: FunctionalComponent = ({ children }) => {
  const [history, setHistory] = useState(History.fromWindowHistory());
  const [location, setLocation] = useState(Location.fromWindowLocation());

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      history.handlePopState(e);
      setLocation(Location.fromWindowLocation());
    });

    return () => window.removeEventListener("popstate", history.handlePopState);
  }, []);

  const pushState = (nextLocation: Location) => {
    setHistory((history) => {
      history.pushState(nextLocation);
      return history;
    });

    setLocation(nextLocation);
  };

  return (
    <HistoryContext.Provider value={{ pushState }}>
      {children}
      <p>{window.location.toString()}</p>
    </HistoryContext.Provider>
  );
};

export interface LinkProps {
  path?: string;
}

export const Link: FunctionalComponent<LinkProps> = ({ path, children }) => {
  const { pushState } = useContext(HistoryContext);

  const handleClick = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (path !== undefined) {
      pushState(Location.fromPath(path));
    }
  };

  return (
    <a href="test" onClick={handleClick}>
      {children}
    </a>
  );
};
