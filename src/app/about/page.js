// About.jsx
import Image from "next/image";
import BgImg from "./../../assets/bg_img.JPG";
import "./about.css";
import { Poppins } from "next/font/google";
import Link from "next/link";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function About() {
  return (
    <section className="about-section max-w-screen min-h-screen bg-[#272727]">
      <div className="relative w-full h-screen">
        
        <div className="absolute w-full h-screen bg-black opacity-10"></div>
        <div
          className={` absolute w-full flex p-[20px]  items-center justify-between `}
        >
          <div
            className={`text-[#000] font-semibold text-[26px] flex justify-center items-center gap-2 ${poppins.className}`}
          >
            {/* <Link href="/">TARANG</Link> */}
            <svg
              className="nav-logo__rotate colorMobile"
              width="30"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 12L5.61501 20.2027C5.11281 20.7653 4.23154 20.7803 3.72078 20.2572C3.21795 19.7423 3.24334 18.879 3.79721 18.3849C6.53142 16.2566 9.26566 14.1283 11.9999 12Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M11.9999 11.9999L1.68496 13.2852C0.932055 13.3279 0.298262 12.7154 0.306974 11.9844C0.315539 11.2647 0.943908 10.6723 1.68496 10.7145C5.12328 11.143 8.56161 11.5714 11.9999 11.9999Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M11.9999 11.9999L3.79723 5.61501C3.23466 5.11281 3.21962 4.23154 3.74269 3.72078C4.25764 3.21795 5.12089 3.24334 5.61503 3.79721C7.74334 6.53142 9.87162 9.26566 11.9999 11.9999Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M11.9999 11.9999L10.7145 1.68496C10.6718 0.932055 11.2843 0.298262 12.0154 0.306974C12.735 0.315539 13.3275 0.943908 13.2852 1.68496C12.8568 5.12328 12.4283 8.56161 11.9999 11.9999Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M11.9999 12L18.3848 3.79735C18.887 3.23478 19.7682 3.21974 20.279 3.74282C20.7818 4.25776 20.7565 5.12102 20.2026 5.61515C17.4684 7.74346 14.7341 9.87174 11.9999 12Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M11.9999 11.9999L22.3149 10.7145C23.0678 10.6718 23.7016 11.2843 23.6929 12.0154C23.6843 12.735 23.056 13.3275 22.3149 13.2852C18.8766 12.8568 15.4382 12.4283 11.9999 11.9999Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M12 12L20.2027 18.3849C20.7653 18.8871 20.7803 19.7684 20.2572 20.2791C19.7423 20.782 18.879 20.7566 18.3849 20.2027C16.2566 17.4685 14.1283 14.7342 12 12Z"
                fill="#d8d8d8"
              ></path>
              <path
                d="M12 12L13.2853 22.315C13.328 23.0679 12.7155 23.7017 11.9845 23.693C11.2648 23.6845 10.6724 23.0561 10.7147 22.315C11.1431 18.8767 11.5715 15.4383 12 12Z"
                fill="#d8d8d8"
              ></path>
            </svg>
            <div className="text-[0.6rem] text-[#d8d8d8] ">
              <div>Open for any</div>
              <div>collaborations and offers</div>
            </div>
          </div>
          <div>
            <Link href="/" style={{fontFamily:"Poppins"}} className="text-[#d8d8d8] text-[26px] font-[600] flex gap-1">Tarang</Link>
          </div>
          <div className="text-[#d8d8d8] text-[16px] font-[600] flex gap-1">
            <Link href="/" className="hover:text-[#d8d8d8]">
              Home,
            </Link>
            <Link href="/work" className="hover:text-[#d8d8d8]">
              Work,
            </Link>
            <Link href="/contact" className="hover:text-[#d8d8d8]">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="min-h-screen"></div>
    </section>
  );
}
