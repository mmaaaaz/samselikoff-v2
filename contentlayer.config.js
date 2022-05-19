import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import highlight from 'rehype-highlight'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

import readingTime from 'reading-time'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the blog post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/Blogs',
  documentTypes: [Blog],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // highlight,
      // rehypePrismPlus,
      // rehypeSlug,
      // rehypeCodeTitles,
      // rehypePrism,
      // rehypeAutolinkHeadings,
      // rehypeAccessibleEmojis,
    ],
  },
})
