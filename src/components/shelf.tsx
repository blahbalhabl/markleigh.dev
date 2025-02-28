import { Icon } from '@iconify/react';

import { Meteors } from '@/components/ui/meteors';
// import { cn } from '@/lib/utils';

const SkillShelf = () => {
  return (
    <div
      className="my-36 flex w-[70rem] flex-wrap items-center justify-center gap-5 self-center py-20 sm:gap-20"
      id="shelf"
    >
      {/* <div
        className={cn(
          'card group relative mx-auto flex h-96 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800',
          'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
          // Preload hover image by setting it in a pseudo-element
          'before:fixed before:inset-0 before:z-[-1] before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:opacity-0',
          'hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]',
          "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
          'transition-all duration-500'
        )}
      >
        Hello World
      </div> */}
      {/* React Card */}
      <div className="relative h-[350px] w-full max-w-xs">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-primary to-accent blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <Icon
            icon="flowbite:react-solid"
            fontSize={100}
            className="z-10 text-cyan-400"
          />
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            React
          </h1>
          <p className="relative z-50 mb-4 text-center text-base font-normal text-slate-500">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default SkillShelf;
