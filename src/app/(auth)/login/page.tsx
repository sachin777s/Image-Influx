import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { IoPerson } from "react-icons/io5"
import { MdWifiPassword } from "react-icons/md"

export default function page() {
  return (
    <div className="section-div pt-[7rem] flex flex-col items-center">
      <h1 className="text-2xl font-bold">Login to Image-Influx</h1>
      <form action="" className="mt-8 flex flex-col gap-4 w-full md:w-[600px]">
        <div className="flex items-center gap-1">
          <IoPerson />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="w-full bg-transparent outline-none border-b-2 border-white"
          />
        </div>
        <div className="flex items-center gap-1">
          <MdWifiPassword />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full bg-transparent outline-none border-b-2 border-white"
          />
        </div>
        <Link href="/signup" className=" self-center">You haven't an account. <span className="underline">Signup</span></Link>
        <button className="primary-btn w-[5rem] self-center">Login</button>
        <span className="self-center">OR</span>
      </form >
      <button className="w-[9rem] px-4 py-2 mt-4 rounded-xl bg-[var(--secondary-color)] flex items-center self-center gap-1">Signin with <FcGoogle /></button>
    </div >
  )
}
