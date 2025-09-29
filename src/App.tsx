import { HeroSection } from "./components/hero-section";
import { ProblemStatement } from "./components/problem-statement";
import { SolutionFeatures } from "./components/solution-features";
import { ImpactSection } from "./components/impact-section";
import { HowItWorks } from "./components/how-it-works";
import { Partnerships } from "./components/partnerships";
import { Testimonials } from "./components/testimonials";
import { FinalCTA } from "./components/final-cta";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <SolutionFeatures />
      <ImpactSection />
      <HowItWorks />
      <Partnerships />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
