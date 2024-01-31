import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Header";
import Navigationopp from "@/Components/Navigationopp";
import PlacedStudent from "@/Components/PlacedStudent";
import Studentvoices from "@/Components/Studentvoices";
import Companyverification from "@/Components/Companyverification";
import Mediapresence from "@/Components/Mediapresence";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header/> 
    <Navigationopp/>
    <PlacedStudent/>
    <Studentvoices/>
    <Companyverification/>
    <Mediapresence/> 
    </>
      );
}
