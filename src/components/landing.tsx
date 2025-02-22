import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FlipWords } from "@/components/ui/flip-words";

import AppleMemoji from "@/assets/2558af3c-6a64-47b6-8c5b-ac1e82885afd.webp";

const SOCIALS = Object.freeze([
  {
    name: "LinkedIn",
    icon: "eva:linkedin-fill",
    link: "https://www.linkedin.com/in/mark-leigh-david-282383201/",
  },
  {
    name: "GitHub",
    icon: "charm:github",
    link: "https://www.github.com/blahbalhabl",
  },
  {
    name: "WhatsApp",
    icon: "flowbite:whatsapp-solid",
    link: "https://wa.me/639766439701",
  },
]);

const Landing = () => {
  const flipWords = [
    "React",
    "NextJS",
    "TanStack",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "TailwindCSS",
    "MaterialUI",
  ];

  return (
    <div className="flex h-[calc(100dvh-300px)] gap-10 items-center justify-between">
      <aside className="flex flex-col gap-10 items-center justify-center h-full">
        {SOCIALS.map((social, i) => (
          <Button key={i} variant="roundedGhost" className="py-1 h-fit" asChild>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              href={social.link}
            >
              <Icon icon={social.icon} className="mb-[1px]" fontSize={25} />
            </motion.a>
          </Button>
        ))}
      </aside>
      <div className="flex-1 gap-10 flex-col z-10 flex">
        <div>
          <h2 className="text-left text-[64px] font-sans font-bold leading-none">
            <FlipWords words={flipWords} className="text-accent" />
          </h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-right text-[64px] text-primary font-sans font-bold"
          >
            Developer
          </motion.h2>
        </div>
        <div className="text-wrap text-secondary-foreground text-[16px] z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi there! I'm a passionate full stack developer with a knack for
            creating dynamic and responsive web applications. My expertise lies
            in React and TypeScript, and I leverage cutting-edge technologies
            like
            <motion.span className="text-accent">
              {" "}
              Vite, Next.js, Express, Node.js, and REST frameworks{" "}
            </motion.span>
            to deliver top-notch solutions. Whether it's building a sleek
            front-end interface or a robust back-end system, I'm dedicated to
            bringing your vision to life with precision and creativity. Let's
            collaborate and make something amazing together!
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          <Input placeholder="Email Address" />
          <Button
            className="absolute right-[5px] gap-0 pl-5 bg-background text-accent text-[14px] top-1/2 transform -translate-y-1/2"
            variant="rounded"
          >
            <p className="underline-animation">Let&apos;s Talk</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={20} />
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 z-10 justify-end flex"
      >
        <img className="h-[450px]" src={AppleMemoji} alt="Memoji" />
      </motion.div>
    </div>
  );
};

export default Landing;
