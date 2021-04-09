import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import DefaultLayout from '../components/DefaultLayout'

import { Alert, Typography } from '@supabase/ui'
import ReactMarkdown from 'react-markdown'

const components = { Alert }

export default function Home({ source, frontmatter, toc }: any) {
  const gfm = require('remark-gfm')

  const content = hydrate(source, { components })

  const TableOfContents = toc && (
    <div className="toc">
      <Typography.Title level={5}>Contents</Typography.Title>
      <ReactMarkdown plugins={[gfm]}>{toc.content}</ReactMarkdown>
    </div>
  )

  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 container px-0 lg:py-8 mx-auto lg:gap-16">
        <article className="col-span-12 lg:col-span-9 xl:col-span-7">
          <Typography.Title>{frontmatter.title}</Typography.Title>
          <Typography.Title level={3}>{frontmatter.description}</Typography.Title>
          <Typography>{content}</Typography>
        </article>
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2 col-start-11">
          {TableOfContents}
        </div>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  // plugins for next-mdx-remote
  const gfm = require('remark-gfm')
  const slug = require('rehype-slug')

  // table of contents extractor
  const toc = require('markdown-toc')

  //Finding directory named "blog" from the current working directory of Node.
  const filePath = `Introduction`
  const postDirectory = path.join(process.cwd(), '_posts')
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
      toc: toc(content, { maxdepth: 3 }),
    },
  }
}
