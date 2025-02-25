"use client"

import Link from "next/link"
import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css'
import Image from "next/image"
import { usePathname } from "next/navigation"

const MainHeader = () => {
    const path = usePathname()
    return (
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image
                        priority
                        src={logoImg} 
                        alt="logo"
                    />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link 
                                href="/meals"
                                className={path.startsWith('/meals') ? classes.active: undefined} 
                            >
                                Browse Meals
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/community"
                                className={path.startsWith('/community') ? classes.active: undefined} 
                            >Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader