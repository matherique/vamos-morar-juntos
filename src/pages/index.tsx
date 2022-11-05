export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center ">
      <div className="flex flex-row gap-24 mt-32">
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">59</span>
          <span className="text-white uppercase text-5xl">Days</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">23</span>
          <span className="text-white uppercase text-5xl">Hours</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">59</span>
          <span className="text-white uppercase text-5xl">Minutes</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-red-800 text-9xl">59</span>
          <span className="text-white uppercase text-5xl">Seconds</span>
        </div>
      </div>
    </div>
  )
}
