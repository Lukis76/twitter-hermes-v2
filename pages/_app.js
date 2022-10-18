import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

import TimeAgo from 'javascript-time-ago'

import es from 'javascript-time-ago/locale/es-AR.json'

TimeAgo.addDefaultLocale(es)


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} >
      <Component {...pageProps} />
    </SessionProvider>
  )
}
