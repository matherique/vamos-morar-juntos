import dayjs from "dayjs"
import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import { MAGIC_DATE } from "@/constants"
import { counter } from "@/counter"

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
    <div className="w-full h-screen bg-black flex justify-center ">
      <div className="lg:flex flex-row lg:gap-24 lg:mt-32">
        <ClockNumber value={days} label="days" />
        <ClockNumber value={hours} label="hours" />
        <ClockNumber value={minutes} label="minutes" />
        <ClockNumber value={seconds} label="seconds" />
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