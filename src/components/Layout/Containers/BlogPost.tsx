import { MDXLink, MDXPre } from '@/components/MDX'
import Head from 'next/head'
import Image from 'next/image'

export const MDXComponents: any = {
  Image,
  a: MDXLink,
  pre: MDXPre,
  // wrapper: Wrapper,
  // BlogNewsletterForm,
}

export const BlogPost = ({ post }: { post: any }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        {/* <meta name="description" content={post.summary} /> */}
      </Head>
    </>
  )
}
