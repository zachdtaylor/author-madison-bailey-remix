import { Link, LoaderFunction, useRouteData } from "remix";
import { contentfulClient } from "../../../utils/contentful-client";
import * as queries from "../../../graphql/queries";
import RichText from "../../../components/lib";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await contentfulClient(queries.book, { id: params.id });
  return res.data.book;
};

export default function Book() {
  const book = useRouteData();
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 md:p-5">
      <div className="m-auto w-10/12 h-10/12 bg-white p-3 rounded-md mt-5">
        <div className="float-right">
          <CloseButton />
        </div>
        <div className="m-5 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          <div>
            <div className="border-gray-700 rounded-md shadow-lg overflow-hidden">
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
    <Link to="/site/books">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Link>
  );
}
