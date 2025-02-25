const { default: Link } = require("next/link")

const MealPage = async ({ params}) => {
    const { slug } = await params
    
    return (
        <>
            <main>
                <h1> Meal details</h1>
                <p> {slug} </p>
                <p>
                    <Link href="/meals">Meals</Link>
                </p>
            </main>
        </>
    )
}

export default MealPage