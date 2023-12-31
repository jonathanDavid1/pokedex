import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center gap-6">
            <div className="w-[300px] h-[300px] ">
                <img className="border-red-600 border-[2px]" src="./images/pikachu.jpg" alt="" />
            </div>
            <article className="text-center font-Montse font-bold text-2xl text-fire-txt grid gap-4">
                <h1>ERROR 404</h1>
                <p className="font-Inter font-semibold text-fire-txt">Page not found</p>
            </article>
            <Link to={'/'}>
                <button className="underline underline-offset-4 cursor-pointer">Go home</button>
            </Link>
        </section>
    )
}

export default Page404