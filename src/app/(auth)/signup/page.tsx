import { IoPerson, IoPersonSharp } from "react-icons/io5";
import { MdEmail, MdWifiPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function page() {

  interface Input {
    type: string;
    name: string;
    placeHolder: string;
    icon: any;
  }

  const inputs: Input[] = [
    {
      type: "text",
      name: "name",
      placeHolder: "Your Name",
      icon: <IoPerson />
    },
    {
      type: "email",
      name: "email",
      placeHolder: "Your E-mail",
      icon: <MdEmail />
    },
    {
      type: "text",
      name: "username",
      placeHolder: "Your username",
      icon: <IoPersonSharp />
    },
    {
      type: "password",
      name: "cpassword",
      placeHolder: "Enter Password",
      icon: <MdWifiPassword />
    },
    {
      type: "password",
      name: "cpassword",
      placeHolder: "Confirm Password",
      icon: <MdWifiPassword />
    }
  ]

  return (
    <div className="section-div pt-[7rem] flex flex-col items-center">
      <h1 className="text-2xl font-bold">Welcome to Image-Influx</h1>
      <form action="" className="mt-8 flex flex-col gap-4 w-full md:w-[600px]">
        {inputs.map((input) => {
          return (
            <div className="flex items-center gap-1">
              {input.icon}
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeHolder}
                className="w-full bg-transparent outline-none border-b-2 border-white"
              />
            </div>
          )
        })
        }
        <Link href="/login" className=" self-center">Already have an account. <span className="underline">Login</span></Link>
        <button className="primary-btn w-[5rem] self-center">Signup</button>
        <span className="self-center">OR</span>
      </form>
      <button className="w-[9rem] px-4 py-2 mt-4 rounded-xl bg-[var(--secondary-color)] flex items-center self-center gap-1">Signip with <FcGoogle /></button>
    </div>
  )
}
