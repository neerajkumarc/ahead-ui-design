import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SiteFooter = () => {
    return (
        <section className="max-w-5xl mx-auto ">
            <hr className="h-px my-8 border-1 w-full bg-gray-700" />
            <div className="flex flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center justify-center">
                    <Image src={"/assets/logo.webp"} height={50} width={50} alt="logo" className="rounded-xl" />
                    <h1 className="text-[#633ff0] font-extrabold text-3xl">ahead</h1>
                </div>
                <div className="lg:flex gap-8 my-5">
                    <p className="flex gap-2 items-center justify-center"><span className="bg-green-300 p-2 rounded-full"><MapPin size={16} /></span>AuguststraBe 26, 10117 Berlin</p>
                    <p className="flex gap-2 items-center justify-center"><span className="bg-green-300 p-2 rounded-full"><Mail size={16} /></span>hi@ahead-app.com</p>
                </div>
                <Image src={"/assets/app-store.svg"} width={100} height={100} alt="app-store" className="w-auto h-10" />
                <p className="my-4 text-sm">&copy; {new Date().getFullYear()} Ahead app, All rights reserved</p>
            </div>
        </section>
    )
}

export default SiteFooter