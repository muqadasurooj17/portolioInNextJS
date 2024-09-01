"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Perkchops",
    desc: "Full Stack Development | UI | Next JS |Stripe | MySQL.",
    img: "/perk.png",
    link: "https://perkchops.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Adventure web",
    desc: "Full Stack Development | UI | Next JS",
    img: "/travel.png",
    link: "https://traveladventure-21.netlify.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Book App",
    desc: "Frontend Development | UI | React JS.",
    img: "/appLaunh.png",
    link: "https://applaunchweb.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Travel Web",
    desc: "Full Stack Development | UI | Next JS | Frammer Motion. ",
    img: "/camparea.png",
    link: "https://adventurous-website.netlify.app/",
    
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-0 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-100 h-60 md:w-100 md:h-70 lg:w-[700px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-2 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col mt-4 gap-4 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project??</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer and UI Designer !!
              </textPath>
            </text>
          </motion.svg>
          <a
            href="https://www.linkedin.com/in/muqadas-urooj/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            Contact Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
