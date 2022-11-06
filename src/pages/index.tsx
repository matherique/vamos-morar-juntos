import dayjs from "dayjs"
import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import { MAGIC_DATE } from "@/constants"
import { counter } from "@/counter"
import Head from "next/head"

const target = dayjs(MAGIC_DATE)

type Props = {
  d: number
  h: number
  m: number
  s: number
}

function ClockNumber({ value, label }: { value: number, label: string }) {
  return <div className="flex flex-col text-center max-sm:rotate-90 max-sm:my-6">
    <span className="text-red-800 lg:text-9xl text-8xl">{String(value).padStart(2, '0')}</span>
    <span className="text-white uppercase lg:text-5xl text-2xl">{label}</span>
  </div>
}


export default function Home({ d, h, m, s }: Props) {
  const [days, setDays] = useState(d)
  const [hours, setHours] = useState(h)
  const [minutes, setMinutes] = useState(m)
  const [seconds, setSeconds] = useState(s)

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const now = dayjs()
      const [d, h, m, s] = counter(now, target)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [seconds])

  return (
    <div>
      <Head>
        <title>Vamos morar juntos - Matheus e Tainara ❤️</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Vamos morar juntos - Matheus e Tainara❤️" />
        <meta name="description" content="Contador de quanto tempo vai demorar para Matheus e Tainara morarem juntos 'sozinhos'" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vamosmorarjuntos.com/" />
        <meta property="og:title" content="Vamos morar juntos - Matheus e Tainara❤️" />
        <meta property="og:description" content="Contador de quanto tempo vai demorar para Matheus e Tainara morarem juntos 'sozinhos'" />
        <meta property="og:image" content="https://www.vamosmorarjuntos.com/us.png" />

        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⏳</text></svg>" />
      </Head>
      <div className="w-full h-screen bg-black flex justify-center ">
        <div className="lg:flex flex-row lg:gap-24 lg:mt-32">
          <ClockNumber value={days} label="days" />
          <ClockNumber value={hours} label="hours" />
          <ClockNumber value={minutes} label="minutes" />
          <ClockNumber value={seconds} label="seconds" />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetServerSideProps<Props> = async () => {
  const now = dayjs()
  const [d, h, m, s] = counter(now, target)

  return {
    props: { d, h, m, s },
  }
}