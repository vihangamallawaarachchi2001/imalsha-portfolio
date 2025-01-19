'use client'

import { useEffect, useState } from "react"
import { ChartNoAxesColumn, X } from 'lucide-react';
import Link from "next/link";

export default function Navbar(){
    const [location, setLocation] = useState(''); 
    const [toggle, setToggle] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    const getCurrentLocation = () => {
       setLocation(window.location.hash.substring(1));
    }

    useEffect( () => {

        const handleResize = () => {
            const width = window.innerWidth;
            if (width <768 ) {
                setToggle(false)
                setIsMobile(true)
            }else{
                setToggle(true)
                setIsMobile(false)
            }
            console.log(toggle, isMobile);
        }
        window.addEventListener('resize', handleResize)
        handleResize();
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [])

    useEffect( () => {
        getCurrentLocation();
        window.addEventListener('hashchange', getCurrentLocation)
        return () => {
            window.removeEventListener('hashchange', getCurrentLocation)
        }
    })

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <nav className="relative w-full text-center flex items-center justify-center gap-2 bg-transparent flex-col z-50">
            <ChartNoAxesColumn className={`absolute top-2 right-2 text-white rotate-90 ${!toggle && isMobile ? "bloc animate-fadeIn" : "hidden"}`} onClick={handleToggle}  size={40}/>
            <X className={`fade-in-0 absolute top-2 right-2 text-white rotate-90 ${toggle && isMobile ? "block animate-fadeIn" : "hidden"}`} onClick={handleToggle} size={40} />
            { isMobile && (
                <nav className={` text-xl ${toggle ? "absolute flex-col flex animate-slideDown top-14" : "absolute -top-20 animate-slideUp"} bg-[#f1f1f1] text-[#1f1f1f] w-full gap-3 rounded-md p-5 font-semibold`}>
                <Link onClick={() => {getCurrentLocation()}} href='#about' className={`${location === 'about' && "underline font-extrabold"}`}>About</Link>
                <Link onClick={() => {getCurrentLocation()}} href='#work' className={`${location === 'work' && "underline font-extrabold"}`}>Work</Link>
                <Link onClick={() => {getCurrentLocation()}} href='#contact' className={`${location === 'contact' && "underline font-extrabold"}`}>Contact</Link>
            </nav>
            )}
            { !isMobile && (
                <nav className={`w-full flex items-center justify-center gap-7 h-16 text-2xl`}>
                <Link onClick={() => {getCurrentLocation()}} href='#about' className={`${location === 'about' && "underline font-extrabold"}`}>About</Link>
                <Link onClick={() => {getCurrentLocation()}} href='#work' className={`${location === 'work' && "underline font-extrabold"}`}>Work</Link>
                <Link onClick={() => {getCurrentLocation()}} href='#contact' className={`${location === 'contact' && "underline font-extrabold"}`}>Contact</Link>
            </nav>
            )}
        </nav>
    )
}