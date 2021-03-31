import fs from "fs";
import path from "path";

import Head from "next/head";
// import styles from "../styles/Home.module.css";÷
// import Introduction from "./../_posts/Introduction.mdx";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

// import Heading from "../components/heading";
import DefaultLayout from "../components/DefaultLayout";

import { Typography } from "@supabase/ui";

// import { getPostdata } from "../lib/posts";

const components = {};

export default function Home({ source }: any) {
  const content = hydrate(source);
  return (
    <DefaultLayout>
      <div className="container px-8 mx-auto">
        <Typography>{content}</Typography>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  //Finding directory named "blog" from the current working directory of Node.
  const filePath = `Introduction`;
  const postDirectory = path.join(process.cwd(), "_posts");
  const fullPath = path.join(postDirectory, `${filePath}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");
  // const { data, content } = matter(postContent);

  // const mdxSource: any = await renderToString(content, {
  //   components,
  //   scope: data,
  //   mdxOptions: {
  //     remarkPlugins: [gfm],
  //     rehypePlugins: [slug],
  //   },
  // });

  // MDX text - can be from a local file, database, anywhere
  // const source = Introduction;
  const mdxSource = await renderToString(postContent, { components });
  return { props: { source: mdxSource } };
}
