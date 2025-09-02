import Features01Page from "@/components/features-01/features-01";
import GettingStarted from "@/components/getting-started/getting-started";
import Footer05Page from "@/components/footer-05/footer-05";
import Hero06 from "@/components/hero-06/hero-06";

export default function Home() {
  return (
    <main>
      <Hero06 />
      <Features01Page />
      <GettingStarted />
      <Footer05Page />
    </main>
  );
}