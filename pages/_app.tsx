import type { AppProps } from 'next/app'
import './styles.css'
import { builder } from '@builder.io/react'
import '../components/Heading.tsx'

builder.init("f5329e4d268247c0a0f00e29aa17c788")

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
