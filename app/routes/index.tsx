import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";
import { Layout } from "../components/lib";
import * as Button from "../components/button";

import stylesUrl from "../styles/index.css";
import tailwindUrl from "../styles/app.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: tailwindUrl },
  ];
};

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

export default function Index() {
  let data = useRouteData();

  return (
    <Layout>
      <div id="home-banner" className="w-full bg-cover h-0 relative mt-4">
        <div className="absolute inset-0 py-4 px-6 md:p-8">
          <div className="relative h-full md:bg-gray-100 md:bg-opacity-50 md:p-8 md:w-1/2">
            <h1 className="hidden md:text-7xl md:leading-tight md:mb-6 md:block">
              Madison
              <br />
              Bailey
            </h1>
            <h2 className="text-2xl xs:text-4xl md:text-3xl font-bold text-gray-800">
              Clean Romances for the
              <span className="text-primary-dark"> Hopeful Romantic</span>
            </h2>
            <div className="mt-5">
              <Button.Link to="/books">Check out my books</Button.Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: 20 }}>
        <h2>Welcome to Remix!</h2>
        <p>
          <a href="https://remix.run/dashboard/docs">Check out the docs</a> to
          get started.
        </p>
        <p>Message from the loader: {data.message}</p>
      </div>
    </Layout>
  );
}
