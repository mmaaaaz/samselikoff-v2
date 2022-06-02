import { Container, Spacer, Title } from '@/components/Ui'
import type { NextPage } from 'next'
import Head from 'next/head'

const BlogPage: NextPage = ({ Blogs }: any) => {
  console.log(Blogs)

  return (
    <>
      <Head>
        <title>Blog - Sam Selikoff</title>
        <meta property="og:title" content="Blog - Sam Selikoff" />
      </Head>

      <div className="pb-20">
        <Container size="some">
          <Spacer size="xl" />

          <Title>Blog</Title>

          <ul className="mt-12 leading-snug">
            {/* {allBlogs.map(({ slug, title }) => (
              <li className="mt-6 md:mt-10" key={slug}>
                <Link href={slug}>
                  <a className="inline-block">
                    <h2 className="mt-1 text-lg font-semibold md:text-2xl">
                      {title}
                    </h2>
                  </a>
                </Link>
              </li>
            ))} */}
          </ul>
        </Container>
      </div>
    </>
  )
}

export default BlogPage

export async function getStaticProps() {
  return { props: { Blogs: [] } }
}
