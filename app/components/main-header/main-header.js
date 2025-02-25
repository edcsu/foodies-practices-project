import Link from "next/link"
import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css'
import Image from "next/image"
import NavLink from "./nav-link"

const MainHeader = () => {
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
                            <NavLink href="/meals" children="Browse Meals" />
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader