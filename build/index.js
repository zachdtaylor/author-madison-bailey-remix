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
var global_default = "/build/_assets/global-S4B5HPEC.css";

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
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
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
  Layout: () => Layout,
  default: () => Index,
  links: () => links2
});
var import_react = __toModule(require("react"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));

// app/styles/app.css
var app_default = "/build/_assets/app-SKIFVIF3.css";

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index.tsx
var links2 = () => {
  return [{rel: "stylesheet", href: app_default}];
};
function Index() {
  return /* @__PURE__ */ import_react.default.createElement(Layout, null, /* @__PURE__ */ import_react.default.createElement(import_react_router_dom2.Outlet, null));
}
function Header() {
  const [mobileMenuActive, setMobileMenuActive] = import_react.default.useState(false);
  return /* @__PURE__ */ import_react.default.createElement("header", {
    id: "top",
    className: "mx-auto w-full"
  }, /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "md:border-b-2"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row justify-between shadow-md md:hidden"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "/madison-bailey-logo.png",
    alt: "Madison Bailey Logo",
    className: "max-h-24"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "w-24 flex items-center",
    role: "button",
    tabIndex: 0,
    onClick: () => setMobileMenuActive(!mobileMenuActive),
    onKeyDown: () => setMobileMenuActive(!mobileMenuActive)
  }, /* @__PURE__ */ import_react.default.createElement(MenuIcon, null))), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: `my-3 mx-5 md:flex md:flex-row md:justify-center ${mobileMenuActive ? "block" : "hidden"}`
  }, /* @__PURE__ */ import_react.default.createElement(NavBarGroup, null, /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/",
    exact: true
  }, "Home"), /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/books"
  }, "Books")), /* @__PURE__ */ import_react.default.createElement("img", {
    src: "/madison-bailey-logo-rectangle.png",
    className: "hidden my-4 md:w-48 md:inline"
  }), /* @__PURE__ */ import_react.default.createElement(NavBarGroup, null, /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/contact"
  }, "Contact"), /* @__PURE__ */ import_react.default.createElement(NavBarItem, {
    to: "/blog"
  }, "Blog")))));
}
function NavBarItem({to, exact, children}) {
  return /* @__PURE__ */ import_react.default.createElement(import_react_router_dom2.NavLink, {
    to,
    className: "w-full text-xl",
    activeClassName: "text-primary-dark",
    end: exact
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "py-4 border-b-2 md:mx-4 md:py-2 md:border-b-0 hover:text-primary-dark transition duration-200 ease-in-out"
  }, children));
}
function NavBarGroup({children}) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "md:flex md:flex-row md:items-center"
  }, children);
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
function MenuIcon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    className: "my-0 mx-auto",
    viewBox: "0 0 24 24",
    width: "45",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index/books.tsx
var books_exports = {};
__export(books_exports, {
  default: () => Books,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta2
});
var import_react2 = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));
var import_react_router_dom3 = __toModule(require("react-router-dom"));
var import_react_clamp_lines = __toModule(require("react-clamp-lines"));

// app/styles/books.css
var books_default = "/build/_assets/books-5FYJU3DU.css";

// app/utils/contentful-client.ts
function contentfulClient(query, variables) {
  return fetch("https://graphql.contentful.com/content/v1/spaces/6exbx0zy4oap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer u2_zse6aykxBOlBCiTpTBsqGAnc2rOb9N0UTk-33Xyg"
    },
    body: JSON.stringify({
      query,
      variables
    })
  }).then((res) => res.json());
}

// app/graphql/queries.ts
var bookFragment = `
  fragment BookData on Book {
    sys {
      id
    }
    title
    description {
      json
    }
    coverArt {
      title
      url
    }
  }
`;
var latestBookRelease = `
  query {
    books: bookCollection(limit: 1, order: publicationDate_DESC) {
      items {
        ...BookData
      }
    }
  }
  ${bookFragment}
`;
var allBooks = `
  query {
    books: bookCollection(order: publicationDate_DESC) {
      items {
        ...BookData
      }
    }
  }
  ${bookFragment}
`;
var book = `
  query($id: String!) {
    book(id: $id) {
      ...BookData
    }
  }
  ${bookFragment}
`;

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index/books.tsx
var meta2 = () => {
  return {
    title: "Books | Author Madison Bailey",
    description: "Check out Madison Bailey's books!"
  };
};
var links3 = () => {
  return [{rel: "stylesheet", href: books_default}];
};
var loader2 = async () => {
  const res = await contentfulClient(allBooks);
  return res.data.books.items;
};
function Books() {
  const books = (0, import_remix3.useRouteData)();
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "m-5 lg:mx-32"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "books-grid"
  }, books.map((book2) => /* @__PURE__ */ import_react2.default.createElement(BookPreviewCard, {
    key: book2.sys.id,
    book: book2
  }))), /* @__PURE__ */ import_react2.default.createElement(import_react_router_dom3.Outlet, null));
}
function getLines(size) {
  if (size >= 1250) {
    return 5;
  } else if (size >= 640) {
    return 4;
  } else if (size >= 450) {
    return 8;
  } else if (size >= 425) {
    return 6;
  } else if (size >= 375) {
    return 5;
  } else if (size >= 320) {
    return 4;
  } else {
    return 3;
  }
}
var BookPreviewCard = ({book: book2}) => {
  const [previewLines, setPreviewLines] = import_react2.default.useState(typeof window !== "undefined" ? getLines(window.innerWidth) : 4);
  import_react2.default.useEffect(() => {
    const handleResize = () => {
      setPreviewLines(getLines(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return /* @__PURE__ */ import_react2.default.createElement(import_react_router_dom3.Link, {
    to: book2.sys.id,
    className: "book-link",
    replace: true
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "grid grid-cols-3 grid-flow-col gap-3 "
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "row-span-5"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: book2.coverArt.url,
    alt: book2.coverArt.title
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "col-span-2 row-span-4 pr-2"
  }, /* @__PURE__ */ import_react2.default.createElement("h1", {
    className: "text-2xl"
  }, book2.title), /* @__PURE__ */ import_react2.default.createElement(import_react_clamp_lines.default, {
    id: book2.sys.id,
    className: "text-sm",
    text: book2.description.json.content[0].content[0].value,
    lines: previewLines,
    ellipsis: "...",
    innerElement: "p",
    buttons: false
  }))));
};

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index/books/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Book,
  loader: () => loader3,
  meta: () => meta3
});
var import_react4 = __toModule(require("react"));
var import_remix4 = __toModule(require("remix"));

// app/components/lib.tsx
var import_react3 = __toModule(require("react"));
var import_rich_text_types = __toModule(require("@contentful/rich-text-types"));
var import_rich_text_react_renderer = __toModule(require("@contentful/rich-text-react-renderer"));
function Paragraph({children}) {
  return /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "text-gray-900 text-lg leading-relaxed py-2"
  }, children);
}
var options = {
  renderMark: {
    [import_rich_text_types.MARKS.BOLD]: () => /* @__PURE__ */ import_react3.default.createElement("span", {
      style: {fontFamily: "TimelessBold"}
    })
  },
  renderNode: {
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(Paragraph, null, children)
  }
};
function RichText({richTextResponse, maxElements}) {
  const components = (0, import_rich_text_react_renderer.documentToReactComponents)(richTextResponse.json, options);
  if (typeof maxElements === "number") {
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, components.slice(0, maxElements));
  }
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, components);
}

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index/books/$id.tsx
var meta3 = ({data: book2}) => {
  return {
    title: `${book2.title} | Books | Author Madison Bailey`,
    description: book2.description.json.content[0].content[0].value
  };
};
var loader3 = async ({params}) => {
  const res = await contentfulClient(book, {id: params.id});
  return res.data.book;
};
function Book() {
  const [scrolled, setScrolled] = import_react4.default.useState(false);
  const book2 = (0, import_remix4.useRouteData)();
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "absolute z-10 top-0 left-0 w-full h-full py-6 px-6 lg:px-32 bg-gray-600 bg-opacity-50"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "m-auto w-full h-full bg-white rounded-md overflow-hidden"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: `p-3 ${scrolled && "shadow-md"}`
  }, /* @__PURE__ */ import_react4.default.createElement(CloseButton, null)), /* @__PURE__ */ import_react4.default.createElement("div", {
    onScroll: (event) => setScrolled(event.target.scrollTop !== 0),
    className: "mx-8 mb-3 h-full sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 overflow-scroll"
  }, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "border-gray-700 rounded-md shadow-lg"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    src: book2.coverArt.url,
    alt: book2.coverArt.title
  }))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "p-3 pt-5 sm:pt-0 md:col-span-2"
  }, /* @__PURE__ */ import_react4.default.createElement("h1", {
    className: "text-2xl font-bold"
  }, book2.title), /* @__PURE__ */ import_react4.default.createElement(RichText, {
    richTextResponse: book2.description
  }), /* @__PURE__ */ import_react4.default.createElement("hr", {
    className: "my-5"
  })))));
}
function CloseButton() {
  return /* @__PURE__ */ import_react4.default.createElement(import_remix4.Link, {
    to: "/books",
    replace: true
  }, /* @__PURE__ */ import_react4.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react4.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  })));
}

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index/index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  links: () => links4,
  loader: () => loader4,
  meta: () => meta4
});
var import_remix5 = __toModule(require("remix"));

// app/components/button.tsx
var import_react_router_dom4 = __toModule(require("react-router-dom"));
function Link3({to, children, extraMargin}) {
  return /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to,
    className: `inline-block bg-primary-dark hover:bg-primary ease-in-out transition duration-200 text-white py-3 px-4 rounded shadow-md
        ${extraMargin && "mt-3 mb-5 md:my-3"}`
  }, children);
}

// app/styles/index.css
var styles_default = "/build/_assets/index-JEUFNT4K.css";

// route-module:/Users/zachtaylor/Projects/author-madison-bailey-remix/app/routes/index/index.tsx
var meta4 = () => {
  return {
    title: "Home | Author Madison Bailey",
    description: "Clean Romances for the Hopeful Romantic"
  };
};
var links4 = () => {
  return [
    {rel: "stylesheet", href: styles_default},
    {rel: "stylesheet", href: app_default}
  ];
};
var loader4 = async () => {
  const res = await contentfulClient(latestBookRelease);
  return res.data.books.items[0];
};
function Index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HomeBanner, null), /* @__PURE__ */ React.createElement(NewestRelease, null));
}
function HomeBanner() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "home-banner",
    className: "w-full bg-cover h-0 relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 py-4 px-6 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full md:bg-gray-100 md:bg-opacity-50 md:p-8 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "hidden md:text-7xl md:leading-tight md:mb-6 md:block"
  }, "Madison", /* @__PURE__ */ React.createElement("br", null), "Bailey"), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl leading-loose xs:text-4xl md:text-3xl font-bold text-gray-800"
  }, "Clean Romances for the", /* @__PURE__ */ React.createElement("span", {
    className: "text-primary-dark"
  }, " Hopeful Romantic")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement(Link3, {
    to: "/site/books"
  }, "Check out my books")))));
}
var NewestRelease = () => {
  const data = (0, import_remix5.useRouteData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-6 py-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-8 pb-5"
  }, /* @__PURE__ */ React.createElement("hr", null)), /* @__PURE__ */ React.createElement("div", {
    className: "md:mx-8 lg:mx-32"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl pb-3 pr-12"
  }, "Read My Newest Release"), /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-700 rounded-md shadow-md overflow-hidden md:grid md:grid-cols-3 md:gap-4 md:rounded-none md:shadow-none"
  }, /* @__PURE__ */ React.createElement("img", {
    src: data.coverArt.url,
    alt: data.coverArt.title,
    className: "h-auto"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 pb-0 md:pt-0 md:col-span-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, data.title), /* @__PURE__ */ React.createElement(RichText, {
    richTextResponse: data.description,
    maxElements: 2
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-right md:text-left"
  }, /* @__PURE__ */ React.createElement(Link3, {
    to: `/books/${data.sys.id}`,
    extraMargin: true
  }, "Read More"))))));
};

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
  },
  "routes/index/books": {
    id: "routes/index/books",
    parentId: "routes/index",
    path: "books",
    caseSensitive: false,
    module: books_exports
  },
  "routes/index/books/$id": {
    id: "routes/index/books/$id",
    parentId: "routes/index/books",
    path: ":id",
    caseSensitive: false,
    module: id_exports
  },
  "routes/index/index": {
    id: "routes/index/index",
    parentId: "routes/index",
    path: "/",
    caseSensitive: false,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
