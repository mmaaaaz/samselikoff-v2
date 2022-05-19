import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import { MDXLink, MDXPre } from '@/components/MDX'
import Image from 'next/image'
import { type Blog } from 'contentlayer/generated'

export const MDXComponents: any = {
  Image,
  a: MDXLink,
  pre: MDXPre,
  // wrapper: Wrapper,
  // BlogNewsletterForm,
}

const BlogPost = ({ post }: { post: Blog }) => {
  const MDXContent = useMDXComponent(post.body.code)

  console.log(post)

  return (
    <>
      <Head>
        <title>{post.title}</title>
        {/* <meta name="description" content={post.summary} /> */}
      </Head>

      <MDXContent components={MDXComponents} />
    </>
  )
}

export default BlogPost
