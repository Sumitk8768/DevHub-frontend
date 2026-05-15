import Hero from "../components/Hero";

import EngineeringInsights from "../sections/EngineeringInsights";
import TrendingProjects from "../sections/TrendingProjects";

export default function Home() {
  return (
    <div
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Hero />
      </section>

      {/* TRENDING PROJECTS */}
      <TrendingProjects />

      {/* ENGINEERING INSIGHTS */}
      <EngineeringInsights />
    </div>
  );
}