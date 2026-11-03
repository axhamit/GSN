import React, { FC } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@/utils'
import { MUIProvider } from '@/providers'
import 'slick-carousel/slick/slick.css'
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import { NextPageWithLayout } from '@/interfaces/layout'
// import 'slick-carousel/slick/slick-theme.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>GSN Foundation | Career, AI and Exam Preparation</title>
        <meta
          name="description"
          content="Explore career readiness, AI, and competitive exam preparation programmes from GSN Foundation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GSN Foundation" />
        <meta property="og:title" content="GSN Foundation | Career, AI and Exam Preparation" />
        <meta
          property="og:description"
          content="Explore career readiness, AI, and competitive exam preparation programmes from GSN Foundation."
        />
        <meta property="og:image" content="https://www.gsnfoundation.com/images/hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GSN Foundation | Career, AI and Exam Preparation" />
        <meta
          name="twitter:description"
          content="Explore career readiness, AI, and competitive exam preparation programmes from GSN Foundation."
        />
        <meta name="twitter:image" content="https://www.gsnfoundation.com/images/hero.png" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo_blue.png" />
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </CacheProvider>
  )
}

export default App
