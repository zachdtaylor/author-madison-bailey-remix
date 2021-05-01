import React from "react";
import { NavLink } from "react-router-dom";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface NavBarItemProps {
  to: string;
  children: React.ReactNode;
}

function NavBarItem({ to, children }: NavBarItemProps) {
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

interface ParagraphProps {
  children: React.ReactNode;
}

function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-gray-900 text-lg leading-relaxed py-2">{children}</p>
  );
}

const options = {
  renderMark: {
    [MARKS.BOLD]: () => <span style={{ fontFamily: "TimelessBold" }}></span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <Paragraph>{children}</Paragraph>
    ),
  },
};

interface RichTextProps {
  richTextResponse: { json: any };
  maxElements?: number;
}

function RichText({ richTextResponse, maxElements }: RichTextProps) {
  const components = documentToReactComponents(
    richTextResponse.json,
    options
  ) as Array<React.ReactElement>;
  if (typeof maxElements === "number") {
    return <>{components.slice(0, maxElements)}</>;
  }
  return <>{components}</>;
}

export default RichText;
