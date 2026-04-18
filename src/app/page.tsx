import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import { getLatestCLIVersion } from "@/lib/version";

export default async function Home() {
  const latestVersion = await getLatestCLIVersion();

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero version={latestVersion} />
      <Features />
      <Comparison />
      <Footer />
    </main>
  );
}
