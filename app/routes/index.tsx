import type { LinksFunction } from "remix";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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

interface NavBarItemProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

function NavBarItem({ to, exact, children }: NavBarItemProps) {
  return (
    <NavLink
      to={to}
      className="w-full text-xl"
      activeClassName="text-primary-dark"
      end={exact}
    >
      <li className="py-4 border-b-2 md:mx-4 md:py-2 md:border-b-0 hover:text-primary-dark transition duration-200 ease-in-out">
        {children}
      </li>
    </NavLink>
  );
}

function Header() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  return (
    <header id="top" className="mx-auto w-full">
      <nav
        id="site-menu"
        className="flex-row md:flex md:justify-between md:border-b-2"
      >
        <div className="flex flex-row justify-beclassNameeen px-2 py-1 pr-4 shadow-md md:shadow-none">
          <img src="/madison-bailey-logo.png" className="w-16" />
          <div
            id="hamburgerbtn"
            className="w-10 relative md:hidden"
            role="button"
            tabIndex={0}
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
            onKeyDown={() => setMobileMenuActive(!mobileMenuActive)}
          >
            <div className="absolute bottom-0 top-0"></div>
          </div>
        </div>
        <ul
          className={`hidden my-3 mx-5 md:flex md:flex-row ${
            mobileMenuActive ? "block" : ""
          }`}
        >
          <NavBarItem to="/" exact>
            Home
          </NavBarItem>
          <NavBarItem to="/books">Books</NavBarItem>
          <NavBarItem to="/contact">Contact</NavBarItem>
          <NavBarItem to="/blog">Blog</NavBarItem>
        </ul>
      </nav>
    </header>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
}

export function Layout({ children, noHeader }: LayoutProps) {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
      }}
    >
      {!noHeader && <Header />}
      <main>{children}</main>
    </div>
  );
}
