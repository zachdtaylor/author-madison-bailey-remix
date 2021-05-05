import { MetaFunction, LoaderFunction, useRouteData } from "remix";
import { Link } from "react-router-dom";
import { Margin, RichText } from "../../components/lib";
import { contentfulClient } from "../../utils/contentful-client";
import * as queries from "../../graphql/queries";
import { fullDateString } from "../../utils/misc";

export let meta: MetaFunction = () => {
  return {
    title: "Blog | Author Madison Bailey",
    description: "Check out Madison Bailey's blog posts",
  };
};

export let loader: LoaderFunction = async () => {
  const res = await contentfulClient(queries.allBlogPosts);
  return res.data.posts.items;
};

export default function Blog() {
  const posts = useRouteData();
  return (
    <Margin>
      {posts.map((post: any) => (
        <BlogPostPreview key={post.sys.id} blogPost={post} />
      ))}
    </Margin>
  );
}

interface BlogPostPreviewProps {
  blogPost: any;
}

const BlogPostPreview = ({ blogPost }: BlogPostPreviewProps) => (
  <div>
    <Link to={blogPost.sys.id}>
      <h1 className="text-primary-dark text-3xl hover:text-primary transition duration-500 ease-in-out py-3 inline-block">
        {blogPost.title}
      </h1>
    </Link>
    <p>{fullDateString(blogPost.postDate)}</p>
    <RichText richTextResponse={blogPost.body} maxElements={1} />
  </div>
);
