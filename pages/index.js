import Head from 'next/head';
import Baner from '../components/Baner';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Baner />

      <main className="max-w-7xl max-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
}
