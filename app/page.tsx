"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { CanvasRevealEffectDemo } from "@/components/canvas-reveal-demo";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Footer from "@/components/footer";
import { useRef } from "react";
import { FaMailBulk } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import image01 from "./logos/pic01.jpg"
import image02 from "./logos/pic02.jpg"
import image03 from "./logos/pic03.jpg"
import image04 from "./logos/pic4.jpg";
import image05 from "./logos/pic5.jpg";
import {Imagesslider} from "@/components/slider/slider.component";

export default function Home() {
  const words = ["Women", "Youth", "Children"];
  const projects = [
    {
      title: "Adolescent, Youth Empowerment",
      description:
          "This program empowers adolescents and youth through skills development and leadership initiatives, providing them with opportunities to enhance their capabilities and build a brighter future.",
      link: "https://www.sefocha.org",
      image: image01,
    },
    {
      title: "Community Health Promoter’s Sensitization on Children’s Rights and Protection",
      description:
          "Community health promoters are trained to advocate for children’s rights and protection, ensuring the safety and well-being of children through targeted sensitization efforts.",
      link: "https://www.sefocha.org",
      image: image02,
    },
    {
      title: "Sanitary Pads Distribution for Adolescent Girls",
      description:
          "Providing sanitary pads to adolescent girls to ensure they stay in school and maintain their health, fostering dignity and education for young girls.",
      link: "https://www.sefocha.org",
      image: image03,
    },
    {
      title: "Caregiver & Adolescent Positive Parenting Training",
      description:
          "Training for caregivers and parents of adolescents on positive parenting techniques, promoting healthy family dynamics and adolescent development.",
      link: "https://www.sefocha.org",
      image: image04,
    },
    {
      title: "Adolescent Life Skill Training and Sexual Reproductive Health Sensitization",
      description:
          "Offering life skill training and sexual reproductive health sensitization to adolescents, empowering them with knowledge to make informed decisions for their health and future.",
      link: "https://www.sefocha.org",
      image: image05,
    },
    {
      title: "Sanitary Pads Distribution for Adolescent Girls",
      description:
          "Distributing sanitary pads to adolescent girls to ensure their well-being, supporting their education and overall development by promoting health and dignity.",
      link: "https://www.sefocha.org",
      image: image03,
    },

  ];
  const themes = [
    {
      quote:
        "Climate change knows no borders. It will not stop before the Pacific islands and the whole of the international community here has to shoulder a responsibility to bring about a sustainable development.",
      name: "Angela Merkel",
      title: "Climate Change",
    },
  ];
  const content = [
    {
      title: "Environmental Sustainability & Livelihoods",
      description:
        "We address climate change through conservation initiatives, risk reduction strategies, and sustainable agriculture. By promoting eco-friendly farming, food security, and climate resilience, we support youth and women in achieving self-sufficiency and environmental stewardship..",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Environmental Sustainability & Livelihoods
        </div>
      ),
    },
    {
      title: "Economic Empowerment, Education & Health",
      description:
        " We empower women and youth through skills development, enterprise incubation, and financial inclusion to foster economic growth. Our education programs advocate for equal access to quality learning, supporting school infrastructure, vocational training, and policy advocacy. In healthcare, we enhance community capacity to combat diseases, promote sexual reproductive health, and collaborate with government agencies for sustainable health services.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Economic Empowerment, Education & Health
        </div>
      ),
    },
    {
      title: "Social Inclusion & Human Rights",
      description:
        "We champion the rights of marginalized groups, including persons with disabilities and survivors of gender-based violence. Through advocacy, capacity-building, and community engagement, we address discrimination, promote inclusivity, and empower vulnerable populations. Our human rights programs focus on governance, awareness, and policy influence to ensure equal opportunities for all.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Social Inclusion & Human Rights
        </div>
      ),
    },
  ];
  const typeWords = [
    {
      text: "Adolescent Empowerment "
    },
    {
      text: ",  "
    },
    {
      text: "Community Health   ",
    },
    {
      text: ",  "
    },
    {
      text: "Youth Support   ",
    },
    {
      text: ",  "
    },
    {
      text: "Health   ",
    },
    {
      text: " "
    },
    {
      text: "& "
    },
    {
      text: " "
    },
    {
      text: "Women Empowerment   ",
    },
    {
      text: "- ",
      className: "text-slate-300 dark:text-slate-300",
    },
    {
      text: "SEFOCHA.",
      className: "text-slate-300 dark:text-slate-300",
    },
  ];
  const placeholders = [
    "When is the hackathon starting?",
    "Who are the judges?",
    "Can I be a solo-hacker?",
    "Must I be a student at DeKUT to participate?",
    "Who built this site😂?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("onSubmit triggered"); // Add this line
  };
  return (
    <div className="max-w-[1020px] mx-auto my-0">
      <Navbar />
      <div className="">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mt-20 md:mt-0"
          >
            Seed For Change <br /> Empowering <FlipWords words={words} />
          </motion.h1>
        </LampContainer>
      </div>
      <Imagesslider/>
      <div className="md-mx-0 mx-2">
        <h1 className="text-[#bcdc49] text-3xl md:text-5xl font-bold text-center mb-4 mt-32">
          Our Impact
        </h1>
        <div className="max-w-[800px] flex items-center justify-center mx-auto my-0 p-8">
          <p className="text-gray-300 text-center leading-relaxed">
          </p>
        </div>
        <StickyScroll content={content} />
        <h1 className="text-[#bcdc49] text-3xl md:text-5xl font-bold text-center mb-4 mt-32">
          Thematic Areas
        </h1>
        <HoverEffect items={projects} />
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-slate-950 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={themes}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
        <h1 className="text-[#bcdc49] text-3xl md:text-5xl font-bold text-center mb-4 mt-32">
          Why SeFoCHa For the community ?
        </h1>
        <div className="bg-slate-950">
          <CanvasRevealEffectDemo />
        </div>
        <TypewriterEffect words={typeWords} />
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-gray-600 mt-12 ">
          Have a question? Feel free to ask us!
        </h2>
        {/* <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        /> */}
        <div className="flex items-center justify-center">
          <a
            href="mailto:info@sefocha.org"
            className="flex items-center justify-center text-gray-900 rounded-md bg-slate-950 border-2 border-cyan-950 hover:bg-transparent hover:scale-110 ease-in duration-200 hover:text-gray-400"
          >
            <button className="rounded-lg px-4 py-4 flex justify-between gap-2 text-xl">
              Send us a mail
              <MdMail color="blue" size="2rem" />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
