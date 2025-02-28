import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/header';
import Landing from '@/components/landing';
// import SkillShelf from '@/components/shelf';
// import SkillShelfTwo from "@/components/skill-shelf";

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      {/* <SkillShelf /> */}
      {/* <SkillShelfTwo /> */}
      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
};

export default App;
