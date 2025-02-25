import Link from "next/link"

import classes from './page.module.css'
const MealsPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1> 
                    Delicious meals, created{' '}
                    <span className={classes.highlight}> by you</span>
                </h1>
                <p>Chooose youfav recipe. Its easy and fun</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your fav recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
            </main>
        </>
    )
}

export default MealsPage