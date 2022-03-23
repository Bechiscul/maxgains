import {
  ComponentType,
  FunctionalComponent,
  createContext,
  ComponentChild,
  JSX,
  Context,
  toChildArray,
} from "preact";
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

  public static fromWindowLocation(state?: object, key?: string) {
    const url = new URL(window.location.toString());
    return Location.fromUrl(url, state, key);
  }

  public get url() {
    // console.log(window.location.origin);
    return new URL(
      window.location.origin + this.pathname + this.search + this.hash
    );
  }

  public pathname: string = "";
  public search: URLSearchParams = new URLSearchParams(undefined);
  public hash: string = "";
  public state: object | null = null;
  public key?: string = undefined;
}

class History {
  public pushState(location: Location) {
    this.locations = this.locations.slice(this.index);
    this.locations.push(location);
    if (this.currentLocation !== undefined) {
      this.index += 1;
    }
  }

  public popState() {}

  public get currentLocation() {
    if (this.locations.length > 0) {
      return this.locations[0];
    }

    return undefined;
  }

  locations: Location[] = [];
  index: number = 0;
}

const RouterContext = createContext({
  location: Location.fromWindowLocation(),
});

const HistoryContext = createContext({
  pushState: (location: Location) => {},
  replaceState: (location: Location) => {},
  popState: () => {},
});

export type RouterProps = {
  onChange?: () => unknown;
};

export const Router: FunctionalComponent<RouterProps> = ({ children }) => {
  const [location, setLocation] = useState(Location.fromWindowLocation());
  // const [history, setHistory] = useState<Location[]>([location]);

  const pushState = (location: Location) => {
    setLocation(location);
    window.history.pushState(location.state, "", location.url);
  };

  const replaceState = (location: Location) => {};

  const popState = () => {
    window.history.back();
  };

  const handlePopState = (e: PopStateEvent) => {
    console.log(window.history);
    e.preventDefault();

    setLocation(location);
  };

  useEffect(() => {
    // setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ location }}>
      <HistoryContext.Provider value={{ pushState, popState, replaceState }}>
        {children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  );
};

export type RouteProps = {
  path: string;
  element?: JSX.Element;
};

export const Route: FunctionalComponent<RouteProps> = ({ path, element }) => {
  const { location } = useContext(RouterContext);
  return path === location.pathname && element ? element : <></>;
};

export const useRoutes = () => {};

export type LinkProps = {
  url?: string;
  state?: object;
};

export const Link: FunctionalComponent<LinkProps> = (props) => {
  let { url, state, children } = props;
  const { pushState } = useHistory();

  const handleClick = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (url !== undefined) {
      pushState(Location.fromUrl(new URL(url), state));
    }
  };

  return (
    <a href="test" onClick={handleClick}>
      {children}
    </a>
  );
};

export const useHistory = () => {
  return useContext(HistoryContext);
};
