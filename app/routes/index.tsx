import type { LinksFunction } from "remix";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import tailwindUrl from "../styles/app.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export default function Index() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Header() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  return (
    <nav className="mx-auto w-full md:border-b-2">
      <div className="flex flex-row justify-between shadow-md md:hidden">
        <img
          src="/madison-bailey-logo.png"
          alt="Madison Bailey Logo"
          className="max-h-24"
        />
        <div
          className="w-24 flex items-center"
          role="button"
          tabIndex={0}
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
          onKeyDown={() => setMobileMenuActive(!mobileMenuActive)}
        >
          <MenuIcon />
        </div>
      </div>
      <ul
        className={`my-3 mx-5 md:flex md:flex-row md:justify-center ${
          mobileMenuActive ? "block" : "hidden"
        }`}
      >
        <NavBarGroup>
          <NavBarItem to="/" exact>
            Home
          </NavBarItem>
          <NavBarItem to="/books">Books</NavBarItem>
        </NavBarGroup>
        <img
          src="/madison-bailey-logo-rectangle.png"
          className="hidden my-4 md:w-48 md:inline"
        />
        <NavBarGroup>
          <NavBarItem to="/contact">Contact</NavBarItem>
          <NavBarItem to="/blog">Blog</NavBarItem>
        </NavBarGroup>
      </ul>
    </nav>
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

interface NavBarGroupProps {
  children: React.ReactNode;
}

function NavBarGroup({ children }: NavBarGroupProps) {
  return <div className="md:flex md:flex-row md:items-center">{children}</div>;
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="my-0 mx-auto"
      viewBox="0 0 24 24"
      width="45"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
