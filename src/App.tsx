import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Landing from "@/components/landing";

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <BackgroundBeams />
      <Analytics />
    </>
  );
};

export default App;
