"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

export default function Home() {

  let [isVideo, setIsVideo] = useState<boolean>(false)
  const [query, setQuery] = useState<string>("");

  return (
    <main>
      <div className="section-div w-full h-[500px] bg-[url('https://images.pexels.com/photos/17279373/pexels-photo-17279373/free-photo-of-istanbul-bahcekoy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center flex flex-col items-center justify-center gap-2 md:gap-4">
        <h1 className="max-w-[45rem] text-3xl font-bold">The best free stock photos, royalty free images & videos shared by creators.</h1>
        <div className="w-full md:w-[700px] h-[45px] px-2 bg-[var(--bg-primary)] rounded-full flex items-center justify-between">
          <IoMdSearch size={20} />
          <input
            className="w-[calc(100%-110px)] border-none outline-none bg-transparent"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="relative group">
            <span className="flex items-center">{isVideo ? "Videos" : "Images"}<MdKeyboardArrowDown /></span>
            <ul className="absolute -left-2 bg-[var(--bg-primary)] border-2 border-[var(--secondary-color)] rounded-md hidden group-hover:block">
              <li><span className="flex items-center my-1 mx-2 cursor-default" onClick={() => setIsVideo(false)}>Images</span></li>
              <li><span className="flex items-center my-1 mx-2 cursor-default" onClick={() => setIsVideo(true)}>Videos</span></li>
            </ul>
          </div>
        </div>
        <p className="text-base">"Capturing Moments, Creating Memories: Your Gateway to a Visual Symphony!"</p>
      </div>
    </main>
  )
}
