import Image from "next/image";
import {Nav} from "@/app/Sections/Nav"
import {Header} from "@/app/Sections/Home"

export default function Home() {
  return (

    <div className="container">
      <Nav />
      <Header/>
    </div>
  );
}
