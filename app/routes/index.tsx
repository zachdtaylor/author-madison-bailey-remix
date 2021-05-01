import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";
import RichText, { Layout } from "../components/lib";
import * as Button from "../components/button";
import * as queries from "../graphql/queries";
import { contentfulClient } from "../utils/contentful-client";
import stylesUrl from "../styles/index.css";
import tailwindUrl from "../styles/app.css";

export let meta: MetaFunction = () => {
  return {
    title: "Home | Author Madison Bailey",
    description: "Clean Romances for the Hopeful Romantic",
  };
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: tailwindUrl },
  ];
};

export let loader: LoaderFunction = async () => {
  const res = await contentfulClient(queries.latestBookRelease);
  return res.data.books.items[0];
};

export default function Index() {
  return (
    <Layout noHeader>
      <img
        src="/madison-bailey-logo-rectangle.png"
        className="mx-auto my-4 md:w-48"
      />
      <HomeBanner />
      <NewestRelease />
    </Layout>
  );
}

function HomeBanner() {
  return (
    <div id="home-banner" className="w-full bg-cover h-0 relative">
      <div className="absolute inset-0 py-4 px-6 md:p-8">
        <div className="relative h-full md:bg-gray-100 md:bg-opacity-50 md:p-8 md:w-1/2">
          <h1 className="hidden md:text-7xl md:leading-tight md:mb-6 md:block">
            Madison
            <br />
            Bailey
          </h1>
          <h2 className="text-2xl leading-loose xs:text-4xl md:text-3xl font-bold text-gray-800">
            Clean Romances for the
            <span className="text-primary-dark"> Hopeful Romantic</span>
          </h2>
          <div className="mt-5">
            <Button.Link to="/books">Check out my books</Button.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const NewestRelease = () => {
  const data = useRouteData();
  return (
    <div className="px-6 py-2">
      <div className="pt-8 pb-5">
        <hr />
      </div>
      <div className="md:mx-8 lg:mx-32">
        <h2 className="text-3xl pb-3 pr-12">Read My Newest Release</h2>
        <div className="border-gray-700 rounded-md shadow-md overflow-hidden md:grid md:grid-cols-3 md:gap-4 md:rounded-none md:shadow-none">
          <img
            src={data.coverArt.url}
            alt={data.coverArt.title}
            className="h-auto"
          />
          <div className="p-4 pb-0 md:pt-0 md:col-span-2">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <RichText richTextResponse={data.description} maxElements={2} />
            <div className="text-right md:text-left">
              <Button.Link to="/books" extraMargin>
                Read More
              </Button.Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
