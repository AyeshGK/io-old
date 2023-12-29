import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionQuote from "./SectionQuote";
import AboutMe from "./AboutMe";
import InterestedOn from "./InterestedOn";

export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      <AboutMe />
      <InterestedOn />
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </div>
  )
}
