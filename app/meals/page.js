import Link from "next/link"

const MealsPage = () => {
    return (
        <>
            <main>
                <h1> Meals page</h1>
                <p>
                    <Link href="/meals/share">Share</Link>
                </p>
                <p>
                    <Link href="/community">community</Link>
                </p>
                <p>
                    <Link href="/meals/meal-1">Meal 1</Link>
                </p>
                <p>
                    <Link href="/meals/meal-2">Meal 2</Link>
                </p>
                <p>
                    <Link href="/meals/meal-3">Meal 3</Link>
                </p>
                <p>
                    <Link href="/meals/meal-4">Meal 4</Link>
                </p>
            </main>
        </>
    )
}

export default MealsPage