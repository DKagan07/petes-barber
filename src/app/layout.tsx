import type { Metadata } from "next";
import "./globals.css";
import TopBar from "../../utils/topbar";
import { getImageProps } from "next/image";

export const metadata: Metadata = {
    title: "Peter's Barbershop",
    description: "Peter's Barbershop",
};

function getBackgroundImage(srcSet = '') {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 1920, height: 1080, src: "/barber-chair.png" })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = {
        height: '100vh',
        width: '100vw',
        backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    // className={`${geistSans.variable} antialiased`}

    return (
        <html lang="en">
            <body style={style}>
                <TopBar />
                {children}
            </body>
        </html>
    );
}
