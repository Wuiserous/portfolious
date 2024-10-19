import Image from "next/image";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";

export default function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left />
      <Middle />      
      <Right />
    </div>
  )
}
