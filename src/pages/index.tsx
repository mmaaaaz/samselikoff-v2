import { A, Container, Lead, Spacer, Title } from '@/components/Ui'
import {
  Chevron,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/Ui/Icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BurlingtonSquare from 'public/images/burlington-square.jpeg'
import NewYork from 'public/images/new-york.jpeg'
import DisplayPicture from 'public/images/sam.jpeg'
import { ReactNode } from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sam Selikoff</title>
        <meta property="og:title" content="Sam Selikoff" />
      </Head>

      <Container size="some">
        <Spacer size="xl" />

        <Title>Hello!</Title>

        <Spacer size="lg" />

        <Lead>
          I'm Sam Selikoff, and since 2016 I've made a living teaching
          JavaScript UI development on the web.
        </Lead>
      </Container>

      <Container size="some">
        <div className="flex flex-col sm:flex-col-reverse">
          <div className="sm:mt-12 mt-6 block full-width sm:full-width-none">
            <Image
              src={DisplayPicture}
              alt="Sam Selikoff Display Picture"
              className="h-full w-full object-cover sm:rounded-lg object-top"
            />
          </div>

          <SocialLinks />
        </div>

        <div className="mt-16 md:text-lg lg:flex lg:flex-wrap lg:-mx-4">
          <Section>
            <SectionTitle link="/projects">Projects</SectionTitle>
            <SectionBody>
              <p>
                I'm currently working on{' '}
                <A href="https://miragejs.com/">Mirage JS</A>, an API mocking
                library that lets frontend developers build complete features
                without touching their backend APIs.{' '}
              </p>
              <p className="mt-6">
                I also run <A href="https://embermap.com/">embermap.com</A>{' '}
                where I make videos about design, development and testing using
                Ember.js, along with my friend{' '}
                <A href="https://twitter.com/ryantotweets">Ryan Toronto</A>.
              </p>
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle link="/podcast">Podcast</SectionTitle>
            <SectionBody>
              <p>
                Join me, Ryan + guests on a weekly podcast where we chat about
                all things JavaScript UI development!
              </p>
              <p className="mt-6">
                <A href="https://frontendfirst.fm/">
                  → Check out Frontend First
                </A>
              </p>
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle link="/talks">Talks & Interviews</SectionTitle>
            <SectionBody>
              <p>
                I've given several conference talks and talked about my open
                source work on a few podcasts.{' '}
                <A href="/talks">Check them out here.</A>
              </p>
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle link="/blog">Blog</SectionTitle>
            <SectionBody>
              <p>
                You can find my writing on <A href="/blog">my blog</A>. I write
                mostly about frontend web development.
              </p>
            </SectionBody>
          </Section>
        </div>
      </Container>

      <div className="mt-20 md:mt-32 lg:mt-48">
        <Container size="some">
          <Title size="sm">Life</Title>
          <Lead>
            I was born in upstate New York, lived in Florida for 13 years, and
            have since made my way back to the Northeast.
          </Lead>
          <Lead>
            I currently live in New York City + absolutely love it here!
          </Lead>
        </Container>
      </div>

      <div className="mx-auto mt-16 xl:max-w-6xl">
        <ImageCard
          src={NewYork}
          title="New York City"
          date="2015-Present"
          width={5567}
          height={3132}
        />
        <div className="flex xl:mt-10 xl:-mx-6">
          <div className="w-1/2 xl:px-6">
            <ImageCard
              src={BurlingtonSquare}
              title="Burlington"
              date="2014–2015"
              width={2448}
              height={2448}
            />
          </div>
          <div className="w-1/2 xl:px-6">
            <ImageCard
              src="/images/boston-square.jpg"
              title="Boston"
              date="2010–2014"
              width={3456}
              height={3456}
            />
          </div>
        </div>
      </div>

      <div className="mt-16" />
    </>
  )
}

export default Home

function ImageCard({ src, title, date, width, height }: any) {
  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        width={width}
        height={height}
        alt={title}
      />
      <div className="absolute bottom-0 w-full py-2 pl-3 text-primary md:pl-4 md:py-4 xl:bg-none xl:static xl:px-0">
        <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
          {title}
        </p>
        <time className="text-xs sm:text-sm text-lead">{date}</time>
      </div>
    </div>
  )
}

function Section({ children }: { children: ReactNode }) {
  return (
    <div className="lg:w-1/2 lg:px-4">
      <section className="mt-10 md:mt-16 lg:mt-20">{children}</section>
    </div>
  )
}

function SectionTitle({
  link,
  children,
}: {
  link: string
  children: ReactNode
}) {
  const T = ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl font-semibold text-primary md:text-2xl lg:text-2-5xl">
      {children}
    </h2>
  )

  if (link) {
    return (
      <Link href={link} className="inline-block">
        <T>
          {children}
          <Chevron className="w-4 h-4 ml-1 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </T>
      </Link>
    )
  } else {
    return <T>{children}</T>
  }
}

function SectionBody({ children }: { children: ReactNode }) {
  return <div className="mt-2 md:mt-4 lg:mt-6">{children}</div>
}

const SocialLinks = () => {
  const classes = 'w-5 mr-2'

  const data = [
    {
      label: 'Twitter',
      href: 'https://twitter.com/samselikoff',
      icon: <TwitterIcon className={classes} />,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/user/samselikoff',
      icon: <YoutubeIcon className={classes} />,
    },
    {
      label: 'Github',
      href: 'https://github.com/samselikoff',
      icon: <GithubIcon className={classes} />,
    },
  ]

  return (
    <ul className="flex gap-8 mt-5 items-center justify-center text-xs font-medium sm:justify-start smm:text-sm lg:mt-8">
      {data.map(({ label, href, icon }) => {
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-icon-hover text-icon-primary justify-center"
            >
              {icon} {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
