import { A, Container, Lead, Spacer, Title } from '@/components/Ui'
import { interviews, talks } from '@/data'
import { IInterview, ITalk } from '@/types'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Talks: NextPage = () => {
  return (
    <>
      <Head>
        <title>Talks</title>
        <meta property="og:title" content="Talks" />
      </Head>

      <Container size="some">
        <Spacer size="xl" />

        <Title>Talks</Title>

        <Spacer size="lg" />

        <Lead>
          I love talking about my favorite technologies, my experience working
          on software teams, and lessons learned running open-source projects.
        </Lead>

        <Lead>
          <A href="mailto:sam@samselikoff.com">Contact me</A> if you think I'd
          be a good fit for your podcast, meetup or conference!
        </Lead>

        <div className="lg:flex lg:flex-wrap lg:-mx-4">
          {talks.map((talk) => (
            <div
              className="mt-12 md:mt-16 lg:mt-20 lg:w-1/2 lg:px-4"
              key={talk.url}
            >
              <Talk {...talk} />
            </div>
          ))}
        </div>

        <div className="mt-20 mb-32 md:mt-32">
          <Title>Interviews</Title>

          <div className="grid w-2/3 grid-cols-1 gap-16 mx-auto mt-16 md:gap-x-6 lg:gap-x-8 md:w-full md:grid-cols-2 lg:grid-cols-3">
            {interviews.map((interview) => (
              <div key={interview.url}>
                <Interview {...interview} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Talks

const Talk = ({
  title,
  image,
  imageHeight,
  imageWidth,
  presentedAt,
  url,
}: ITalk) => {
  return (
    <>
      <a href={url} className="flex items-center justify-center">
        <Image
          src={image}
          width={imageWidth}
          height={imageHeight}
          className="max-w-full rounded-lg"
          alt={title}
        />
      </a>
      <div className="leading-snug">
        <p className="mt-3 text-sm font-semibold text-gray-500 md:text-base lg:text-sm">
          {presentedAt}
        </p>
        <p className="text-lg font-semibold md:text-2xl lg:text-xl lg:mt-1">
          <a href={url}>{title}</a>
        </p>
      </div>
    </>
  )
}

const Interview = ({
  title,
  image,
  imageHeight,
  imageWidth,
  byline,
  url,
}: IInterview) => {
  return (
    <>
      <div>
        <a href={url} className="shadow flex items-center justify-center">
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            className="rounded"
            alt={title}
          />
        </a>
      </div>
      <div className="leading-snug">
        <p className="mt-3 text-sm font-semibold text-gray-500">{byline}</p>
        <p className="mt-1 text-lg font-semibold">
          <a href={url}>{title}</a>
        </p>
      </div>
    </>
  )
}
