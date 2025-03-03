import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SKILLS } from '@/constants/skills';
import { cn } from '@/lib/utils';

// Animated title component
const AnimatedTitle = () => {
  const title = 'Technical Skills';

  // Animation variants for text reveal
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative mb-20 flex flex-col items-center">
      {/* Animated gradient circle background */}
      <div className="animate-slow-pulse absolute -z-10 h-64 w-64 rounded-full bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 blur-3xl"></div>

      {/* Animated text */}
      <motion.div
        className="relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="mb-1 flex">
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block text-5xl font-bold lg:text-6xl"
              style={{
                color: letter === ' ' ? 'transparent' : 'hsl(var(--primary))',
                textShadow:
                  letter === ' ' ? 'none' : '0 0 8px rgba(255,255,255,0.1)',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Animated underline */}
        <motion.div
          className="h-1 w-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '100%', opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Subtitle text */}
      <motion.p
        className="mt-4 text-center text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Modern technologies I specialize in
      </motion.p>
    </div>
  );
};

const SkillCard = ({
  icon,
  name,
  color,
  description,
  index,
  totalItems,
  colCount,
}: {
  icon: string;
  name: string;
  color: string;
  description: string;
  index: number;
  totalItems: number;
  colCount: number;
}) => {
  // Calculate position (row and column)
  const row = Math.floor(index / colCount);
  const col = index % colCount;
  const isLastRow = row === Math.floor((totalItems - 1) / colCount);
  const isLastCol = col === colCount - 1 || index === totalItems - 1;

  // Calculate border classes based on position
  const borderClasses = `
    ${!isLastCol ? 'border-r' : ''}
    ${!isLastRow ? 'border-b' : ''}
    border-gray-700
  `;

  return (
    <div
      className={cn(
        'card group relative flex h-[250px] flex-col items-center justify-end overflow-hidden backdrop-blur-sm transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:h-[280px]',
        borderClasses
      )}
    >
      {/* Background icon in upper left */}
      <Icon
        icon={icon}
        fontSize={300}
        className="animate-slow-spin absolute -left-20 -top-20 text-gray-300 opacity-[1%]"
      />

      {/* Main animated icon */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 ease-in-out group-hover:top-16 group-hover:scale-75">
        <Icon
          icon={icon}
          fontSize={100}
          className={cn(
            'opacity-70 transition-all duration-700 group-hover:opacity-100',
            color
          )}
        />
      </div>

      {/* Text content that appears on hover */}
      <div className="flex translate-y-10 flex-col items-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="relative z-50 mb-2 text-xl font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {name}
        </h1>
        <p className="relative z-50 mb-4 px-6 text-center text-sm font-normal text-slate-400 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

const SkillShelf = () => {
  // State to store the current column count
  const [colCount, setColCount] = useState(5); // Default for SSR

  // Function to calculate column count based on window width
  const getColumnCount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) return 5; // xl
      if (width >= 1024) return 4; // lg
      if (width >= 768) return 3; // md
      if (width >= 640) return 2; // sm
      return 1;
    }
    return 5;
  };

  // Update column count on mount and window resize
  useEffect(() => {
    // Set initial column count
    setColCount(getColumnCount());

    // Handler function for resize events
    const handleResize = () => {
      setColCount(getColumnCount());
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="shelf" className="container my-36 self-center py-20">
      <AnimatedTitle />
      <div className="mx-auto grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {SKILLS.map((skill, i) => (
          <SkillCard
            key={i}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
            description={skill.description}
            index={i}
            totalItems={SKILLS.length}
            colCount={colCount}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillShelf;
