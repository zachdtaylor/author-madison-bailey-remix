import { LinksFunction, LoaderFunction, useMatches } from "remix";
import { Meta, Links, Scripts, useRouteData, LiveReload } from "remix";
import { Outlet } from "react-router-dom";

import stylesUrl from "./styles/global.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { date: new Date() };
};

function Document({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const includeScripts = matches.some(match => match.handle?.hydrate);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        {includeScripts && <Scripts />}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>Yikes... something went wrong. Try refreshing the app.</p>
    </Document>
  );
}
