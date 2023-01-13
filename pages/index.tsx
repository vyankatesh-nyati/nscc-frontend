
import Head from "next/head";
import About from "../Components/AboutNSCC/About";
import ClubActivities from "../Components/ClubActivites/ClubActivities";
import Footer from "../Components/Footer/Footer";

import Landing from "../Components/HomePage/Landing";

// import { Inter } from '@next/font/google'
import { auth } from "../firebase";

import Header from  "../Components/Header/Header"
import { useState, useEffect } from "react";
// const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [user, setUser] = useState(null);


 
  return (
    <>
      <Head>
        <title>NSCC PCCOE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        <About />
        <ClubActivities />
        <Footer />
      </main>
   
    </>
  );
}
