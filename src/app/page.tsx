// import /*Image,*/ { getImageProps } from "next/image";

export default function Home() {
    // <Image src="/barber-chair.png" alt="barber chair" width={100} height={100} />
    return (
        <div className="w-[100%] h-[100%]">
            <header className="flex justify-center text-9xl p-4 m-4">
                <h1>Peter&apos;s Barbershop</h1>
            </header>
            <main className="max-w-screen max-h-screen">
                <h2>main</h2>
                <div className="justify-center">
                    <p>content</p>
                </div>
            </main>
            <footer>footer</footer>
        </div>
    );
}
