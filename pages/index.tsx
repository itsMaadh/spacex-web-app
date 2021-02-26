import Title from "../components/common/Title";
import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";
import { gql } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import Card from "../components/common/Card";

const HISTORIES_QUERY = gql`
  {
    histories(limit: 3, offset: 1) {
      event_date_utc
      details
      title
      flight {
        mission_name
        details
        links {
          flickr_images
        }
      }
    }
  }
`;

type Props = {
  history: any;
  lottie: any;
};

export default function Home({ history, lottie }: Props) {
  console.log(history);
  return (
    <div>
      <Head>
        <title>SpaceX App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 content-center flex-col-reverse lg:h-screen">
        <div className="lg:order-last">
          <Player
            autoplay
            loop
            src={lottie}
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div className="flex items-center lg:justify-center lg:h-screen pb-10 lg:pb-44 lg:pt-0">
          <div>
            <h1 className="font-semibold text-5xl lg:text-7xl lg:leading-tight">
              The future of space technologies.
            </h1>
            <p className="text-gray-500 font-light text-2xl pt-5">
              Launch, land and Re-launch!
            </p>
          </div>
        </div>
      </div>
      <Title text="Previous launches" />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-4 pb-10 pt-5">
        {history.histories.map((pastHistory) => (
          <Card
            image={pastHistory.flight.links.flickr_images[2]}
            title={pastHistory.title}
            date={pastHistory.event_date_utc}
            key={pastHistory.title}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(props) {
  const apolloClient = initializeApollo();
  const data = await apolloClient.query({ query: HISTORIES_QUERY });
  const astronaut = await fetch(
    "https://assets6.lottiefiles.com/packages/lf20_ZQhQzO.json"
  );
  return { props: { history: data.data, lottie: await astronaut.json() } };
}
