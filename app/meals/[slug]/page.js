import Link from "next/link"

import classes from './page.module.css'
import Image from "next/image"

const MealPage = async ({ params}) => {
    const { slug } = await params
    
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill />
                </div>
                <div className={classes.headerText}>
                    <h1> Meal details</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${'EMAIL'}`}>NAME</a>
                    </p>
                    <p className={classes.summary}>SUMMARY</p>
                </div>
            </header>
            <main>
                <p className={classes.instrunctions} dangerouslySetInnerHTML={{ __html: '....'}} > {slug} </p>
            </main>
        </>
    )
}

export default MealPage