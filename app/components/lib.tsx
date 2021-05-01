import React from "react";
import { Link, NavLink } from "react-router-dom";

function usePathname() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.pathname;
}

interface NavBarItemProps {
  to: string;
  children: React.ReactNode;
}

function NavBarItem({ to, children }: NavBarItemProps) {
  const pathname = usePathname();
  return (
    <NavLink
      to={to}
      className="w-full text-xl"
      activeClassName="text-primary-dark"
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
          <NavBarItem to="/">Home</NavBarItem>
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
