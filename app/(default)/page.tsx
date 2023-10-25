export const metadata = {
  title: "Angeloper llc - Home",
  description:
    "Discover how US software startup Angeloper is taking the lead in AI, Blockchain, and Business system development. Learn more about our innovative solutions and join us today.",
};

/*

*/
import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
