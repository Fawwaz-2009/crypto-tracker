import Head from 'next/head'
import {CoinsMainPageContainer} from '../features/coins';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
       <CoinsMainPageContainer/>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
       <p>Hakuan Matata</p>
      </footer>
    </div>
  )
}
