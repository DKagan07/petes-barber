import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    // maybe add opacity? 'dark:opacity-90'
    return (
        <div className="flex w-[100%] bg-zinc-800 text-white dark:bg-black dark:text-zinc-100">
            <div className="flex middle w-[100%] text-l py-9 justify-between items-center bg-zinc-800 text-white dark:bg-black dark:text-zinc-100 m-5 border-y-2 border-y-white">
                <div className="flex ml-[15%] items-center">
                    <Link href="/">
                        <Image
                            src="/modern-barbershop-pole.png"
                            alt="Modern barbershop pole"
                            height={100}
                            width={100}
                        />
                    </Link>
                    <div className="w-1vw h-1vh px-4">
                        <Link className="align-middle" href="/">
                            <div className="inline-block">
                                <h3 className="text-4xl">Peter&apos;s Barber Shop</h3>
                                <p className="text-center text-xl">Est. 1927</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="mr-[15%]">
                    <Link href="/about" className="px-4 text-2xl hover:font-bold">About</Link>
                    <Link href="/press" className="px-4 text-2xl hover:font-bold">Press</Link>
                    <Link href="/services" className="px-4 text-2xl hover:font-bold">Services</Link>
                    <Link href="/contact" className="px-4 mr-2 text-2xl hover:font-bold">Contact</Link>
                </div>
            </div>
        </div>
    );
}
