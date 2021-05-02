import React from "react";
import { Link, LoaderFunction, MetaFunction, useRouteData } from "remix";
import { contentfulClient } from "../../../utils/contentful-client";
import * as queries from "../../../graphql/queries";
import { RichText } from "../../../components/lib";

export const meta: MetaFunction = ({ data: book }) => {
  return {
    title: `${book.title} | Books | Author Madison Bailey`,
    description: book.description.json.content[0].content[0].value,
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const res = await contentfulClient(queries.book, { id: params.id });
  return res.data.book;
};

export default function Book() {
  const [scrolled, setScrolled] = React.useState(false);
  const book = useRouteData();
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full py-6 px-6 lg:px-32 bg-gray-600 bg-opacity-50">
      <div className="m-auto w-full h-full bg-white rounded-md overflow-hidden">
        <div className={`p-3 ${scrolled && "shadow-md"}`}>
          <CloseButton />
        </div>
        <div
          onScroll={event =>
            setScrolled((event.target as HTMLDivElement).scrollTop !== 0)
          }
          className="mx-8 mb-3 h-full sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 overflow-scroll"
        >
          <div>
            <div className="border-gray-700 rounded-md shadow-lg">
              <img src={book.coverArt.url} alt={book.coverArt.title} />
            </div>
          </div>
          <div className="p-3 pt-5 sm:pt-0 md:col-span-2">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <RichText richTextResponse={book.description} />
            <hr className="my-5" />
            {/* <PurchaseLinks {...book} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseButton() {
  return (
    <Link to=".." replace>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Link>
  );
}
