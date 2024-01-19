import AppInfo from "@/components/main/AppInfo";
import Content from "@/components/main/Contact";
import Yuni from "@/components/main/Yuni";
import Persons from "@/components/main/Persons";
import Universtys from "@/components/main/Universtys";
import Image from "next/image";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar/>
        <Yuni />
        <AppInfo/>
        <Universtys />
        <Persons />
        <Content/>
        <Footer/>
        <StarsCanvas/>
      </div>
    </main>
  );
}
