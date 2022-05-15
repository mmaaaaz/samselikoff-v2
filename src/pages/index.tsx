import { Container, Lead, Spacer, Title } from '@/components/Ui'
import { GithubIcon, TwitterIcon, YoutubeIcon } from '@/components/Ui/Icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DisplayPicture from 'public/images/sam.jpeg'

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
      </Container>
    </>
  )
}

export default Home

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
