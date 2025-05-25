import Link from "next/link";

export default function TopBar() {
    // Icon also for the Peter's Barbershop?
    return (
        <div className="flex w-[100%] text-l py-2 justify-between bg-zinc-800 text-white dark:bg-gray-600 dark:text-zinc-100">
            <div className="w-48 px-4">
                <Link href="/">
                    <h3>Peter&apos;s Barbershop</h3>
                </Link>
            </div>
            <div className="">
                <Link href="/about" className="px-4">About</Link>
                <Link href="/services" className="px-4">Services</Link>
                <Link href="/contact" className="px-4 mr-2">Contact</Link>
            </div>
        </div>
    );
}
