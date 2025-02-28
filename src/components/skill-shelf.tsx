import { cn } from "@/lib/utils";

const SkillShelfTwo = () => {
  return (
    <div
      id="shelf"
      className="h-dvh w-full grid grid-cols-12 transition-all my-36 overflow-x-clip"
    >
      <div
        className={cn("col-span-3 bg-red-300 hover:col-span-6 transition-all")}
      >
        Hello
      </div>
      <div className="col-span-3 bg-blue-300">Hello</div>
      <div className="col-span-3 bg-yellow-300">Hello</div>
      <div className="col-span-3 bg-green-300">Hello</div>
    </div>
  );
};

export default SkillShelfTwo;
