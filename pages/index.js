import Head from 'next/head';
import Baner from '../components/Baner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  console.log(exploreData);
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
          {exploreData?.map(({ img, distance, location }) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
