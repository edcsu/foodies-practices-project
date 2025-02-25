import Link from "next/link"

const CommunityPage = () => {
    return (
        <>
            <main>
                <h1>community page</h1>
                <p>
                    <Link href="/meals">Meals</Link>
                </p>
            </main>
        </>
    )
}

export default CommunityPage