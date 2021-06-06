import Weather from "../components/weather";
import Head from 'next/head'

export default function Home() {

  

  return (
    <div>
      <Head>
        <title> Weather App  </title>
      </Head>
      <Weather />
    </div>
  );
}
