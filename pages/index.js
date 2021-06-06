import Weather from "../components/weather";
import Head from 'next/head'

export default function Home() {

  

  return (
    <div>
      <Head>
        <title> Weather App  </title>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" >
        </meta>


        
      </Head>
      <Weather />
    </div>
  );
}
