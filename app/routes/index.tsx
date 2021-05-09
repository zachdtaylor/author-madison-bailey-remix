import type { LinksFunction } from "remix";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import tailwindUrl from "../styles/app.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export default function Index() {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <main className="flex-auto mb-4">
        <Outlet />
      </main>
      <Footer className="flex-shrink" />
    </div>
  );
}

function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  return (
    <nav className="mx-auto w-full md:border-b-2">
      <div className="flex flex-row justify-between shadow-md md:hidden">
        <img
          src="/madison-bailey-logo.png"
          alt="Madison Bailey's Square Logo"
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
          <NavBarItem to="books">Books</NavBarItem>
        </NavBarGroup>
        <img
          src="/madison-bailey-logo-rectangle.png"
          alt="Madison Bailey's Rectangle Logo"
          className="hidden my-4 md:w-48 md:inline"
        />
        <NavBarGroup>
          <NavBarItem to="contact">Contact</NavBarItem>
          <NavBarItem to="blog">Blog</NavBarItem>
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
    <li className="py-4 border-b-2 md:mx-4 md:py-2 md:border-b-0 hover:text-primary-dark transition duration-200 ease-in-out">
      <NavLink
        to={to}
        className="w-full text-xl"
        activeClassName="text-primary-dark"
        end={exact}
      >
        {children}
      </NavLink>
    </li>
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

interface FooterProps {
  className: string;
}

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`text-center py-12 px-3 bg-gray-300 text-gray-800 ${className}`}
    >
      <p className="mb-2">
        <a
          href="mailto:authormadisonbailey@gmail.com"
          className="hover:text-gray-200"
        >
          Email Me
        </a>
        &nbsp;&bull;&nbsp;
        <a
          href="https://www.instagram.com/authormadisonbailey/"
          className="hover:text-gray-200"
        >
          Instagram
        </a>
        &nbsp;&bull;&nbsp;
        <a
          href="https://m.facebook.com/authormadisonbailey/?__nodl&ref=m.facebook.com&_rdr"
          className="hover:text-gray-200"
        >
          Facebook
        </a>
      </p>
      <p>&copy; {new Date().getFullYear().toString()} Madison Taylor</p>
    </footer>
  );
}
