import { useEffect } from 'react'
import fs from 'fs'
import path from 'path'

import Head from 'next/head'
// import styles from "../styles/Home.module.css";÷
// import Introduction from "./../_posts/Introduction.mdx";
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import { getAllPostSlugs, getPostdata } from '../../lib/posts'

// import Heading from "~/../../components/heading";
// import Header from "~/../../components/Header";
import DefaultLayout from '~/../../components/DefaultLayout'

import { Button, IconAlertCircle, IconEdit, IconGitHub, Space, Typography } from '@supabase/ui'

// import { getPostdata } from "../lib/posts";
import ComponentIndex from '../../components/ComponentIndex'
import CodeSample from '../../components/CodeSample'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ComponentProps from '~/components/ComponentProps'

// import ButtonSample from "../../_components/button/sample";

const components = { CodeSample, ComponentProps, ...ComponentIndex }

export default function Home({ source, frontmatter, toc }: any) {
  const gfm = require('remark-gfm')

  const content = hydrate(source, { components })

  const TableOfContents = toc && (
    <div className="toc">
      <Typography.Title level={5}>Contents</Typography.Title>
      <ReactMarkdown plugins={[gfm]}>{toc.content}</ReactMarkdown>
    </div>
  )

  useEffect(() => {
    if (typeof document !== undefined && document) {
      const container = document.querySelector('main')
      container?.scroll(0, 0)
    }
  })

  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 container px-0 lg:py-8 mx-auto lg:gap-16">
        <article className="col-span-12 lg:col-span-9 xl:col-span-7">
          <Typography.Title>{frontmatter.title}</Typography.Title>
          {/* <Typography.Title level={3}>
            {frontmatter.description}
          </Typography.Title> */}
          <Typography.Text>
            <div className="my-8 text-sm">
              <div className="flex md:items-center  space-y-2 flex-col md:flex-row md:space-y-0 md:space-x-3">
                <a
                  href={`https://github.com/supabase/ui/tree/master/src/components/${frontmatter.title}/${frontmatter.title}.tsx`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button type="default" iconRight={<IconGitHub />}>
                    View source
                  </Button>
                </a>

                <a
                  href="https://github.com/supabase/ui/issues/new/choose"
                  style={{ textDecoration: 'none' }}
                >
                  <Button type="default" iconRight={<IconAlertCircle />}>
                    Report an issue
                  </Button>
                </a>

                <a
                  href={`https://github.com/supabase/supabase-ui-web/tree/master/_components/${frontmatter.title.toLowerCase()}/index.mdx`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button type="dashed" iconRight={<IconEdit />}>
                    Edit this page
                  </Button>
                </a>
              </div>
            </div>
          </Typography.Text>
          {/* <Header img={frontmatter.img} /> */}
          <div className="py-0">
            <Typography>{content}</Typography>
          </div>
        </article>
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2 col-start-11">
          {TableOfContents}
        </div>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs('_components')
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  // plugins for next-mdx-remote
  const gfm = require('remark-gfm')
  const slug = require('rehype-slug')

  // table of contents extractor
  const toc = require('markdown-toc')

  //Finding directory named "blog" from the current working directory of Node.
  const filePath = `${params.slug}/index`
  const postDirectory = path.join(process.cwd(), '_components')
  const fullPath = path.join(postDirectory, `${filePath}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  const mdxSource: any = await renderToString(content, {
    components,
    scope: data,
    mdxOptions: {
      remarkPlugins: [gfm],
      rehypePlugins: [slug],
    },
  })

  return {
    props: {
      source: mdxSource,
      frontmatter: {
        ...data,
      },
      toc: toc(content, { maxdepth: 2 }),
    },
  }
}
