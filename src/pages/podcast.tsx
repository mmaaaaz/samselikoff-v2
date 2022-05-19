import { A, Container, Lead, Spacer, Title } from '@/components/Ui'
import { Podcasts } from '@/data'
import { IPodcast } from '@/types'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Podcast: NextPage = () => {
  return (
    <>
      <Head>
        <title>Podcast</title>
        <meta property="og:title" content="Podcast" />
      </Head>

      <Container size="some">
        <Spacer size="xl" />

        <Title>Podcast</Title>

        <Spacer size="lg" />

        <Lead>
          For more than two years I've used{' '}
          <A href="https://frontendfirst.fm/">Frontend First</A> to talk about
          whatever's going on in my day-to-day life doing frontend development,
          along with my co-host Ryan Toronto.
        </Lead>

        <Lead>
          While we originally focused on Ember.js, these days we talk about
          whatever's happening in the world of JavaScript UI development.
        </Lead>

        <Lead>Check out some of my favorite episodes below.</Lead>

        <div className="lg:mt-4 xl:mt-16">
          <ul className="lg:flex lg:flex-wrap lg:-mx-4">
            {Podcasts.map((podcast) => (
              <li className="mt-16 lg:w-1/2 lg:px-4" key={podcast.url}>
                <PodcastCard {...podcast} />
              </li>
            ))}
          </ul>

          <hr className="mt-16 border-a3" />

          <div className="mt-8 mb-24 text-base md:text-lg">
            <p>View the rest of the episodes on the show's website:</p>
            <p className="mt-4">
              <a
                className="font-medium text-blue-500 underline"
                href="https://frontendfirst.fm/"
              >
                → Frontend First
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Podcast

const PodcastCard = ({
  title,
  imageUrl,
  imageHeight,
  imageWidth,
  url,
  description,
}: IPodcast) => {
  return (
    <>
      <a href={url} className="block">
        <Image
          width={imageWidth}
          height={imageHeight}
          src={imageUrl}
          className="rounded-lg"
          alt={title}
        />
      </a>
      <h2 className="mt-4 text-lg font-semibold leading-snug text-a9 md:text-1-5xl lg:text-xl">
        <a href={url}>{title}</a>
      </h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2 md:mt-3">
        <a
          className="text-sm font-medium text-blue-600 md:text-base"
          href={url}
        >
          Play episode →
        </a>
      </p>
    </>
  )
}
