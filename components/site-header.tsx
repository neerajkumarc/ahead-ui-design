import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const SiteHeader = (props: Props) => {
    return (
        <header className="sticky z-50 top-0 w-full border-border/40 bg-background overflow-hidden">
            <nav className='flex justify-between items-center max-w-5xl m-auto p-4 px-8'>
                <Image src={'/assets/logo.webp'} width={50} height={50} alt='ahead_logo' className='rounded-lg w-auto h-auto' />
                <div className='hidden lg:flex gap-10 font-bold'>
                    <Link href={"#"}>Emotions</Link>
                    <Link href={"#"}>Manifesto</Link>
                    <Link href={"#"}>Self awareness test</Link>
                    <Link href={"#"}>Work With Us</Link>
                </div>
                <Button className='rounded-3xl'>Download app</Button>
            </nav>
        </header>
    )
}

export default SiteHeader