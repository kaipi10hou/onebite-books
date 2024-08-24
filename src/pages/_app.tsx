import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router"

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();

    const buttonClick = () => {
        router.push("/books/456")
    }

    return (
        <>
            <header>
                <Link href={'/'}>home</Link>
                &nbsp;
                <Link href={'/search'}>search</Link>
                &nbsp;
                <Link href={'/books/123'}>books/123</Link>
                &nbsp;
                <button onClick={buttonClick}>라우터버튼</button>
            </header>
            <Component {...pageProps} />
        </>
    );
}
