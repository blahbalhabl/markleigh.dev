import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from '@/components/header';
import Landing from '@/components/landing';
import SkillShelf from '@/components/shelf';
import { TracingBeam } from '@/components/ui/tracing-beam';
import Projects from '@/components/projects';
// import Resume from '@/components/resume';

const App = () => {
  return (
    <>
      <TracingBeam>
        <div className="flex min-h-dvh w-full flex-col items-start justify-start overflow-x-hidden px-5 lg:px-20 xl:w-[70rem] xl:px-0">
          <Header />
          <Landing />
          <SkillShelf />
        </div>
        {/* Vercel Analytics */}
      </TracingBeam>
      <Projects />
      {/* <Resume /> */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </>
  );
};

export default App;
