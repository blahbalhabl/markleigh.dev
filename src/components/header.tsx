import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/assets/icons';
import { Meteors } from '@/components/ui/meteors';

const Header = () => {
  return (
    <header className="relative z-20 flex h-fit w-full items-center justify-between self-center py-5 sm:py-14">
      <Meteors number={20} />
      <div className="flex items-center gap-5 sm:gap-10">
        <Logo className="text-3xl sm:text-5xl" />
        <h1 className="z-10 text-lg font-medium text-primary sm:text-2xl">
          Mark Leigh David
        </h1>
      </div>
      <div className="flex gap-4">
        <Button
          variant="roundedGhost"
          className="hidden h-fit py-1 pl-5 sm:flex"
          onClick={() => {
            document.getElementById('shelf')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          asChild
        >
          <a onClick={(e) => e.preventDefault()} href="#shelf">
            <p className="underline-animation">Shelf</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={21} />
          </a>
        </Button>
        <Button
          variant="roundedGhost"
          className="hidden h-fit py-1 pl-5 sm:flex"
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          asChild
        >
          <a onClick={(e) => e.preventDefault()} href="#projects">
            <p className="underline-animation">Projects</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={21} />
          </a>
        </Button>
        <Button
          variant="rounded"
          className="h-fit py-1 pl-5 text-sm"
          onClick={() => {
            document.getElementById('resume')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          asChild
        >
          <a onClick={(e) => e.preventDefault()} href="#resume">
            <p className="underline-animation">Resume</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={21} />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
