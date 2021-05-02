import React from "react";
import {
  MetaFunction,
  LoaderFunction,
  LinksFunction,
  useRouteData,
} from "remix";
import { Link, Outlet } from "react-router-dom";
import ClampLines from "react-clamp-lines";
import stylesUrl from "../../styles/books.css";
import { contentfulClient } from "../../utils/contentful-client";
import * as queries from "../../graphql/queries";

export let meta: MetaFunction = () => {
  return {
    title: "Books | Author Madison Bailey",
    description: "Check out Madison Bailey's books!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  const res = await contentfulClient(queries.allBooks);
  return res.data.books.items;
};

export default function Books() {
  const books = useRouteData();
  return (
    <div className="m-5 lg:mx-32">
      <div className="books-grid">
        {books.map((book: any) => (
          <BookPreviewCard key={book.sys.id} book={book} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}

// sm: 640
// md: 768
// lg: 1024
// xl: 1280

function getLines(size: number) {
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

interface BookPreviewCardProps {
  book: any;
}

const BookPreviewCard = ({ book }: BookPreviewCardProps) => {
  const [clicked, setClicked] = React.useState(false);
  const [previewLines, setPreviewLines] = React.useState(
    typeof window !== "undefined" ? getLines(window.innerWidth) : 4
  );

  React.useEffect(() => {
    const handleResize = () => {
      setPreviewLines(getLines(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Link
      to={book.sys.id}
      className="book-link"
      onFocus={() => setClicked(true)}
      onBlur={() => setClicked(false)}
    >
      <div className="grid grid-cols-3 grid-flow-col gap-3 ">
        <div className="row-span-5">
          <img src={book.coverArt.url} alt={book.coverArt.title} />
        </div>
        <div className="col-span-2 row-span-4 pr-2">
          <h1 className="text-2xl">{book.title}</h1>
          <ClampLines
            id={book.sys.id}
            className="text-sm"
            text={book.description.json.content[0].content[0].value}
            lines={previewLines}
            ellipsis="..."
            innerElement="p"
            buttons={false}
          />
        </div>
      </div>
    </Link>
  );
};
