import Head from "next/head";
import {Button} from "../components/Button/Button.js";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/teamwork.png";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className="flex flex-col items-center bg-pale-cerulean justify-center w-full flex-1 px-20 text-center">
        <Image src={logo} width={100} height={100} layout="fixed" />
        <h1 className="text-4xl font-bold my-20 text-white">jamii</h1>
        <Link href="/home">
          <Button text="Continuar" />
        </Link>
      </main>
    </div>
  );
}
