import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Countdown from "@/components/Countdown";
import StandesamtInfo from "@/components/StandesamtInfo";
import Venue from "@/components/Venue";
import Itinerary from "@/components/Itinerary";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";

type WeddingPageProps = {
  /**
   * true = Familien-Variante (/familie): zeigt zusätzlich die
   * standesamtliche Trauung im Ablauf und einen eigenen Infoblock.
   */
  withStandesamt?: boolean;
};

/**
 * Gemeinsamer Seitenaufbau für beide Einladungsvarianten. So müssen
 * Inhalte nur an einer Stelle gepflegt werden.
 */
export default function WeddingPage({
  withStandesamt = false,
}: WeddingPageProps) {
  return (
    <>
      <Navbar withStandesamt={withStandesamt} />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Countdown />
        {withStandesamt && <StandesamtInfo />}
        <Venue />
        <Itinerary withStandesamt={withStandesamt} />
        <InfoCards />
      </main>
      <Footer />
    </>
  );
}
