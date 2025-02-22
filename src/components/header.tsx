import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/assets/icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-14 z-10 w-full">
      <div className="flex items-center gap-10">
        <Logo className="text-5xl" />
        <h1 className="font-medium text-2xl text-primary z-10">
          Mark Leigh David
        </h1>
      </div>
      <div className="flex gap-4">
        <Button variant="roundedGhost" className="py-1 pl-5 h-fit " asChild>
          <a href="#shelf">
            <p className="underline-animation">Shelf</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={21} />
          </a>
        </Button>
        <Button variant="roundedGhost" className="py-1 pl-5 h-fit" asChild>
          <a href="#projects">
            <p className="underline-animation">Projects</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={21} />
          </a>
        </Button>
        <Button variant="rounded" className="py-1 pl-5 h-fit" asChild>
          <a href="#resume">
            <p className="underline-animation">Resume</p>
            <Icon icon="mi:chevron-right" className="mb-[1px]" fontSize={21} />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
