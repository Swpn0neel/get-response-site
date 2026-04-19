import Navbar from "@/components/Navbar";
import DocsSidebar from "@/components/DocsSidebar";
import Footer from "@/components/Footer";
import { getLatestCLIVersion } from "@/lib/version";
import { DocsPageClient } from "./DocsPageClient";

export default async function DocsPage() {
  const version = await getLatestCLIVersion();

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="container mx-auto flex">
        {/* Sticky Sidebar */}
        <div className="hidden lg:block">
          <DocsSidebar version={version} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 min-w-0 scroll-smooth">
          <DocsPageClient />
        </div>
      </main>

      <Footer />
    </div>
  );
}
