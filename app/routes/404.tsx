import type { MetaFunction, LinksFunction } from "remix";
import * as Button from "../components/button";
import tailwindUrl from "../styles/app.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export let meta: MetaFunction = () => {
  return { title: "Not found" };
};

export default function FourOhFour() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Whoops... this page doesn't exist!
      </h1>
      <Button.Link to="..">Go Back</Button.Link>
    </div>
  );
}
