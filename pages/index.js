import Head from 'next/head'
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCards from "../components/LargeCards";
import MediumCards from "../components/MediumCards";
import SmallCards from "../components/SmallCards";
import DiscoverCards from "../components/DiscoverCards";

export default function Home({ exploreData, CardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* main*/}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pl-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }) => (
              <SmallCards
                key={img}
                location={location}
                img={img}
                distance={distance}
              />
            ))}
          </div>
        </section>

        {/* large Cards */}
        <LargeCards
          img="/lg-card.jpg"
          title="Not sure where to go? Perfect."
          buttonText="I'm flexible"
        />

        {/* section -2 */}
        <section>
          <h2 className="text-4xl font-semibold py-8"> Live Anywhere</h2>
          <div className="MediumCads flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {CardData?.map(({ img, title }) => (
              <MediumCards key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* section -2 */}
        <section>
          <h2 className="text-4xl font-semibold py-8"> Discover Experiences</h2>
          <div className="MediumCads flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {CardData?.map(({ img, title }) => (
              <DiscoverCards key={img} img={img} title={title} />
            ))}
          </div>
        </section>        
        
        {/* large Cards */}
        <LargeCards
          img="/hosting.jpg"
          title="Try Hosting"
          description="Earn extra income and unlock new opportunities by sharing your space"
          buttonText="Get inspired"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

//! for small card
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    //! get response from it and shore in json
    (response) => response.json()
  );  
  //! for  large card with
  const CardData = await fetch("https://links.papareact.com/zp1").then(
    (response) => response.json()
  );
  return {
    // pass the data to the React
    props: {
      exploreData,
      CardData,
    },
  };
}
