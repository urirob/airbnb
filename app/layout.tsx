import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Nunito} from "next/font/google";

import Navbar from "./components/navbar/Navbar"

import ClientOnly from "./components/ClientOnly";

// import Modal from "./components/modals/Modal"
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal"
import RentModal from "./components/modals/RentModal"
import SearchModal from "./components/modals/SearchModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Air Bnb",
  description: "Airbnb clone",
};

const font=Nunito({
  subsets:["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser=await getCurrentUser();


  


  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <SearchModal/>
          <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser={currentUser}/>

        </ClientOnly>
      <div className="pb-20 pt-28">

        {children}

      </div>

        </body>
    </html>
  );
}
