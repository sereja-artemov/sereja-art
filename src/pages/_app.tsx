import '@/styles/utils/normalize.css'
import '@/styles/_variables.scss'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
