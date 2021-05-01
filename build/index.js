var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// <stdin>
__markAsModule(exports);
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: __objSpread(__objSpread({}, Object.fromEntries(responseHeaders)), {
      "Content-Type": "text/html"
    })
  });
}

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix2 = __toModule(require("remix"));
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/styles/global.css
var global_default = "/build/_assets/global-WTN5GD5X.css";

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/root.tsx
var links = () => {
  return [{rel: "stylesheet", href: global_default}];
};
var loader = async () => {
  return {date: new Date()};
};
function Document({children}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function App() {
  let data = (0, import_remix2.useRouteData)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", null, "This page was rendered at ", data.date.toLocaleString())));
}
function ErrorBoundary({error}) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message), /* @__PURE__ */ React.createElement("p", null, "Yikes... something went wrong. Try refreshing the app."));
}

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => FourOhFour,
  meta: () => meta
});
var meta = () => {
  return {title: "Ain't nothing here"};
};
function FourOhFour() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "404"));
}

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta2
});
var import_remix3 = __toModule(require("remix"));

// app/components/lib.tsx
var import_react = __toModule(require("react"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));
function usePathname() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.pathname;
}
function NavBarItem({to, children}) {
  const pathname = usePathname();
  return /* @__PURE__ */ import_react.default.createElement(import_react_router_dom2.NavLink, {
    to,
    className: "w-full text-xl",
    activeClassName: "text-primary-dark"
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "py-4 border-b-2 md:mx-4 md:py-2 md:border-b-0 hover:text-primary-dark transition duration-200 ease-in-out"
  }, children));
}
function Header() {
  const [mobileMenuActive, setMobileMenuActive] = import_react.default.useState(false);
  return /* @__PURE__ */ import_react.default.createElement("header", {
    id: "top",
    className: "mx-auto w-full"
  }, /* @__PURE__ */ import_react.default.createElement("nav", {
    id: "site-menu",
    className: "flex-row md:flex md:justify-between md:border-b-2"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row justify-beclassNameeen px-2 py-1 pr-4 shadow-md md:shadow-none"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    id: "hamburgerbtn",
    className: "w-10 relative md:hidden",
    role: "button",
    tabIndex: 0,
    onClick: () => setMobileMenuActive(!mobileMenuActive),
    onKeyDown: () => setMobileMenuActive(!mobileMenuActive)
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "absolute bottom-0 top-0"
  }))), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: `hidden my-3 mx-5 md:flex md:flex-row ${mobileMenuActive ? "block" : ""}`
  }, /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/"
  }, "Home"), /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/books"
  }, "Books"), /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/contact"
  }, "Contact"), /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/blog"
  }, "Blog"))));
}
function Layout({children, noHeader}) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      minHeight: "100%",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateColumns: "100%"
    }
  }, !noHeader && /* @__PURE__ */ import_react.default.createElement(Header, null), /* @__PURE__ */ import_react.default.createElement("main", null, children));
}

// app/components/button.tsx
var import_react_router_dom3 = __toModule(require("react-router-dom"));
function Link2({to, children, extraMargin}) {
  return /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to,
    className: `inline-block bg-primary-dark hover:bg-primary ease-in-out transition duration-200 text-white py-3 px-4 rounded shadow-md
        ${extraMargin && "mt-3 mb-5 md:my-3"}`
  }, children);
}

// app/styles/index.css
var styles_default = "/build/_assets/index-JEUFNT4K.css";

// app/styles/app.css
var app_default = "/build/_assets/app-ZS4OQHIC.css";

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index.tsx
var meta2 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
var links2 = () => {
  return [
    {rel: "stylesheet", href: styles_default},
    {rel: "stylesheet", href: app_default}
  ];
};
var loader2 = async () => {
  return {message: "this is awesome \u{1F60E}"};
};
function Index() {
  let data = (0, import_remix3.useRouteData)();
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    id: "home-banner",
    className: "w-full bg-cover h-0 relative mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 py-4 px-6 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full md:bg-gray-100 md:bg-opacity-50 md:p-8 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "hidden md:text-7xl md:leading-tight md:mb-6 md:block"
  }, "Madison", /* @__PURE__ */ React.createElement("br", null), "Bailey"), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl xs:text-4xl md:text-3xl font-bold text-gray-800"
  }, "Clean Romances for the", /* @__PURE__ */ React.createElement("span", {
    className: "text-primary-dark"
  }, " Hopeful Romantic")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement(Link2, {
    to: "/books"
  }, "Check out my books"))))), /* @__PURE__ */ React.createElement("div", {
    style: {textAlign: "center", padding: 20}
  }, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/dashboard/docs"
  }, "Check out the docs"), " to get started."), /* @__PURE__ */ React.createElement("p", null, "Message from the loader: ", data.message)));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = {module: entry_server_exports};
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "/",
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "*",
    caseSensitive: false,
    module: __exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    caseSensitive: false,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
