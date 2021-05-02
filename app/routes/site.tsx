import type { LinksFunction } from "remix";
import { Outlet } from "react-router-dom";
import { Layout } from "../components/lib";
import tailwindUrl from "../styles/app.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export default function Site() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
