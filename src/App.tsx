import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Recommendations } from "./components/Recommendations";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Projects />
        <Experience />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}
