import Link from "next/link"

const SharePage = () => {
    return (
        <>  
            <main>
                <h1>Share Page</h1>
                <p>
                    <Link href="/meals">Meals</Link>
                </p>
            </main>
        </>
    )
}

export default SharePage