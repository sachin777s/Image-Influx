"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "./favicon.ico"
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import { BsPersonCircle } from "react-icons/bs";

export default function Navbar() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    interface Route {
        name: string;
        path: string
    }

    const exploreRoutes: Route[] = [
        {
            name: "Popular",
            path: "/"
        },
        {
            name: "Videos",
            path: "/"
        },
        {
            name: "Images",
            path: "/"
        }
    ]
    const profileRoutes: Route[] = [
        {
            name: "Profile",
            path: "/"
        },
        {
            name: "Collections",
            path: "/"
        },
        {
            name: "Settings",
            path: "/"
        },
        {
            name: "Logout",
            path: "/"
        }
    ]
    return (
        <nav className='w-full h-[65px] px-2 md:px-4 flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Image className='w-8 h-8 md:h-10 md:w-10' height={40} width={40} src={Logo} alt='...' />
                <span className='hidden sm:block text-xl md:text-2xl'>Image-Influx</span>
            </div>
            <div className='flex items-center gap-2 md:gap-4'>
                <button className='relative group'>
                    <span className='flex items-center'>Explore <span className=" transition-transform duration-150 group-hover:rotate-180"><MdKeyboardArrowDown size={20} /></span> </span>
                    <ul className='py-1 md:py-2 bg-[var(--secondary-color)] absolute top-full left-0 hidden group-hover:flex hover:flex flex-col rounded-md border border-[var(--secondary-color)] shadow-[0_0_12px_-3px_var(--secondary-color)]'>
                        {
                            exploreRoutes.map((route) => {
                                return <li><Link className='px-4 py-1' href={route.path}>{route.name}</Link></li>
                            })
                        }
                    </ul>
                </button>
                {
                    isLogin && <div className='relative group'>
                        <span className='flex items-center'><BsPersonCircle size={30} /><MdKeyboardArrowDown className="transition-transform duration-150 group-hover:rotate-180" size={20} /></span>
                        <ul className='py-1 md:py-2 bg-[var(--secondary-color)] absolute right-0 rounded-md border border-[var(--secondary-color)] hidden group-hover:block'>
                            {
                                profileRoutes.map((route) => {
                                    return <li><Link className='px-4 py-1' href={route.path}>{route.name}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                }
                <button className='primary-btn'>{isLogin ? "Upload" : "Login"}</button>
            </div>
        </nav>
    )
}
