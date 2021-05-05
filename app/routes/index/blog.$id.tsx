import React from "react";
import { Link, LoaderFunction, MetaFunction, useRouteData } from "remix";
import { contentfulClient } from "../../utils/contentful-client";
import * as queries from "../../graphql/queries";
import { Margin, RichText } from "../../components/lib";
import { fullDateString } from "../../utils/misc";

export const meta: MetaFunction = ({ data: post }) => {
  return {
    title: `${post.title} | Blog | Author Madison Bailey`,
    description: post.body.json.content[0].content[0].value,
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const res = await contentfulClient(queries.blogPost, { id: params.id });
  return res.data.blogPost;
};

export default function BlogPost() {
  const post = useRouteData();
  return (
    <Margin>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="my-2">Posted {fullDateString(post.postDate)}</p>
      <RichText richTextResponse={post.body} />
    </Margin>
  );
}
