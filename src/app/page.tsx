// import /*Image,*/ { getImageProps } from "next/image";

export default function Home() {
    return (
        <main className="max-w-screen max-h-screen flex justify-center items-center">
            <div className="bg-black rounded-2xl">
                <div className="m-4 p-8 text-white rounded-2xl" style={{
                    backgroundImage: `url(/brown-bg.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderRadius: "0.375rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    // opacity: 0.5
                }}>
                    <div className="flex items-center justify-center">
                        <div className="">
                            <h1>SNIP.</h1>
                            <h1>SHAVE.</h1>
                            <h1>CHAT.</h1>
                        </div>
                    </div>
                    <div>
                        <p>A Traditional Barber Shop</p>
                        <p>for Today&apos;s Gentlemen of Leisure</p>
                    </div>
                </div>
            </div>
        </main >
    );
}
