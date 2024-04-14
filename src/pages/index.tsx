import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../../public/assets/logo.svg";
import Ton from "../../public/assets/ton.svg";
import BottomGrid from "../../public/assets/bottomGrid.png";
import Starfield from "react-starfield";
import $ from "jquery";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const imgElement = imgRef.current;
    if (imgElement) {
      const rect = imgElement.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
      const degrees = radians * (180 / Math.PI);

      console.log(degrees, " = degrees");

      imgElement.style.transform = `rotate(${degrees + 90}deg)`;
    }
  };

  return (
    <main
      className={`flex relative h-screen backgroundBox flex-col items-center justify-center gap-10 p-24 ${inter.className}`}
      onMouseMove={handleMouseMove}
    >
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Image
        src={BottomGrid}
        alt="bottom grid"
        className="absolute bottom-0 left-0 right-0 w-screen h-full opacity-50"
      />
      <div className="flex flex-col items-center gap-2">
        <Image
          src={Ton}
          alt="Logo"
        />
        <p>A P2E game on Ton Blockchain</p>
      </div>

      <div className="area">
        <div className="move-rect">
          <Image
            src={Logo}
            alt="Logo"
            ref={imgRef}
            style={{ transition: "transform 0.1s" }}
          />
        </div>
      </div>

      <button className="z-10 text-black PlayGame py-2 px-7 rounded font-medium text-sm ">
        Play Game
      </button>
      <div className="flex gap-8 items-center justify-around">
        <button className="button z-10 ">
          <span>X</span>
        </button>
        <button className="button z-10 ">
          <span>Telegram</span>
        </button>
      </div>
    </main>
  );
}
