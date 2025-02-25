import { Suspense } from "react"
import Link from "next/link"

import classes from './page.module.css'
import { getMeals } from "@/lib/meals"
import MealsGrid from "../components/meals/meals-grid"

export const Meals = async () => {
    const meals = await getMeals()    
    return <MealsGrid meals={meals} />
}

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
                <Suspense fallback={(<p className={classes.loading}>
                    Fetching meals....
                    </p>)}
                >
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

export default MealsPage