import Link from "next/link"
import logoImg from '@/assets/logo.png'

const MainHeader = () => {
    return (
        <>
            <header>
                <Link href="/">
                    <img src={logoImg.src} alt="logo"></img>
                    NextLevel Food
                </Link>

                <nav>
                    <ul>
                    </ul>
                </nav>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
            </header>
        </>
    )
}

export default MainHeader