import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { MAGIC_DATE } from "../constants"
import { counter } from "../counter"

const target = dayjs(MAGIC_DATE)

export default function Home() {
  const [days, setDays] = useState(59)
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(59)
  const [seconds, setSeconds] = useState(59)

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
      <div className="lg:flex flex-row gap-24 mt-32">
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">{days}</span>
          <span className="text-white uppercase text-5xl">Days</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">{hours}</span>
          <span className="text-white uppercase text-5xl">Hours</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">{minutes}</span>
          <span className="text-white uppercase text-5xl">Minutes</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">{seconds}</span>
          <span className="text-white uppercase text-5xl">Seconds</span>
        </div>
      </div>
    </div>
  )
}
