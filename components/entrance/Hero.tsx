import Image from "next/image";
import Window from "./Window";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* background image */}
      <Image
        src="/ars/images/museum_wall.png"
        alt=""
        fill
        className="object-cover"
      />

      {/* window */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-8">
        <Window />
      </div>
      
    </section>
  );
}
