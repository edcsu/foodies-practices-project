import Link from "next/link"
import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css'

const MainHeader = () => {
    return (
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <img src={logoImg.src} alt="logo"></img>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader