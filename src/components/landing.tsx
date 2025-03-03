import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FlipWords } from '@/components/ui/flip-words';
import { Meteors } from '@/components/ui/meteors';

import { cn } from '@/lib/utils';

const SOCIALS = Object.freeze([
  {
    name: 'LinkedIn',
    icon: 'eva:linkedin-fill',
    link: 'https://www.linkedin.com/in/mark-leigh-david-282383201/',
  },
  {
    name: 'GitHub',
    icon: 'charm:github',
    link: 'https://www.github.com/blahbalhabl',
  },
  {
    name: 'WhatsApp',
    icon: 'flowbite:whatsapp-solid',
    link: 'https://wa.me/639766439701',
  },
]);

const BorderBox = ({
  className,
  children,
  origin = 'left',
  isRotating = false, // New prop to control rotation
}: {
  className?: string;
  children?: React.ReactNode;
  origin?: 'left' | 'right';
  isRotating?: boolean;
}) => {
  // Generate random delay between 0.1 and 1 second
  const randomDelay = React.useMemo(() => Math.random() * 0.9 + 0.1, []);

  // Generate random duration between 1 and 2 seconds for initial animation
  const randomDuration = React.useMemo(() => Math.random() * 1 + 1, []);

  // Generate longer random duration (2-4 seconds) for repeat animations
  const repeatDuration = React.useMemo(() => Math.random() * 1.5 + 1.5, []);

  // Check if the component has children
  const hasChildren = !!React.Children.count(children);

  return (
    <div className="relative size-[70px] overflow-hidden lg:size-[80px] xl:size-[100px]">
      <motion.div
        className={cn(
          'absolute h-full w-full border border-primary p-2 sm:p-3 md:p-5',
          className,
          origin === 'left' ? 'left-0' : 'right-0'
        )}
        initial={{
          width: 0,
          opacity: 0,
        }}
        animate={{
          width: '100%',
          opacity: 1,
          rotateX: hasChildren && isRotating ? 360 : 0,
        }}
        transition={{
          duration: randomDuration,
          delay: randomDelay,
          ease: 'easeInOut',

          // Width animation repeats for boxes without children
          ...(!hasChildren && {
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 2,
            duration: repeatDuration,
          }),

          // RotateX animation for boxes with children when it's their turn
          ...(hasChildren &&
            isRotating && {
              rotateX: {
                duration: 2,
              },
            }),
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Landing = () => {
  const flipWords = [
    'React',
    'NextJS',
    'TanStack',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'TailwindCSS',
    'MaterialUI',
  ];

  // Icons used in boxes with children
  const iconRefs = React.useRef<string[]>([
    'skill-icons:tailwindcss-dark',
    'devicon:react',
    'logos:react-query-icon',
    'skill-icons:git',
    'skill-icons:mongodb',
    'skill-icons:typescript',
    'devicon:nextjs',
  ]);

  // Keep track of which box is currently rotating
  const [rotatingBoxIndex, setRotatingBoxIndex] = React.useState<number>(0);

  // Set up interval to change which box is rotating
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotatingBoxIndex(
        (prevIndex) => (prevIndex + 1) % iconRefs.current.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full min-h-[calc(100dvh-300px)] w-full flex-col gap-10 self-center lg:flex-row lg:items-center">
      {/* Container for aside and content div in a row at lg breakpoint */}
      <div className="flex flex-row items-center gap-5 lg:w-2/3 xl:w-fit xl:flex-1">
        <aside className="flex h-full flex-col items-center justify-center gap-10">
          {SOCIALS.map((social, i) => (
            <Button
              key={i}
              variant="roundedGhost"
              className="h-fit py-1 hover:text-accent"
              asChild
            >
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
        <div className="relative z-10 flex w-full flex-col gap-10 sm:max-w-[483px]">
          <Meteors number={10} />
          <div className="w-[250px] sm:w-full">
            <h2 className="text-left font-sans text-4xl font-bold leading-none lg:text-5xl xl:text-[64px]">
              <FlipWords words={flipWords} className="text-accent" />
            </h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="ml-20 font-sans text-4xl font-bold text-primary lg:text-5xl xl:text-[64px]"
            >
              Developer
            </motion.h2>
          </div>
          <div className="z-10 text-wrap text-xs text-secondary-foreground sm:text-sm xl:text-[16px]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi there! I'm a passionate full stack developer with a knack for
              creating dynamic and responsive web applications. My expertise
              lies in React and TypeScript, and I leverage cutting-edge
              technologies like
              <motion.span className="text-accent">
                {' '}
                Vite, Next.js, Express, Node.js, and REST frameworks{' '}
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
              className="absolute right-[5px] top-1/2 -translate-y-1/2 transform gap-0 bg-background pl-5 text-[14px] text-accent"
              variant="rounded"
            >
              <p className="underline-animation">Let&apos;s Talk</p>
              <Icon
                icon="mi:chevron-right"
                className="mb-[1px]"
                fontSize={20}
              />
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Border boxes grid in a column at lg breakpoint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 mx-auto grid w-fit grid-cols-5 justify-center lg:w-1/3 lg:justify-end xl:w-fit"
      >
        <Meteors number={10} />
        {/* Row 1 */}
        <BorderBox className="border-l-0 border-r-0 border-t-0 bg-transparent" />
        <BorderBox
          className="border-l-0 border-t-0 bg-primary/10 backdrop-blur-sm"
          origin="left"
        />
        <BorderBox
          className="border-l-0 border-t-0 bg-transparent"
          origin="right"
          isRotating={rotatingBoxIndex === 0} // First box with icon
        >
          <Icon
            icon="skill-icons:tailwindcss-dark"
            className="z-50 h-full w-full"
          />
        </BorderBox>
        <BorderBox className="border-l-0 border-r-0 border-t-0 bg-transparent" />
        <BorderBox className="border-0 bg-transparent" />
        {/* Row 2 */}
        <BorderBox
          className="border-l-0 border-t-0 bg-transparent"
          origin="left"
        />
        <BorderBox
          className="border-l-0 border-t-0 bg-primary/5 backdrop-blur-sm"
          origin="right"
          isRotating={rotatingBoxIndex === 1} // Second box with icon
        >
          <Icon icon="devicon:react" className="z-50 h-full w-full" />
        </BorderBox>
        <BorderBox
          className="border-l-0 border-t-0 bg-primary/30 backdrop-blur-sm"
          origin="right"
          isRotating={rotatingBoxIndex === 2} // Third box with icon
        >
          <Icon icon="logos:react-query-icon" className="z-50 h-full w-full" />
        </BorderBox>
        <BorderBox
          className="border-l-0 border-t-0 bg-transparent"
          origin="left"
        />
        <BorderBox
          className="border-l-0 border-r-0 border-t-0 bg-primary/10 backdrop-blur-sm"
          origin="left"
        />
        {/* Row 3 */}
        <BorderBox className="border-b-0 border-l-0 border-t-0 bg-transparent" />
        <BorderBox
          className="border-l-0 border-r-0 border-t-0 bg-primary/10 backdrop-blur-sm"
          origin="left"
        />
        <BorderBox
          className="border-t-0 bg-primary/5 backdrop-blur-sm"
          origin="right"
          isRotating={rotatingBoxIndex === 3} // Fourth box with icon
        >
          <Icon icon="skill-icons:git" className="z-50 h-full w-full" />
        </BorderBox>
        <BorderBox
          className="border-l-0 border-t-0 bg-primary/10 backdrop-blur-sm"
          origin="right"
          isRotating={rotatingBoxIndex === 4} // Fifth box with icon
        >
          <Icon icon="skill-icons:mongodb" className="z-50 h-full w-full" />
        </BorderBox>
        <BorderBox className="border-b-0 border-l-0 border-r-0 border-t-0 bg-transparent" />
        {/* Row 4 */}
        <BorderBox className="border-0 bg-transparent" />
        <BorderBox
          className="border-l-0 border-t-0 bg-transparent"
          origin="right"
          isRotating={rotatingBoxIndex === 5} // Sixth box with icon
        >
          <Icon icon="skill-icons:typescript" className="z-50 h-full w-full" />
        </BorderBox>
        <BorderBox
          className="border-l-0 border-t-0 bg-transparent"
          origin="left"
        />
        <BorderBox
          className="border-b-0 border-l-0 border-t-0 bg-transparent"
          origin="left"
        />
        <BorderBox
          className="border-0 bg-primary/5 backdrop-blur-sm"
          origin="right"
          isRotating={rotatingBoxIndex === 6} // Seventh box with icon
        >
          <Icon icon="devicon:nextjs" className="z-50 h-full w-full" />
        </BorderBox>
      </motion.div>
    </div>
  );
};

export default Landing;
