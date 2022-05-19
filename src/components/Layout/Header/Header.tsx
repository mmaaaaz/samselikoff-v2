import Link from 'next/link'
import ThemeSwitcher from '../ThemeSwitcher'
import DesktopLinks from './DesktopLinks'

const Header = () => {
  return (
    <header className="px-6 w-full">
      <div className="pt-4 pb-5 mx-auto flex items-center justify-between max-w-7xl md:border-b border-b-a2 md:pt-6 xl:pt-8 w-full">
        <Link href="/">
          <a className="text-sm font-light uppercase md:text-primary lg:text-xl">
            Sam<span className="font-bold">Selikoff</span>
          </a>
        </Link>

        <DesktopLinks />

        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
