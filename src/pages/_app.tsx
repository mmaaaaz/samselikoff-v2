/* eslint-disable react/jsx-key */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Root } from '@/components/Layout/Containers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Root>
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default MyApp
