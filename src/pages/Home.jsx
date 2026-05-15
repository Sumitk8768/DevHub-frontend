import BlogCard from "../components/blogs/BlogCard";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/Projects/ProjectCard";
import EngineeringInsights from "../sections/EngineeringInsights";
import TrendingProjects from "../sections/TrendingProjects";

export default function Home() {


  const blogs = [
    {
      title: "The Art of Memory Safety in Modern Distributed Systems",
      date: "April 12, 2024",
      read: "12 min read",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Beyond CSS: Building a Production-Ready Design System",
      date: "April 08, 2024",
      read: "8 min read",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Optimizing Database Latency for 10M Concurrent Users",
      date: "April 05, 2024",
      read: "15 min read",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div
      className="min-h-screen"
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
