import { config } from 'site.config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const DesktopLinks = () => {
  const { asPath } = useRouter()

  return (
    <ul className="flex items-center justify-between gap-6 lg:text-base xl:text-lg lg:gap-8">
      {config.links.map(({ href, label }) => {
        return (
          <li key={label}>
            <Link
              href={href}
              className={clsx(
                'hover:text-link-active',
                asPath === href ? 'text-link-active' : 'text-link-base'
              )}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DesktopLinks
