import Link from 'next/link'
import DesktopLinks from './DesktopLinks'

const Header = () => {
  return (
    <header className="px-6 w-full">
      <div className="pt-4 pb-5 mx-auto flex items-center justify-between max-w-7xl border-b md:pt-6 xl:pt-8 w-full">
        <Link
          href="/"
          className="text-sm font-light tracking-wide uppercase md:text-base lg:text-xl"
        >
          Sam<span className="font-bold">Selikoff</span>
        </Link>

        <DesktopLinks />
      </div>
    </header>
  )
}

export default Header
