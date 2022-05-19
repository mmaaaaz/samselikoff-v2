import { allBlogs, type Blog } from 'contentlayer/generated'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { BlogPost } from '@/components/Layout/Containers'

const BlogLayout = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(post)
  return <BlogPost post={post} />
}

export default BlogLayout

export async function getStaticPaths() {
  const paths: string[] = allBlogs.map((blog: Blog) => blog.slug)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post: Blog | undefined = allBlogs.find(
    (blog) => blog._raw.flattenedPath === `${params.slug}`
  )

  return {
    props: {
      post,
    },
  }
}
