import { A, Container, Lead, Spacer, Title } from '@/components/Ui'
import { currentProjects, pastProjects } from '@/data'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="Projects" />
      </Head>

      <Container size="some">
        <Spacer size="xl" />

        <Title>Projects</Title>

        <Spacer size="lg" />

        <Lead>
          My main open source project is{' '}
          <A href="https://miragejs.com/">Mirage JS</A>, and I'm currently
          working on bringing it from Ember to the wider JavaScript ecosystem.
        </Lead>

        <Lead>
          The rest of my time is spent teaching UI development through videos on
          EmberMap and YouTube. I also run in-person trainings and do remote
          mentoring for a handful of frontend teams.
        </Lead>

        {/*  */}

        <div className="md:mt-4 ">
          <div className="md:flex md:-mx-4">
            {currentProjects.map(({ href, image, alt }) => {
              return (
                <ProjectCard key={href} href={href} image={image} alt={alt} />
              )
            })}
          </div>

          <div className="mt-16 mb-32 md:mt-24">
            <p className="text-2xl font-semibold md:text-2xl">Previous work</p>

            <div className="flex flex-wrap mt-4 -mx-2">
              {pastProjects.map(({ href, label }) => {
                return <PastProjectCard key={label} href={href} label={label} />
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Projects

const ProjectCard = ({
  href,
  image,
  alt,
}: {
  href: string
  image: any
  alt: string
}) => (
  <div className="mt-12 md:w-1/2 md:mx-4">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={alt} className="rounded-lg shadow-lg" />
    </a>
  </div>
)

const PastProjectCard = ({ href, label }: { href: string; label: string }) => (
  <div className="w-full px-2 md:w-1/3">
    <a
      href={href}
      className="flex items-center justify-center h-24 px-4 mt-4 font-medium leading-snug text-center text-a6 bg-primary rounded shadow-a3 shadow hover:text-lead"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>{label}</p>
    </a>
  </div>
)
