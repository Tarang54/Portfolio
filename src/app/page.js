"use client";

import "./globals.css";
import Image from "next/image";
// import Lottie from "lottie-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import MainImg from "./../assets/main_img.png";
import Lotti from "./../../public/lottie.json";

import "animate.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import OpeningScreen from "@/components/openingScreen";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <main>
      {!animationComplete && (
        <OpeningScreen onComplete={() => setAnimationComplete(true)} />
      )}
      {/* animate__animated animate__fadeInLeft customFadeInLeftMain */}
      {/* {animationComplete && ( */}
      <div className="min-h-screen bg-[#d8d8d8] flex-col justify-center w-screen overflow-hidden relative ">
        {animationComplete ? (
          <div
            className={`flex m-[20px] mx-[30px] items-center justify-between w-auto ${
              animationComplete ? "custom-fade-in-left" : ""
            }`}
          >
            <div
              className={`text-black font-semibold text-[26px] ${poppins.className}`}
            >
              <Link href="/">TARANG</Link>
            </div>
            <div className="text-black text-[16px] font-[600] flex gap-1">
              <Link href="/about">About,</Link>
              <Link href="/work">Work,</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        ) : (
          ""
        )}

        {animationComplete ? (
          <div
            className={`flex flex-col absolute top-1/3 right-[15%] ${
              animationComplete ? "custom-fade-in-left" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <rect
                width="35"
                height="35"
                transform="matrix(-1 0 0 1 35 0)"
                fill="url(#pattern0_89_84)"
                fillOpacity="0.75"
              />
              <defs>
                <pattern
                  id="pattern0_89_84"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_89_84"
                    transform="scale(0.00195312)"
                  />
                </pattern>
                <image
                  id="image0_89_84"
                  width="512"
                  height="512"
                  preserveAspectRatio="none"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeAHt3VuPdFlZB/AnHiIk4OFChHhjTEBRGRkGxTMHL4wfQMEPYIze+RFIjCZEb9EZMV6aoH4CY0y8EEO4MPHCBKNGCQPDwBxgJgIe2TCbqbe7q2qvXXudf28yqe6qVevwe1bv/6qe7uoI/wgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAYWeF1ELP/5R2B4ge+MiF+LiD+OiI9HxOci4quv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9kDxPeB/AQjg6gJ/6wu/+Be+V1plX2nx5t3iHvBDgNXjzwT+wAHAAcAesAfsgeJ74I/ED4HaAr/sC7/4F36Lr0bMyatke6DsHviV2hd/4xP4toj4rEOAQ4A9YA/YA8X2wPJWwK8TPwRaEPgdX/jFvvC9yir7Kos37xb3wFMtXPjNgcAi8IaI+KJDgEOAPWAP2AMzVKqLAAAD4ElEQVTZ98BXIuIHRQ+BlgR+2xd+9i/8Fl+JmJNXyPZA2T3wey1d+M2FwCLwLRHxVw4BDgH2gD1gD2TbA38XEd8hcgi0KLD8r4BP+uLP9sXvlVbZV1q8ebe0B/4jIt7Y4oXfnAisAj/gEOAA4BBoD9gDh+6BJfzftl5k3RJoWWD5TsBfuwAcegFo6ZWIuXhlbA+U2wPLt/298m858cztnsC3RsTyg4EvOgg4CNgD9oA9kLwHlp/2/13/z/9etrijI4HvjYjlfQKWP1zhVQMDe8AesAcu74HlTX6e9Kt+HaWcqV4V+PaI+KWIWP52wN9ExGci4j8dChyK7AF7YOI9sLzKX14c/X1E/GFE/Kp3+LuaJRoQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQINCBwP8Dh8jBJ41euBQAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            <div
              className={`text-[#272727] text-[24px] font-[500] ${poppins.className}`}
            >
              Designer & Developer
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="bg-[#272727] absolute left-0 top-3/5 rounded-r-[100px] w-[190px] h-[60px]">
          <div
            className={`relative flex items-center text-[14px] text-[#d8d8d8] w-[190px] h-[60px] pl-[10px] ${poppins.className}`}
          >
            <div>Based in India</div>
            <div className="bg-[#d8d8d8] flex justify-center items-center w-[50px] h-[50px] rounded-[100px] absolute right-[5px]">
              <Lottie
                animationData={Lotti}
                loop={true}
                style={{ width: "90px", height: "90px" }}
                className="absolute"
              />
            </div>
          </div>
        </div>

        <Image
          src={MainImg}
          alt="Tarang"
          className="absolute bottom-0 object-contain h-[90vh] w-full m-auto z-999 pr-[55px]"
          priority
        />

        {/* <div className="text-[140px] font-medium absolute bottom-[10px] leading-[140px] left-[20px] m-auto text-[#272727]">TARANG </div> */}
        {/* <div className="text-[140px] font-medium absolute bottom-[10px] leading-[140px] right-[20px] m-auto text-[#272727]">SULTANIA </div> */}
        {/* <div className="text-[140px] w-screen px-[20px] flex justify-between font-medium absolute bottom-[10px] gap-[5px] leading-[140px]  m-auto text-[#272727] animate__animated animate__fadeInLeft customFadeInLeftMain"> */}
        {animationComplete ? (
          <div
            className={`text-[140px] w-screen px-[20px] flex justify-between font-medium absolute bottom-[10px] gap-[5px] leading-[140px] m-auto text-[#272727] ${
              animationComplete ? "custom-fade-in-left" : ""
            }`}
          >
            <span>TARANG</span>
            <span>SULTANIA</span>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* )} */}
    </main>
  );
}
