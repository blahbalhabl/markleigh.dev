import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/header';
import Landing from '@/components/landing';
import SkillShelf from '@/components/shelf';
import { TracingBeam } from './components/ui/tracing-beam';

const App = () => {
  return (
    <TracingBeam>
      <div className="flex min-h-dvh w-full flex-col items-start justify-start overflow-x-hidden px-5 lg:px-20 xl:w-[70rem] xl:px-0">
        <Header />
        <Landing />
        <SkillShelf />
        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </TracingBeam>
  );
};

export default App;
