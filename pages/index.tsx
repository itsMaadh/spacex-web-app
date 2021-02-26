import Title from "../components/common/Title";
import Head from "next/head";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {
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
            src="https://assets6.lottiefiles.com/packages/lf20_ZQhQzO.json"
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
    </div>
  );
}
